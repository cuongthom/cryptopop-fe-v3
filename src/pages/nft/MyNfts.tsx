import {Row} from "antd";
import {useQuery} from "@tanstack/react-query";
import popServices from "../../services/popServices.ts";
import GridMyNft from "./component/GridMyNft.tsx";


function MyNfts() {
    const {data: getDataNft} = useQuery({
        queryKey: ["data-nft"],
        queryFn: async () => {
            return await popServices.getMyNft();
        },
    });
    return (
        <div>
            <div className="flex" style={{padding: '20px 0'}}>
                <h2>Unopened boxes: 0</h2>
                <button className="c-pointer bg-black text-white"
                        style={{borderRadius: '5px', padding: '0 10px', margin: '0 10px'}}>Open box
                </button>
            </div>
            <hr className="vertical-hr" style={{margin: '20px 0'}}/>
            <Row className="" gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}>
                {getDataNft?.data.map((item: any) => (
                    <GridMyNft xl={4} lg={6} sm={8} xs={12} span={6} data={item}/>
                ))}
            </Row>
        </div>
    )
}

export default MyNfts;