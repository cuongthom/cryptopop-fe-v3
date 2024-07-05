import DetailNft from "../../components/detail/DetailNft.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import popServices from "../../services/popServices.ts";
import {Skeleton} from "antd";


function MarketDetail() {
    const {id}: any = useParams();
    const [loading, setLoading] = useState(false);
    const [detailNft, setDetailNft] = useState({});
    console.log("detailNft", detailNft)
    const getDetailNft = async () => {
        try {
            setLoading(true)
            const res = await popServices.getDetailNftMarket(id)
            setDetailNft(res.data)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        if (!id) return
        getDetailNft()
    }, [id])
    return loading ? <Skeleton active className="container" style={{margin: '20px 0'}}/> :
        <DetailNft data={detailNft}/>;
}

export default MarketDetail;