import logo from "/image/logo.png";
import {FaTwitter} from "react-icons/fa";
import {Link} from "react-router-dom";
import appRoutes from "../routes"; // RxAvatar changed to RiUserLine assuming this is the correct React icon for your use case
import {TiThMenu} from "react-icons/ti";
import {useState} from "react";
import OpenMenuHeader from "./drawer/OpenMenuHeader.tsx";

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-black">
            <div className="container">
                <div className="flex align-center between">
                    <div className="flex align-center">
                        <div className="c-pointer">
                            <Link to={"/"}>
                                <img src={logo} alt="logo"/>
                            </Link>
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
                        <div className="icon-wrapper c-pointer" style={{paddingTop: '5px'}}>
                            <FaTwitter className="social-icon"/>
                        </div>
                        <div className="c-pointer">
                           <p>connect</p>
                        </div>
                        <div onClick={() => setOpen(true)}
                             className="c-pointer show-1024"
                             style={{paddingLeft: '10px'}}>
                            <TiThMenu className="avatar-icon"/>
                        </div>
                    </div>
                </div>
            </div>
            <OpenMenuHeader open={open} setOpen={setOpen}/>
        </div>

    );
}

export default Header;
