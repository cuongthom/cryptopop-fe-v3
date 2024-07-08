import DetailNft from "../../components/detail/DetailNft.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import popServices from "../../services/popServices.ts";
import {Skeleton} from "antd";

function AuctionDetailPage() {
    const {id}: any = useParams();
    const [loading, setLoading] = useState(false);
    const [detailNft, setDetailNft] = useState("");
    const [isTimeUp, setIsTimeUp] = useState(false);
    const [timeNew, setTimeNew] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    console.log("detailNft", detailNft)
    const getDetailNft = async () => {
        try {
            setLoading(true)
            const res = await popServices.getDetailNftAuction(id)
            setDetailNft(res.data[0])
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        const endTimeToData = detailNft?.endTime || ""
        const countdownInterval = setInterval(() => {
            const now = Math.floor(Date.now() / 1000);
            const timeLeft = endTimeToData - now;
            const daysLeft = Math.floor(timeLeft / (60 * 60 * 24));
            const hoursLeft = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
            const minutesLeft = Math.floor((timeLeft % (60 * 60)) / 60);
            const secondsLeft = timeLeft % 60;
            if (timeLeft <= 0) {
                setIsTimeUp(true);
                clearInterval(countdownInterval);
                return;
            }
            setTimeNew({
                days: daysLeft,
                hours: hoursLeft,
                minutes: minutesLeft,
                seconds: secondsLeft,
            });
        }, 1000);
        // useEffect clean up function
        return () => {
            window.clearInterval(countdownInterval)
        }

    }, []);
    useEffect(() => {
        if (!id) return
        getDetailNft()
    }, [id])

    return loading
        ? <Skeleton active className="container" style={{margin: '20px 0'}}/>
        :
        <DetailNft data={detailNft}/>;
}

export default AuctionDetailPage;