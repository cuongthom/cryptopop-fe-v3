import TabButtonNft from "../../components/tab/TabButtonNft.tsx";
import {useSearchParams} from "react-router-dom";

function MyShop() {
    const [searchParams] = useSearchParams("auction")
    console.log("type", searchParams.get("type"))
    return (
        <div>

            <TabButtonNft
                page={searchParams.get("type")}
                linkAuc={"/user/my-shop?type=auction"}
                linkMar={"/user/my-shop?type=market"}
            />
            <hr className="vertical-hr"/>
        </div>
    )
}

export default MyShop;