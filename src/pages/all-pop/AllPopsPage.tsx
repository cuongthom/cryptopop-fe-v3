import {IoIosSearch} from "react-icons/io";
import {FaAngleDown} from "react-icons/fa";
import {Link, useSearchParams} from "react-router-dom";
import {Row} from "antd";

import GridPops from "./component/GridPops.tsx";
import {useQuery} from "@tanstack/react-query";
import popServices from "../../services/popServices.ts";

function AllPopsPage() {
    const [searchParams] = useSearchParams("auction");

    const {data: getDataAuction} = useQuery({
        queryKey: ["data-auction"],
        queryFn: async () => {
            return await popServices.getAllAuction();
        },
    });
    const {data: getDataMarket} = useQuery({
        queryKey: ["data-market"],
        queryFn: async () => {
            return await popServices.getAllMarket();
        },
    });

    return (
        <div>
            <div className="container flex-bt-allPop between align-center" style={{margin: '20px 0'}}>
                <div className="flex margin-767">
                    <b>Cryptopops </b>
                    <b style={{padding: '0 20px'}}>|</b>
                    <b>All Pops</b>
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
            <div className="flex-bt-allPop container" style={{justifyContent: 'center'}}>
                <Link to={"/all-pops?type=auction"} className="custom-link">
                    <div
                        className={searchParams.get("type") === "auction" || searchParams.get("type") === null ? "button-allPop c-pointer bg-aqua" : "bg-gray button-allPop c-pointer"}
                        style={{margin: '10px 0', textAlign: 'center'}}>
                        On Auctions
                    </div>
                </Link>
                <Link to={"/all-pops?type=market"} className="custom-link">
                    <div
                        className={searchParams.get("type") === "market" ? "bg-aqua button-allPop c-pointer" : "button-allPop c-pointer bg-gray"}
                        style={{margin: '10px 0', textAlign: 'center'}}>
                        On Marketplace
                    </div>
                </Link>
            </div>
            <hr className="vertical-hr"/>
            <Row className="container" gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}>
                {searchParams.get("type") === "market"
                    ?
                    <GridPops xl={4} lg={6} sm={8} xs={12} span={4} data={getDataMarket}/>
                    :
                    <GridPops xl={4} lg={6} sm={8} xs={12} span={4} data={getDataAuction}/>
                }


            </Row>
        </div>
    )
}

export default AllPopsPage;