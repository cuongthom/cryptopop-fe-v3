import {IoIosSearch} from "react-icons/io";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import popServices from "../../../services/popServices.ts";
import GridPopAttributes from "../../../components/grid/GridPopAttributes.tsx";
import {Row, Skeleton} from "antd";

function DetailAttributes() {
    const [searchParams] = useSearchParams()
    const [loading, setLoading] = useState(false);
    const [nftAttributes, setNftAttributes] = useState([]);
    const [nftTypes, setNftTypes] = useState([]);
    console.log("nftTypes", nftTypes)
    const getDataDetailTypes = async () => {
        console.log(searchParams.get("types"))
        try {
            setLoading(true)
            const res = await popServices.getAllTypes(searchParams.get("types") || "")
            setNftTypes(res.data)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    const getDataDetailAttributes = async () => {
        console.log(searchParams.get("attributes"))
        try {
            setLoading(true)
            const res = await popServices.getAllAttributes(searchParams.get("attributes")?.toLowerCase() || "")
            setNftAttributes(res.data)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        if (searchParams.get("types")) {
            getDataDetailTypes()
        } else {
            getDataDetailAttributes()
        }
    }, []);
    return loading
        ?
        <div className="container" style={{margin: '20px 0'}}>
            <Skeleton active/>
        </div>
        :
        <div>
            <div className="container flex-bt-allPop between align-center" style={{margin: '20px 0'}}>
                <div className="flex margin-767">
                    <b>Cryptopops </b>
                    <b style={{padding: '0 20px'}}>|</b>
                    <b>All Pops</b>
                </div>
                <div className="align-center flex" style={{border: '1px solid #ccc'}}>
                    <IoIosSearch style={{fontSize: '30px', margin: '5px'}}/>
                    <input style={{fontSize: '20px', outline: 'block', width: '100%'}}
                           type="search"
                           placeholder="Search Pops"
                           className="no-border"
                    />
                </div>
            </div>
            <Row className="container" gutter={{xs: 8, sm: 16, md: 24, lg: 24}}>
                {
                    nftTypes && nftTypes.map((item: any) => (
                        <GridPopAttributes
                            xxl={4} xl={4} lg={4} md={6} sm={6} xs={8} span={4}
                            data={item}
                            name={item?.name}
                            count={item.id}
                        />
                    ))

                }
                {
                    nftAttributes && nftAttributes.map((item: any) => (
                        <GridPopAttributes
                            xxl={4} xl={4} lg={4} md={6} sm={6} xs={8} span={4}
                            data={item}
                            name={item?.name}
                            count={item.id}/>
                    ))

                }
            </Row>
        </div>
}

export default DetailAttributes;