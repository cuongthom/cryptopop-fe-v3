import PropTypes, {InferProps} from "prop-types";
import {Col} from "antd";


function GridPopAttributes({xl, lg, sm, xs, span, data, name, count}: InferProps<typeof GridPopAttributes.propTypes>) {
    return (
        <Col xl={xl} lg={lg} sm={sm} xs={xs} className="gutter-row c-pointer pop-wrap" span={span}>

            <div>
                <img src={data.image} alt="pop" className="bg-pop" style={{width: '100%', height: '100%'}}/>
                <div style={{padding: '10px 0',textAlign:'center'}}>
                    <b>{name} ({count})</b>
                </div>
            </div>


        </Col>
    )
}

GridPopAttributes.propTypes = {
    xl: PropTypes.number.isRequired,
    lg: PropTypes.number.isRequired,
    sm: PropTypes.number.isRequired,
    xs: PropTypes.number.isRequired,
    span: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.any

};
export default GridPopAttributes;