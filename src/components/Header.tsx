import logo from "/image/logo.png";
import {FaTwitter} from "react-icons/fa";
import {Link} from "react-router-dom";
import appRoutes from "../routes"; // RxAvatar changed to RiUserLine assuming this is the correct React icon for your use case
import {TiThMenu} from "react-icons/ti";
import {useState} from "react";
import OpenMenuHeader from "./drawer/OpenMenuHeader.tsx";
import {ConnectButton} from "@rainbow-me/rainbowkit";
import {useAccount} from 'wagmi'
import {RxAvatar} from "react-icons/rx";
import {Dropdown, MenuProps} from "antd";

function Header() {
    const account = useAccount()
    const [open, setOpen] = useState(false);
    console.log("account", account)
    const items: MenuProps['items'] = [
        {
            label: (
                <Link to={"/user/my-nfts"}>
                    <p>My nft</p>
                </Link>
            ),
            key: '0',
        },
        {
            label:
                <Link to={"/user/my-shop"}>
                    <p>My shop</p>
                </Link>
            ,
            key: '1',
        },
    ];
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
                            <Link to={"/all-pops/auction"} className="custom-link">
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
                        <div className="c-pointer" style={{fontSize: '16px'}}>
                            <ConnectButton/>
                        </div>
                        {account.address &&
                            <Dropdown className="c-pointer d-none-1024" menu={{items}} trigger={['click']}
                                      overlayStyle={{paddingTop: '16px'}}>
                                <RxAvatar style={{fontSize: '35px', marginLeft: '5px'}}/>
                            </Dropdown>
                        }
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
