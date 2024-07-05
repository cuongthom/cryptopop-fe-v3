import {Row, Skeleton} from "antd";
import {useEffect, useState} from "react";
import popServices from "../../services/popServices.ts";
import GridPopAttributes from "../../components/grid/GridPopAttributes.tsx";

function AttributesPage() {
    const [loading, setLoading] = useState(false);
    const [nftAttributes, setNftAttributes] = useState([]);

    const getSingleItemAndCount = (type: string, index: number) => {
        const filteredItems = nftAttributes.filter((item: any) => item.types === type);
        return {
            singleItem: filteredItems.length > 0 ? filteredItems[index] : null,
            count: filteredItems.length,
        };
    };

    const getAllItemAttributes = (type: string, index: number) => {
        const filteredItems = nftAttributes.filter((item: any) => item.attributes.includes(type));
        return {
            singleItem: filteredItems.length > 0 ? filteredItems[index] : null,
            count: filteredItems.length,
        };
    };

    // Pop Types
    const {singleItem: singleHuman, count: humanCount} = getSingleItemAndCount("Human", 1201);
    const {singleItem: singleZombie, count: zombieCount} = getSingleItemAndCount("Zombie", 20);
    const {singleItem: singleRobot, count: robotCount} = getSingleItemAndCount("Robot", 20);
    const {singleItem: singleConstellations, count: constellationsCount} = getSingleItemAndCount("Constellations", 0);
    const {singleItem: singleAnimal, count: animalCount} = getSingleItemAndCount("Animals", 0);
    // Attributes
    const {singleItem: allFemale, count: countFemale} = getAllItemAttributes("female", 3);
    const {singleItem: singleSmile, count: smileCount} = getAllItemAttributes("smile", 0);
    const {singleItem: singleBeard, count: beardCount} = getAllItemAttributes("beard", 0);
    const {singleItem: singleGoatee, count: goateeCount} = getAllItemAttributes("goatee", 0);
    const {singleItem: allEarring, count: countEarring} = getAllItemAttributes("earring", 0);
    const {singleItem: singleDyed, count: dyedCount} = getAllItemAttributes("dyed", 10);
    const {singleItem: singleEyeliner, count: eyelinerCount} = getAllItemAttributes("eyeliner", 0);
    const {singleItem: singleClassic, count: classicCount} = getAllItemAttributes("classic", 0);
    const {singleItem: straightSing, count: straightCount} = getAllItemAttributes("straight", 3);
    const {singleItem: goglesSing, count: goglesCount} = getAllItemAttributes("gogles", 2);
    const {singleItem: chokerSing, count: chokerCount} = getAllItemAttributes("choker", 0);
    const {singleItem: bunSing, count: bunCount} = getAllItemAttributes("bun", 0);
    const {singleItem: maleSing, count: maleCount} = getAllItemAttributes("male", 0);
    const {singleItem: highlightSing, count: highlightCount} = getAllItemAttributes("highlight", 0);
    const {singleItem: headbandSing, count: headbandCount} = getAllItemAttributes("headband", 0);
    const {singleItem: freckleSing, count: freckleCount} = getAllItemAttributes("freckle", 0);
    const {singleItem: classicStraightSing, count: classicStraightCount} = getAllItemAttributes("classic straight", 2);
    const {singleItem: pilotSing, count: pilotCount} = getAllItemAttributes("pilot", 0);
    const {singleItem: headScarfSing, count: headScarfCount} = getAllItemAttributes("head scarf", 0);
    const {singleItem: faceDecorSing, count: faceDecorCount} = getAllItemAttributes("face decor", 0);
    const {singleItem: whiteSkinSing, count: whiteSkinCount} = getAllItemAttributes("white skin", 0);
    const {singleItem: bobSing, count: bobCount} = getAllItemAttributes("bob", 0);
    const {singleItem: edgyPunkSing, count: edgyPunkCount} = getAllItemAttributes("edgy punk", 0);
    const {singleItem: dyeHairSing, count: dyeHairCount} = getAllItemAttributes("dye hair", 0);

    const getDataAttributes = async () => {
        try {
            setLoading(true)
            const res = await popServices.getAllNft()
            setNftAttributes(res.data)
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getDataAttributes()
    }, [])

    return (
        loading
            ?
            <div className="container" style={{margin: '20px 0'}}>
                <Skeleton active/>
            </div>

            :
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
                    {singleHuman && (
                        <GridPopAttributes
                            xl={4} lg={4} sm={6} xs={8} span={4}
                            data={singleHuman}
                            count={humanCount}
                            name={"Human"}/>
                    )}
                    {singleZombie && (
                        <GridPopAttributes
                            xl={4} lg={4} sm={6} xs={8} span={4}
                            data={singleZombie}
                            count={zombieCount}
                            name={"Zombie"}/>
                    )}
                    {singleRobot && (
                        <GridPopAttributes
                            xl={4} lg={4} sm={6} xs={8} span={4}
                            data={singleRobot}
                            count={robotCount}
                            name={"Robot"}/>
                    )}
                    {singleConstellations && (
                        <GridPopAttributes
                            xl={4} lg={4} sm={6} xs={8} span={4}
                            data={singleConstellations}
                            count={constellationsCount}
                            name={"SingleConstellations"}/>
                    )}
                    {singleAnimal && (
                        <GridPopAttributes
                            xl={4} lg={4} sm={6} xs={8} span={4}
                            data={singleAnimal}
                            count={animalCount}
                            name={"Animal"}/>
                    )}
                </Row>
                <div className="container">
                    <h3 style={{fontSize: '26px'}}>Attributes</h3>
                </div>
                <Row className="container" gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    {allFemale && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={allFemale}
                            count={countFemale}
                            name={"Female"}/>
                    )}
                    {singleSmile && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={singleSmile}
                            count={smileCount}
                            name={"smile"}/>
                    )}
                    {singleBeard && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={singleBeard}
                            count={beardCount}
                            name={"Beard"}/>
                    )}
                    {singleGoatee && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={singleGoatee}
                            count={goateeCount}
                            name={"Goatee"}/>
                    )}
                    {allEarring && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={allEarring}
                            count={countEarring}
                            name={"Earring"}/>
                    )}
                    {singleDyed && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={singleDyed}
                            count={dyedCount}
                            name={"Dyed"}/>
                    )}
                    {singleEyeliner && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={singleEyeliner}
                            count={eyelinerCount}
                            name={"Eyeliner"}/>
                    )}
                    {singleClassic && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={singleClassic}
                            count={classicCount}
                            name={"Classic"}/>
                    )}
                    {straightSing && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={straightSing}
                            count={straightCount}
                            name={"straight"}/>
                    )}
                    {goglesSing && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={goglesSing}
                            count={goglesCount}
                            name={"gogles"}/>
                    )}
                    {chokerSing && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={chokerSing}
                            count={chokerCount}
                            name={"choker"}/>
                    )}
                    {bunSing && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={bunSing}
                            count={bunCount}
                            name={"choker"}/>
                    )}
                    {highlightSing && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={highlightSing}
                            count={highlightCount}
                            name={"highlight"}/>
                    )}
                    {maleSing && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={maleSing}
                            count={maleCount}
                            name={"male"}/>
                    )}
                    {headbandSing && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={headbandSing}
                            count={headbandCount}
                            name={"headband"}/>
                    )}
                    {freckleSing && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={freckleSing}
                            count={freckleCount}
                            name={"freckle"}/>
                    )}
                    {classicStraightSing && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={classicStraightSing}
                            count={classicStraightCount}
                            name={"Classic Straight"}/>
                    )}
                    {pilotSing && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={pilotSing}
                            count={pilotCount}
                            name={"Pilot"}/>
                    )}
                    {headScarfSing && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={headScarfSing}
                            count={headScarfCount}
                            name={"Head Scarf"}/>
                    )}
                    {faceDecorSing && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={faceDecorSing}
                            count={faceDecorCount}
                            name={"Face DecorSing"}/>
                    )}
                    {whiteSkinSing && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={whiteSkinSing}
                            count={whiteSkinCount}
                            name={"White Skin"}/>
                    )}
                    {bobSing && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={bobSing}
                            count={bobCount}
                            name={"Bob"}/>
                    )}
                    {edgyPunkSing && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={edgyPunkSing}
                            count={edgyPunkCount}
                            name={"Edgy Punk"}/>
                    )}
                    {dyeHairSing && (
                        <GridPopAttributes
                            xl={2} lg={4} sm={6} xs={8} span={2}
                            data={dyeHairSing}
                            count={dyeHairCount}
                            name={"Dye Hair"}/>
                    )}
                </Row>
            </div>
    )
}

export default AttributesPage;