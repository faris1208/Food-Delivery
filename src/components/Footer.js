import twitter from "../assets/img/ant-design_twitter-outlined.svg";
import facebook from "../assets/img/ant-design_facebook-filled.svg";
import linkedin from "../assets/img/ant-design_linkedin-filled.svg";
import food2 from "../assets/img/Bella Olonje logo 111 1.svg";

const Footer = () => {
    return ( 
        <footer>
            <div className="footer-container">
                <div className="download">
                    <h1>Download the app now.</h1>
                    <p>Most calendars are designed for teams. </p>
                    <h6>Available on your favorite store. Start your premium experience now</h6>
                    <div className="free-btn">
                        <button className="btn3">Buy now</button>
                        <button className="btn4">Try for free</button>
                    </div>
                    <div className="free-btn2">
                        <button className="btn5">Playstore</button>
                        <button className="btn6">App store</button>
                    </div>
                </div>

                <div className="footer-contents">
                    <div className="Bella2">
                        <img src={food2} alt="" className="food-image2" width="100%" />
                    </div>
                    <div className="twitter">
                        <img src={twitter} alt="" className="twitter-image2" width="100%" />
                        <img src={facebook} alt="" className="twitter-image2" width="100%" />
                        <img src={linkedin} alt="" className="twitter-image2" width="100%" />
                    </div>
                    <div className="last">
                        <p>Just type what's on your mind and we'll </p>
                        <h6>Copywright 2020 Bella Onojie.com</h6>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;