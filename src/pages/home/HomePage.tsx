import banner from "/image/banner.06d067e1.png"
import TitleReview from "./component/TitleReview.tsx";
import {Row} from "antd";
import TitleOverall from "./component/TitleOverall.tsx";
import {TiThMenu} from "react-icons/ti";
import PopsOwner from "./component/PopsOwner.tsx";
import {ImDropbox} from "react-icons/im";

function HomePage() {
    return (
        <div>
            <div className="banner-container">
                <img src={banner} alt="layout" className="banner-img"/>
            </div>
            <div className="container">
                <TitleReview
                    title={"Crypto Pops Society"}
                    information1={"The Crypto Pops Society is a collection of 5.000 unique Pops with 64×64 pixel art images, generated algorithmically on the Binance Smart Chain (BCS). Most are Human, but there are a few rarer types mixed in: Zombies, Animals, Robot and even the odd Constellation."}
                    information2={"There are exactly 5,000 of them, each with their own ostensible personality and unique combination of distinctive, randomly generated features."}
                    icon={"BLOCKCHAIN"}
                />
                <TitleReview
                    title={"The ability to control"}
                    information1={"Developing blockchain projects is different from conventional projects. Developers after announcing and releasing the product will almost no longer have the right to interfere and modify. It is the investors who will be responsible for the changes they have made to the smart contract."}
                    information2={"At the same time, the fixed number of 5,000 Pops makes Pops valuable and limited. Even if creators could make more Pops, they would not be recognized in the market. This has proven equality and fairness for everyone when entering this playground."}
                    information3={"Because once created, the manufacturers locked it up and the ownership control code was injected into the BSC blockchain network. By the time the Pops are released on the blockchain, the producer has lost his control to create more or own the Pops."}
                />
                <TitleReview
                    title={"Community and society"}
                    information1={"Currently, Monnfts is raising funds for the rights and child protection association affiliated with Unicef. We will spend 20% of our profits to help disadvantaged children in the country and around the world."}
                    information2={"Besides, to promote and support investors $MON has come with difficulties with the Dev team. We will put 20% of profits into liquidity and accelerate the development of MON token value."}
                    information3={"The rest of the money raised Monnnfts focuses on developing the $MON ecosystem."}
                />
            </div>
            <div className="container">
                <h2 style={{padding: '20px 0'}}>Overall Stats</h2>
                <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}>
                    <TitleOverall information1={"Number of Sales (Last 12 Months)"} information2={"16"}/>
                    <TitleOverall information1={"Total Value of All Sales (Lifetime)"} information2={"13.55994KΞ BNB"}/>
                    <TitleOverall information1={"Value of Sales (24 Hours)"} information2={"0KΞ BNB"}/>
                    <TitleOverall information1={"Value of Sales (Week)"} information2={"0KΞ BNB"}/>
                    <TitleOverall information1={"Value of Sales (4 Weeks)"} information2={"0KΞ BNB"}/>

                </Row>
                <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}
                     style={{padding: '20px 0'}}>
                    <PopsOwner icon={<TiThMenu/>} title={"Top Pops Owner"}/>
                    <PopsOwner icon={<ImDropbox/>} title={"All Pops Types and Attributes"}/>
                </Row>
            </div>
            <div className="container">
                <div>
                    <h2>Largest Sales</h2>
                    <p className="text-aqua">See all top sales</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;