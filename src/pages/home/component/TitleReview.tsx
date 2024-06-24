import PropTypes, {InferProps} from "prop-types";

function TitleReview({
                         title,
                         information1,
                         information2,
                         information3,
                         icon
                     }: InferProps<typeof TitleReview.propTypes>) {
    return (
        <div>
            <div style={{padding: '20px 0'}} className="flex align-center">
                <h2>
                    {title}
                </h2>
                {
                    icon && <p className="text-white" style={{
                        background: '#28c0f1',
                        padding: '5px',
                        borderRadius: '10px',
                        margin: '0 10px',
                        fontSize: '14px'
                    }}>{icon}</p>
                }
            </div>
            <p className="text-gray" style={{padding: '5px 0'}}>{information1}</p>
            <p className="text-gray" style={{padding: '5px 0'}}>{information2}</p>
            <p className="text-gray" style={{padding: '5px 0'}}>{information3}</p>
        </div>
    )
}

TitleReview.propTypes = {
    title: PropTypes.string,
    information1: PropTypes.string,
    information2: PropTypes.string,
    information3: PropTypes.string,
    icon: PropTypes.string
};
export default TitleReview;