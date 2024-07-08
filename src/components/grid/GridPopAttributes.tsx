import PropTypes, {InferProps} from "prop-types";
import {Col} from "antd";
import {Link} from "react-router-dom";


function GridPopAttributes({
                               xxl,
                               xl,
                               lg,
                               md,
                               sm,
                               xs,
                               span,
                               data,
                               name,
                               count,
                               link,

                           }: InferProps<typeof GridPopAttributes.propTypes>) {
    return (
        <Col
            xxl={xxl}
            xl={xl}
            lg={lg}
            md={md}
            sm={sm}
            xs={xs}
            className="gutter-row c-pointer"
            span={span}
        >
            {link ? (
                <Link to={`/detail?${link}=${name}`}>
                    <div className="pop-wrap">
                        <img
                            src={data.image}
                            alt="pop"
                            className="bg-pop"
                            style={{width: '100%', height: '100%'}}
                        />
                        <div style={{padding: '10px 0', textAlign: 'center'}}>
                            <b>{name} ({count})</b>
                        </div>
                    </div>
                </Link>
            ) : (
                <div className="pop-wrap">
                    <img
                        src={data.image}
                        alt="pop"
                        className="bg-pop"
                        style={{width: '100%', height: '100%'}}
                    />
                    <div style={{padding: '10px 0', textAlign: 'center'}}>
                        <b>{name} ({count})</b>
                    </div>
                </div>
            )}
        </Col>
    )


}

GridPopAttributes.propTypes = {
    xxl: PropTypes.number.isRequired,
    xl: PropTypes.number.isRequired,
    lg: PropTypes.number.isRequired,
    md: PropTypes.number.isRequired,
    sm: PropTypes.number.isRequired,
    xs: PropTypes.number.isRequired,
    span: PropTypes.number.isRequired,
    count: PropTypes.number,
    name: PropTypes.string,
    link: PropTypes.string,
    data: PropTypes.any

};
export default GridPopAttributes;