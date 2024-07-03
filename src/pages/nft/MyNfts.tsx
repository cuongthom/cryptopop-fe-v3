
import GridPops from "../all-pop/component/GridPops.tsx";

function MyNfts() {
    return (
        <div>
            <div className="flex" style={{padding: '20px 0'}}>
                <h2>Unopened boxes: 0</h2>
                <button className="c-pointer bg-black text-white"
                        style={{borderRadius: '5px', padding: '0 10px', margin: '0 10px'}}>Open box
                </button>
            </div>
            <hr className="vertical-hr"/>
            <div>
                <GridPops xl={8} lg={8} sm={8} xs={12} span={8}/>
            </div>
        </div>
    )
}

export default MyNfts;