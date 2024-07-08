import {Skeleton} from "antd";
import {useQuery} from "@tanstack/react-query";
import popServices from "../../services/popServices.ts";
import {useParams} from "react-router-dom";
import DetailMyNft from "../../components/detail/DetailMyNft.tsx";

function MyNftDetailPage() {
    const {id} = useParams();
    const {data: getDetailNft, isLoading: loading} = useQuery({
        queryKey: ["data-detail"],
        queryFn: async () => {
            if (!id) return
            return await popServices.getNftById(id);
        },
    });

    return loading
        ?
        <Skeleton active className="container" style={{margin: '20px 0'}}/>
        :
        <DetailMyNft data={getDetailNft.data}/>;
}

export default MyNftDetailPage;