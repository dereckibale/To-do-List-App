import Header from './Header';
import AddItem from './AddItem'
import Search from './Search';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import apiRequest from './apiRequest';

function App() {

const API_URL = 'http://localhost:3000/items';
const [items, setItems] = useState([]);
const [newItem, setnewItem] = useState('');
const [search, setSearch] = useState('');
const [fetchError, setFetchError] = useState(null);
const [isLoading, setIsLoading] = useState(true);
useEffect(()=>{
  
  const fetchItems = async () => {
    try {
      const response = await fetch(API_URL);
      if(!response.ok){
        throw Error('Did not recieve expected data');
      }
      const listItems = await response.json();
      console.log(listItems)
      setItems(listItems);
      setFetchError(null)
    } catch(err) {
      setFetchError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

    fetchItems()

}, [])

const addItem = async (item) => {
  const id = items.length ? items[items.length-1].id + 1 : 1;
  const myNewItem = {id, checked: false, item };
  console.log(myNewItem)
  const listItems = [...items, myNewItem]
  console.log(listItems);
  setItems(listItems);

  const postOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myNewItem)
  }
  const result = await apiRequest(API_URL, postOptions);
  if(result) setFetchError(result);
}

const handleCheck = (id)=>{
  const listItems =  items.map((item)=>
        item.id === id ? { ...item, checked: !item.checked} : item
  );
  setItems(listItems);
}

const handleDelete = (id)=>{
const listItems = items.filter((item)=> item.id !== id);
setItems(listItems);
}

const [isLoggedIn, setisLoggedIn] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  if (!newItem) return;
  // console.log(newItem)
  addItem(newItem)
  setnewItem('');
}
const title = "Add your list of subjects";
const user = 'Dereck'
return (
    <>
      <div className="App">
        <Header title={title} isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>
        <AddItem 
          handleSubmit={handleSubmit}
          newItem={newItem}
          setnewItem={setnewItem}/>
        <Search 
          search={search}
          setSearch={setSearch}
        />
        <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p style={{color: 'red'}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content 
          items={ items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase())) }
          
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        }
        </main>
        <Footer 
          length={items.length}
        />
    </div>
    </>
);
}

export default App;
