import {Link} from "react-router-dom";
import PropTypes, {InferProps} from "prop-types";


function TabButtonNft({page, linkAuc, linkMar}: InferProps<typeof TabButtonNft.propTypes>) {
    return (
        <div className="flex-bt-allPop container" style={{justifyContent: 'center'}}>
            <Link to={linkAuc} className="custom-link">
                <div
                    className={page === "auction" || page === null ? "button-allPop c-pointer bg-aqua" : "bg-gray button-allPop c-pointer"}
                    style={{margin: '10px 0', textAlign: 'center'}}>
                    On Auctions
                </div>
            </Link>
            <Link to={linkMar} className="custom-link">
                <div
                    className={page === "market" ? "bg-aqua button-allPop c-pointer" : "button-allPop c-pointer bg-gray"}
                    style={{margin: '10px 0', textAlign: 'center'}}>
                    On Marketplace
                </div>
            </Link>
        </div>
    )
}

TabButtonNft.propTypes = {
    page: PropTypes.string,
    linkAuc: PropTypes.string.isRequired,
    linkMar: PropTypes.string.isRequired,
};

export default TabButtonNft