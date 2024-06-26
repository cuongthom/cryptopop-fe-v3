import {Col} from "antd";

function GridPops({xl, lg, sm, xs, span, data}: InferProps<typeof GridPops.propTypes>) {
    return (
        data?.data.map((item) => (
            <Col key={item?.image} xl={xl} lg={lg} sm={sm} xs={xs} className="gutter-row" span={span}>
                <div>
                    <img src={item?.image} alt="pop" className="bg-pop" style={{width: '100%', height: '100%'}}/>
                    <div style={{padding: '10px 0'}}>
                        <div className="flex between">
                            <b>Pop</b>
                            <p>#{item?.auctionId || item?.id}</p>
                        </div>
                        <div className="flex between" style={{padding: '10px 0'}}>
                            <b>Owner</b>
                            <p>{minimizeAddress(item?.address)}</p>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126.61 126.61"
                                 style={{width: '20px', height: '20px'}}>
                                <g fill="#f3ba2f">
                                    <path d="m38.73 53.2 24.59-24.58 24.6 24.6 14.3-14.31-38.9-38.91-38.9 38.9z"/>
                                    <path d="m0 63.31 14.3-14.31 14.31 14.31-14.31 14.3z"/>
                                    <path
                                        d="m38.73 73.41 24.59 24.59 24.6-24.6 14.31 14.29-38.9 38.91-38.91-38.88z"/>
                                    <path d="m98 63.31 14.3-14.31 14.31 14.3-14.31 14.32z"/>
                                    <path
                                        d="m77.83 63.3-14.51-14.52-10.73 10.73-1.24 1.23-2.54 2.54 14.51 14.5 14.51-14.47z"/>
                                </g>
                            </svg>
                            <b style={{padding: '0 10px'}}>{item?.lastPrice || item?.price} BNB</b>
                        </div>
                    </div>
                </div>
            </Col>
        ))
    )
}

import PropTypes, {InferProps} from "prop-types";
import {minimizeAddress} from "../../../untils";

GridPops.propTypes = {
    xl: PropTypes.any,
    lg: PropTypes.any,
    sm: PropTypes.any,
    xs: PropTypes.any,
    span: PropTypes.any,
    data: PropTypes.any
};
export default GridPops;