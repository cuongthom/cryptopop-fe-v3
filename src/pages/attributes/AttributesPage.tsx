import {Row} from "antd";
import GridPops from "../all-pop/component/GridPops.tsx";

function AttributesPage() {
    return (
        <div>
            <div className="flex container" style={{margin: '20px 0'}}>
                <b>Cryptopops </b>
                <b style={{padding: '0 20px'}}>|</b>
                <b>Attributes</b>
            </div>
            <div className="container">
                <h3 style={{fontSize: '28px'}}>Types and Attributes</h3>
            </div>
            <div className="container">
                <h3 style={{fontSize: '26px'}}>Pop Types</h3>
            </div>
            <Row className="container" gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                <GridPops xl={6} lg={6} sm={8} xs={12} span={6}/>
                <GridPops xl={6} lg={6} sm={8} xs={12} span={6}/>
                <GridPops xl={6} lg={6} sm={8} xs={12} span={6}/>
                <GridPops xl={6} lg={6} sm={8} xs={12} span={6}/>
            </Row>
            <div className="container">
                <h3 style={{fontSize: '26px'}}>Attributes</h3>
            </div>
            <Row className="container" gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                <GridPops xl={2} lg={4} sm={6} xs={8} span={2}/>
                <GridPops xl={2} lg={4} sm={6} xs={8} span={2}/>
                <GridPops xl={2} lg={4} sm={6} xs={8} span={2}/>
                <GridPops xl={2} lg={4} sm={6} xs={8} span={2}/>
                <GridPops xl={2} lg={4} sm={6} xs={8} span={2}/>
                <GridPops xl={2} lg={4} sm={6} xs={8} span={2}/>
                <GridPops xl={2} lg={4} sm={6} xs={8} span={2}/>
                <GridPops xl={2} lg={4} sm={6} xs={8} span={2}/>
                <GridPops xl={2} lg={4} sm={6} xs={8} span={2}/>
                <GridPops xl={2} lg={4} sm={6} xs={8} span={2}/>
                <GridPops xl={2} lg={4} sm={6} xs={8} span={2}/>
                <GridPops xl={2} lg={4} sm={6} xs={8} span={2}/>
                <GridPops xl={2} lg={4} sm={6} xs={8} span={2}/>
                <GridPops xl={2} lg={4} sm={6} xs={8} span={2}/>
                <GridPops xl={2} lg={4} sm={6} xs={8} span={2}/>
                <GridPops xl={2} lg={4} sm={6} xs={8} span={2}/>

            </Row>
        </div>
    )
}

export default AttributesPage;