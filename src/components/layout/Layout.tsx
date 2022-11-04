import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import './layout.scss';

function Layout() {
    return(
        <div className="layout">
              <Header />
              <Main />
              <Footer/>
        </div>
    )
}
export default  Layout