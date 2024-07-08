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
    const {
        singleItem: singleHuman,
        count: humanCount,
    } = getSingleItemAndCount("Human", 1201);
    const {singleItem: singleZombie, count: zombieCount} = getSingleItemAndCount("Zombie", 20);
    const {singleItem: singleRobot, count: robotCount} = getSingleItemAndCount("Robot", 20);
    const {singleItem: singleConstellations, count: constellationsCount} = getSingleItemAndCount("Constellations", 0);
    console.log("singleConstellations", singleConstellations)
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
                <Row className="container" gutter={{xs: 8, sm: 16, md: 24, lg: 24}}>
                    {singleHuman && (
                        <GridPopAttributes
                            xxl={4} xl={4} lg={4} md={6} sm={6} xs={8} span={4}
                            data={singleHuman}
                            count={humanCount}
                            name={"Human"}
                            link={"types"}
                        />
                    )}
                    {singleZombie && (
                        <GridPopAttributes
                            xxl={4} xl={4} lg={4} md={6} sm={6} xs={8} span={4}
                            data={singleZombie}
                            count={zombieCount}
                            name={"Zombie"}
                            link={"types"}
                        />
                    )}
                    {singleRobot && (
                        <GridPopAttributes
                            xxl={4} xl={4} lg={4} md={6} sm={6} xs={8} span={4}
                            data={singleRobot}
                            count={robotCount}
                            name={"Robot"}
                            link={"types"}
                        />
                    )}
                    {singleConstellations && (
                        <GridPopAttributes
                            xxl={4} xl={4} lg={4} md={6} sm={6} xs={8} span={4}
                            data={singleConstellations}
                            count={constellationsCount}
                            name={"Constellations"}
                            link={"types"}
                        />
                    )}
                    {singleAnimal && (
                        <GridPopAttributes
                            xxl={4} xl={4} lg={4} md={6} sm={6} xs={8} span={4}
                            data={singleAnimal}
                            count={animalCount}
                            name={"Animals"}
                            link={"types"}
                        />
                    )}
                    {dyeHairSing && (
                        <GridPopAttributes
                            xxl={4} xl={4} lg={4} md={6} sm={6} xs={8} span={4}
                            data={dyeHairSing}
                            count={dyeHairCount}
                            name={"Dye Hair"}
                            link={"attributes"}
                        />
                    )}
                </Row>
                <div className="container">
                    <h3 style={{fontSize: '26px'}}>Attributes</h3>
                </div>
                <Row className="container" gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    {allFemale && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={allFemale}
                            count={countFemale}
                            name={"Female"}
                            link={"attributes"}
                        />
                    )}
                    {singleSmile && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={singleSmile}
                            count={smileCount}
                            name={"smile"}
                            link={"attributes"}
                        />
                    )}
                    {singleBeard && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={singleBeard}
                            count={beardCount}
                            name={"Beard"}
                            link={"attributes"}
                        />
                    )}
                    {singleGoatee && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={singleGoatee}
                            count={goateeCount}
                            name={"Goatee"}
                            link={"attributes"}
                        />
                    )}
                    {allEarring && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={allEarring}
                            count={countEarring}
                            name={"Earring"}
                            link={"attributes"}
                        />
                    )}
                    {singleDyed && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={singleDyed}
                            count={dyedCount}
                            name={"Dyed"}
                            link={"attributes"}
                        />
                    )}
                    {singleEyeliner && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={singleEyeliner}
                            count={eyelinerCount}
                            name={"Eyeliner"}
                            link={"attributes"}
                        />
                    )}
                    {singleClassic && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={singleClassic}
                            count={classicCount}
                            name={"Classic"}
                            link={"attributes"}
                        />
                    )}
                    {straightSing && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={straightSing}
                            count={straightCount}
                            name={"straight"}
                            link={"attributes"}
                        />
                    )}
                    {goglesSing && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={goglesSing}
                            count={goglesCount}
                            name={"gogles"}
                            link={"attributes"}
                        />
                    )}
                    {chokerSing && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={chokerSing}
                            count={chokerCount}
                            name={"choker"}
                            link={"attributes"}
                        />
                    )}
                    {bunSing && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={bunSing}
                            count={bunCount}
                            name={"bun"}
                            link={"attributes"}
                        />
                    )}
                    {highlightSing && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={highlightSing}
                            count={highlightCount}
                            name={"highlight"}
                            link={"attributes"}
                        />
                    )}
                    {maleSing && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={maleSing}
                            count={maleCount}
                            name={"male"}
                            link={"attributes"}
                        />
                    )}
                    {headbandSing && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={headbandSing}
                            count={headbandCount}
                            name={"headband"}
                            link={"attributes"}
                        />
                    )}
                    {freckleSing && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={freckleSing}
                            count={freckleCount}
                            name={"freckle"}
                            link={"attributes"}
                        />
                    )}
                    {classicStraightSing && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={classicStraightSing}
                            count={classicStraightCount}
                            name={"Classic Straight"}
                            link={"attributes"}
                        />
                    )}
                    {pilotSing && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={pilotSing}
                            count={pilotCount}
                            name={"Pilot"}
                            link={"attributes"}
                        />
                    )}
                    {headScarfSing && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={headScarfSing}
                            count={headScarfCount}
                            name={"Head Scarf"}
                            link={"attributes"}
                        />
                    )}
                    {faceDecorSing && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={faceDecorSing}
                            count={faceDecorCount}
                            name={"Face DecorSing"}
                            link={"attributes"}
                        />
                    )}
                    {whiteSkinSing && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={whiteSkinSing}
                            count={whiteSkinCount}
                            name={"White Skin"}
                            link={"attributes"}
                        />
                    )}
                    {bobSing && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={bobSing}
                            count={bobCount}
                            name={"Bob"}
                            link={"attributes"}
                        />
                    )}
                    {edgyPunkSing && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={edgyPunkSing}
                            count={edgyPunkCount}
                            name={"Edgy Punk"}
                            link={"attributes"}
                        />
                    )}
                    {dyeHairSing && (
                        <GridPopAttributes
                            xxl={3} xl={3} lg={4} md={6} sm={5} xs={8} span={2}
                            data={dyeHairSing}
                            count={dyeHairCount}
                            name={"Dye Hair"}
                            link={"attributes"}
                        />
                    )}
                </Row>
            </div>
    )
}

export default AttributesPage;