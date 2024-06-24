import {IoIosSearch} from "react-icons/io";
import {FaAngleDown} from "react-icons/fa";

function AllPopsPage() {
    return (
        <div>
            <div className="container flex between">
                <div className="flex">
                    <p>Cryptopops </p>
                    <p style={{padding: '0 20px'}}>|</p>
                    <p>All Pops</p>
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
            <div className="flex container between align-center">
                <div>
                    <h2>All Pops</h2>
                </div>
                <div className="flex align-center">
                    <p>Filter by</p>
                    <div className="flex align-center"
                         style={{border: '1px solid #ccc', margin: '0 10px', fontSize: '18px', padding: '10px'}}>
                        <p>Types</p>
                        <FaAngleDown style={{margin: '0 10px'}}/>
                    </div>
                    <div className="flex"
                         style={{border: '1px solid #ccc', margin: '0 10px', fontSize: '18px', padding: '10px'}}>
                        <p>Attributes</p>
                        <FaAngleDown style={{margin: '0 10px'}}/>
                    </div>
                </div>
            </div>
            <div className="flex container" style={{justifyContent: 'center'}}>
                <div>
                   On Auctions
                </div>
                <div>
                    On Marketplace
                </div>
            </div>
        </div>
    )
}

export default AllPopsPage;