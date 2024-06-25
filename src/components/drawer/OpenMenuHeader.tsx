import {useState} from 'react';
import type {DrawerProps, RadioChangeEvent} from 'antd';
import {Button, Drawer, Radio, Space} from 'antd';
import {IoIosClose} from "react-icons/io";
import {Link} from "react-router-dom";
import Routes from "../../routes";
import routes from "../../routes";

function OpenMenuHeader({open, setOpen}) {

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>

            <Drawer
                placement="top"
                closable={false}
                onClose={onClose}
                open={open}
                key="top"
            >
                <div>
                    <div>
                        <IoIosClose onClick={onClose} style={{fontSize: '40px'}}/>
                    </div>
                    <div>
                        <Link to={routes.allPops.path} onClick={onClose} className="custom-link">
                            <p style={{fontSize: '18px', margin: '20px 0'}}>All Pops</p>
                        </Link>
                        <Link to={Routes.buyBox.path} onClick={onClose} className="custom-link">
                            <p style={{fontSize: '18px', margin: '20px 0'}}>Buy Box</p>
                        </Link>
                        <Link to={Routes.attributes.path} onClick={onClose} className="custom-link">
                            <p style={{fontSize: '18px', margin: '20px 0'}}>Attributes</p>
                        </Link>
                        <Link to={Routes.home.path} onClick={onClose} className="custom-link">
                            <p style={{fontSize: '18px', margin: '20px 0'}}>FAQ</p>
                        </Link>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default OpenMenuHeader;