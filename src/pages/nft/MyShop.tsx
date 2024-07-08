import TabButtonNft from "../../components/tab/TabButtonNft.tsx";
import {useSearchParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import popServices from "../../services/popServices.ts";
import {Row} from "antd";
import GridPops from "../all-pop/component/GridPops.tsx";

function MyShop() {
    const [searchParams] = useSearchParams("auction")
    const {data: getDataMyNftMarket, isLoading: loadingMar} = useQuery({
        queryKey: ["data-my-market"],
        queryFn: async () => {
            return await popServices.getMyMarket("0x5Bf7231593eb78C1b9C6FC883a26Da1C4F36e257");
        },
    });
    const {data: getDataMyNftAuction, isLoading: loadingAuc} = useQuery({
        queryKey: ["data-my-auction"],
        queryFn: async () => {
            return await popServices.getMyAuction("0x5Bf7231593eb78C1b9C6FC883a26Da1C4F36e257");
        },
    });
    return (
        <div>

            <TabButtonNft
                page={searchParams.get("type")}
                linkAuc={"/user/my-shop?type=auction"}
                linkMar={"/user/my-shop?type=market"}
            />
            <hr className="vertical-hr" style={{margin: '20px 0'}}/>
            <Row  gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}>
                {searchParams.get("type") === "market"
                    ?
                    <GridPops xl={4} lg={6} sm={8} xs={12} span={4} data={getDataMyNftMarket} link={"market"}/>
                    :
                    <GridPops xl={4} lg={6} sm={8} xs={12} span={4} data={getDataMyNftAuction} link={"auction"}/>
                }
            </Row>
        </div>
    )
}

export default MyShop;