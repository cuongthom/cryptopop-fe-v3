import {Col, Row} from "antd";
import {minimizeAddress} from "../../untils";


function DetailMyNft({data}: any) {
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

                </Col>
            </Row>

        </div>
    );
}

export default DetailMyNft;