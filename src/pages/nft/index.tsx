import {Link, useParams} from "react-router-dom";
import {RiNftLine} from "react-icons/ri";
import {CiShop} from "react-icons/ci";
import MyNfts from "./MyNfts.tsx";
import MyShop from "./MyShop.tsx";
import {IoIosSearch} from "react-icons/io";


function AllMyNfts() {
    const {page} = useParams()
    console.log(page)
    return (
        <div className="flex container" style={{margin: '20px 0'}}>
            <div style={{width: '100%', maxWidth: '10%'}}>
                <Link to={"/user/my-nfts"}>
                    <div className="flex c-pointer" style={{fontSize: '20px'}}>
                        <RiNftLine/>
                        <p style={{padding: '0 10px'}}>My Nfts</p>
                    </div>
                </Link>
                <Link to={"/user/my-shop"}>
                    <div className="flex c-pointer" style={{fontSize: '20px', margin: '20px 0'}}>
                        <CiShop/>
                        <p style={{padding: '0 10px'}}>My Shop</p>
                    </div>
                </Link>

            </div>
            <hr className="vertical-hr"/>
            <div style={{width: '100%', maxWidth: '90%'}}>
                <div>
                    <div className="flex align-center between">
                        <div>
                            <p>Cryptopops | All My Pop</p>
                        </div>
                        <div className="align-center flex" style={{border: '1px solid #ccc'}}>
                            <IoIosSearch style={{fontSize: '30px', margin: '5px'}}/>
                            <input style={{fontSize: '20px', outline: 'block', width: '100%'}}
                                   type="search"
                                   placeholder="Search Pops"
                                   className="no-border"
                            />
                        </div>
                    </div>
                </div>
                {page === "my-nfts" ? <MyNfts/> : <MyShop/>}
            </div>

        </div>
    )
}

export default AllMyNfts;