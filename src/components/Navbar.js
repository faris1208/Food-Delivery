import food from "../assets/img/Bella Olonje logo 111 1.svg";
import hamburger from "../assets/img/bx_bx-menu-alt-right.svg";

const Navbar = () => {
    return ( 
        <div className="navbar-container">
            <div className="navbar-contents">
                <div className="Bella">
                    <img src={food} alt="" className="food-image" width="100%" />
                </div>
                <div className="hamburger">
                  <img src={hamburger} alt="" className="hamburger-image" width="100%" />
                </div>
                <div className="product">
                    <ul>
                        <li>Home</li>
                        <li>Product</li>
                        <li>Faq</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;