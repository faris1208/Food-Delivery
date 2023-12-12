import mobile from "../assets/img/Group 54.png";
import mobile2 from "../assets/img/Group 53.svg";
import phone from "../assets/img/Rectangle (4).png";
import phone2 from "../assets/img/Rectangle.svg";
import phones from "../assets/img/Rectangle (1).svg";
import phoned from "../assets/img/Rectangle (3).svg";
import payment from "../assets/img/Rectangle (2).svg";
import payments from "../assets/img/Rectangle (4).svg";
const Home = () => {
    return ( 
        <div className="home-container">
            <div className="new">
                <div className="home-contents">
                    <div className="food-app">
                        <p>Food app</p>
                        <h1>Why stay hungry when you can order form Bella Onojie</h1>
                        <h6>Download the bella onoje’s food app now on </h6>
                    </div>
                    <div className="playstore">
                        <button className="btn1">Playstore</button>
                        <button className="btn2">App store</button>
                    </div>
                </div>

                <div className="double-moile">
                    <img src={mobile} alt="" className="mobile-image" width="100%" />
                    <img src={mobile2} alt="" className="mobile2-image" width="100%" />
                </div>
            </div>
            <div className="works">
                <hr></hr>
                 <h1>How the app works</h1>
            </div>

            <div className="phone-container">
                <div className="create">
                    <p>Create an account</p>
                    <h1>Create/login to an existing account to get started</h1>
                    <h5>An account is created with your email and a desired password</h5>
                </div>
                <div className="phone1">
                     <img src={phone} alt="" className="phone-image" width="100%" />
                     <img src={phone2} alt="" className="phone-image2" width="100%" />
                </div>
            </div>

            <div className="tomato-container">
                <div className="tomato">
                    <p>Explore while shopping</p>
                    <h1>Shop for your favorites meal as e dey hot.</h1>
                    <h5>Shop for your favorite meals or drinks and enjoy while doing it.</h5>
                </div>
                <div className="tomato1">
                     <img src={phones} alt="" className="tomato-image2" width="100%" />
                     <img src={phoned} alt="" className="tomato-mobile" width="100%" />
                </div>
            </div>

            <div className="payment-container">
                <div className="payment">
                    <p>Checkout</p>
                    <h1>When you done check out and get it delivered.</h1>
                    <h5>When you done check out and get it delivered with ease.</h5>
                </div>
                <div className="payment1">
                     <img src={payment} alt="" className="payment-image2" width="100%" />
                     <img src={payments} alt="" className="payment-mobile" width="100%" />
                </div>
            </div>
        </div>
     );
}
 
export default Home;