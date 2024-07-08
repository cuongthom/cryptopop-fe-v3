import {Col, Row} from "antd";
import logoBnb from "/svg/bnb.svg";
import {minimizeAddress} from "../../untils";

function DetailNft({data}: any) {
    console.log("data", data);
    return (
        <div className="container">
            <div style={{padding: '20px 0'}}>
                <b style={{fontSize: '16px'}}>Cryptopops </b>
                <b style={{padding: '0 20px'}}>|</b>
                <b>{data?.auctionId || data?.id}</b>
            </div>
            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} className="flex">
                <Col xl={12} lg={12} sm={24} span={12}>
                    <img src={data?.image} className="bg-pop" style={{width: '100%'}} alt="image"/>
                </Col>
                <Col xl={12} lg={12} sm={24} span={12}>
                    <div style={{fontSize: '30px'}}>
                        <b>Pop</b>
                        <b style={{padding: '0 20px'}}>#{data?.auctionId || data?.id}</b>
                    </div>
                    <div className="flex" style={{padding: '20px 0'}}>
                        <p>Owned by</p>
                        <b style={{padding: '0 10px'}}>{minimizeAddress(data?.address)}</b>
                    </div>
                    <div style={{padding: '20px 0'}}>
                        <p>This pop has 1 attributes, one of 72 with that many.</p>
                        <p>Curly (40)</p>
                    </div>
                    <div className="align-center flex">
                        <img src={logoBnb} alt="bnb" width={32}/>
                        <b style={{
                            fontSize: '32px',
                            padding: '0 20px',
                            marginTop: '10px'
                        }}>{data?.lastPrice || data?.price} BNB</b>
                    </div>
                    {data.endTime &&
                        <div style={{padding: '20px 0'}}>
                            <b>Expiration Date</b>
                            <div className="flex" style={{padding: '20px 0'}}>
                                <div className="align-center bg-black" style={{padding: '15px 20px'}}>
                                    <p className="text-white" style={{padding: '0 10px'}}>0</p>
                                    <p className="text-white">Days</p>
                                </div>
                                <div className="align-center bg-black" style={{padding: '15px 20px', margin: '0 10px'}}>
                                    <p className="text-white" style={{padding: '0 10px'}}>0</p>
                                    <p className="text-white">Hours</p>
                                </div>
                                <div className="align-center bg-black"
                                     style={{padding: '15px 20px', marginRight: '10px'}}>
                                    <p className="text-white" style={{padding: '0 10px'}}>0</p>
                                    <p className="text-white">Mins</p>
                                </div>
                                <div className="align-center bg-black" style={{padding: '15px 20px'}}>
                                    <p className="text-white" style={{padding: '0 10px'}}>0</p>
                                    <p className="text-white">Secs</p>
                                </div>
                            </div>
                        </div>
                    }
                    <button className="button-buyBox bg-bid transition text-white c-pointer"
                            style={{border: 'none'}}>BID NOW
                    </button>
                </Col>
            </Row>
            <div style={{padding: '30px 0'}}>
                <b style={{fontSize: '30px'}}>Transaction History</b>
                <div className="flex" style={{padding: '10px 0'}}>
                    <p>Minted time:</p>
                    <p style={{padding: '0 20px'}}>July 3, 2024 12:00 AM</p>
                </div>
                <div className="flex">
                    <p>Transaction hash:</p>
                    <p style={{padding: '0 20px'}}>Click to view in Bsc scan</p>
                </div>
            </div>
        </div>

    )
}

export default DetailNft