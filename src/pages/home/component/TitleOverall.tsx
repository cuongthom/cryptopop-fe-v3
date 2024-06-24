import {Col} from "antd";
import PropTypes, {InferProps} from "prop-types";


function TitleOverall({information1, information2}: InferProps<typeof TitleOverall.propTypes>) {
    return (
        <Col xl={8} lg={8} sm={12} xs={24} className="gutter-row" span={6}>
            <div>
                <p className="text-gray">{information1}</p>
                <p className="font-700" style={{padding: '10px 0'}}>{information2}</p>
            </div>
        </Col>
    )
}

TitleOverall.propTypes = {
    information1: PropTypes.string,
    information2: PropTypes.string,
};
export default TitleOverall;