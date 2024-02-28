const Footer = ({length})=>{
    const today = new Date();
    return (
        <footer>
            {<p>There { length>1?"are":"is" } {length}{length>1?" Items":" Item"} in the list</p>}
            <p className="copyright">
                Copyright &copy; {today.getFullYear()} 
            </p>
        </footer>
    )
} 

export default Footer