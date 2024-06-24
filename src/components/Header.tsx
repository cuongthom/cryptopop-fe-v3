import logo from "/image/logo.png";
import {FaTwitter} from "react-icons/fa";
import {RxAvatar} from "react-icons/rx";
import {Link} from "react-router-dom";
import appRoutes from "../routes"; // RxAvatar changed to RiUserLine assuming this is the correct React icon for your use case


function Header() {
    return (
        <div className="bg-black">
            <div className="container">
                <div className="flex align-center between">
                    <div className="flex align-center">
                        <div className="c-pointer">
                            <img src={logo} alt="logo"/>
                        </div>
                        <div className="text-white flex d-none-1024" style={{padding: '0 30px'}}>
                            <Link to={appRoutes.allPops.path} className="custom-link">
                                <p className="c-pointer" style={{padding: '10px 20px'}}>All Pops</p>
                            </Link>
                            <Link to={appRoutes.buyBox.path} className="custom-link">
                                <p className="c-pointer" style={{padding: '10px 20px'}}>Buy Box</p>
                            </Link>
                            <Link to={appRoutes.attributes.path} className="custom-link">
                                <p className="c-pointer" style={{padding: '10px 20px'}}>Attributes</p>
                            </Link>
                            <p className="c-pointer" style={{padding: '10px 20px'}}>FAQ</p>
                        </div>
                    </div>
                    <div className="text-white flex align-center" style={{justifyContent: 'center'}}>
                        <div className="c-pointer">
                            <h3>Connect Wallet</h3>
                        </div>
                        <div className="icon-wrapper c-pointer" style={{paddingTop: '5px'}}>
                            <FaTwitter className="social-icon"/>
                        </div>
                        <div className="c-pointer">
                            <RxAvatar className="avatar-icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
