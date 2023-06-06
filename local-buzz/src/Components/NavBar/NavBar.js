import SearchBar from "./SearchBar/SearchBar";
import Logo from "./Logo/Logo.js"
import './NavBar.css'

export default function NavBar(){
    return(
        <div id='navbar'>
        <Logo/>
        <SearchBar/>
        </div>
    )
}