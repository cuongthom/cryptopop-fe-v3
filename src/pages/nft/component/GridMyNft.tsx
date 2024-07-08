import {Link} from "react-router-dom";
import {Col} from "antd";
import PropTypes, {InferProps} from "prop-types";
import {minimizeAddress} from "../../../untils";
import {useAccount} from "wagmi";


function GridMyNft({xl, lg, sm, xs, span, data}: InferProps<typeof GridMyNft.propTypes>) {
    const {address} = useAccount()
    return (
        <Col xl={xl} lg={lg} sm={sm} xs={xs} className="gutter-row c-pointer" span={span}>
            <Link to={`/detailmynft/${data.id}`} className="custom-link ">
                <div>
                    <img src={data.image} alt="pop" className="bg-pop" style={{width: '100%', height: '100%'}}/>
                    <div style={{padding: '10px 0'}}>
                        <div className="flex between">
                            <b>Pop</b>
                            <p>#{data.id}</p>
                        </div>
                        <div className="flex between" style={{padding: '10px 0'}}>
                            <b>Owner</b>
                            <p>{minimizeAddress(address) || ""}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </Col>
    )
}

GridMyNft.propTypes = {
    xl: PropTypes.number.isRequired,
    lg: PropTypes.number.isRequired,
    sm: PropTypes.number.isRequired,
    xs: PropTypes.number.isRequired,
    span: PropTypes.number.isRequired,
    data: PropTypes.any,
};

export default GridMyNft