import {Col} from "antd";
import PropTypes, {InferProps} from "prop-types";

function PopsOwner({icon,title}: InferProps<typeof PopsOwner.propTypes> ) {
    return (
        <Col xl={12} lg={12} sm={24} xs={24} className="gutter-row" span={6}>
            <div className="flex align-center text-white"
                 style={{background: '#28c0f1', padding: '15px', borderRadius: '20px'}}>
                {icon}
                <p className="font-700" style={{padding: '0 15px'}}>{title}</p>
            </div>
        </Col>
    )
}
PopsOwner.propTypes = {
    icon: PropTypes.any,
    title: PropTypes.string,
};
export default PopsOwner;