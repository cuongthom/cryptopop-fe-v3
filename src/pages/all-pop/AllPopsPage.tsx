import {IoIosSearch} from "react-icons/io";
import {FaAngleDown} from "react-icons/fa";
import {useParams} from "react-router-dom";
import {Row, Skeleton} from "antd";
import GridPops from "./component/GridPops.tsx";
import {useQuery} from "@tanstack/react-query";
import popServices from "../../services/popServices.ts";
import TabButtonNft from "../../components/tab/TabButtonNft.tsx";
import {useTransaction} from "wagmi";


function AllPopsPage() {
    const {page} = useParams()
    const {data: getDataAuction, isLoading: loadingAuc} = useQuery({
        queryKey: ["data-auction"],
        queryFn: async () => {
            return await popServices.getAllAuction();
        },
    });
    const {data: getDataMarket, isLoading: loadingMar} = useQuery({
        queryKey: ["data-market"],
        queryFn: async () => {
            return await popServices.getAllMarket();
        },
    });

    const {data: dataTransac, refetch,} = useTransaction({
        blockHash: "0xf23469fc0bdee84042cff62350ec2e2471725f5a90ff23a364eb15bba976b405",
    })
    console.log("dataTransac", dataTransac)
    return (
        loadingAuc && loadingMar
            ?
            <div className="container" style={{margin: '20px 0'}}>
                <Skeleton active/>
            </div>
            :
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
                <TabButtonNft page={page} linkAuc={"/all-pops/auction"} linkMar={"/all-pops/market"}/>
                <hr className="vertical-hr"/>
                <Row className="container" gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}>
                    {page === "market"
                        ?
                        <GridPops xl={4} lg={6} sm={8} xs={12} span={4} data={getDataMarket} link={"market"}/>
                        :
                        <GridPops xl={4} lg={6} sm={8} xs={12} span={4} data={getDataAuction} link={"auction"}/>
                    }
                </Row>
            </div>
    )
}

export default AllPopsPage;