const Login = ({ setisLoggedIn, user })=>{
    return (
        <>
          <h1>Hello {`${user}`}</h1>
          <p>Please Log in to view your subjects</p>
          <button className = "login" onClick={ ()=> setisLoggedIn(true)}>Log in</button>
        </>
    )
}

export default Login