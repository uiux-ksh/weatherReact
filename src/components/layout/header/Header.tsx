import Logo from "./logo/Logo";
import SelectMap from "./selectMap/SelectMap";
import "./header.scss"
function Header(){
    return(
        <header className="header">
            <Logo/>
            <SelectMap />
        </header>
    )
}
export default  Header;