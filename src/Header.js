 const Header = ({ title, isLoggedIn, setisLoggedIn })=>{
    const handleLogOut = () =>{
        setisLoggedIn(false)
    }
    return(
        <header> 
            <h1>{title}
            {/* <p className="logout" onClick={handleLogOut}>Log Out</p> */}
            </h1>
        </header>
    )
 }

 Header.defaultProps = {
        title: "'Default Title'"
    }

 export default Header;
