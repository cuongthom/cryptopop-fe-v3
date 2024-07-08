import HomePage from "../pages/home/HomePage.tsx";
import AllPopsPage from "../pages/all-pop/AllPopsPage.tsx";
import BuyBoxPage from "../pages/box/BuyBoxPage.tsx";
import AttributesPage from "../pages/attributes/AttributesPage.tsx";
import AllMyNfts from "../pages/nft";
import MarketDetail from "../pages/detail/MarketDetail.tsx";
import AuctionDetail from "../pages/detail/AuctionDetail.tsx";
import DetailAttributes from "../pages/attributes/detail/DetailAttributes.tsx";
import MyNfts from "../pages/nft/MyNfts.tsx";
import GridMyNft from "../pages/nft/component/GridMyNft.tsx";
import MyNftDetailPage from "../pages/detail/MyNftDetail.tsx";


const appRoutes = {
    home: {
        path: '/',
        component: <HomePage/>
    },
    allPops: {
        path: '/all-pops/:page',
        component: <AllPopsPage/>,
        getPath: (page: string) => `/all-pops/${page}`,
    },
    buyBox: {
        path: '/box',
        component: <BuyBoxPage/>
    },
    attributes: {
        path: '/attributes',
        component: <AttributesPage/>
    },
    allMyNfts: {
        path: '/user/:page',
        component: <AllMyNfts/>,
        getPath: (page: string) => `/user/${page}`,
    },
    marketDetail: {
        path: '/market/:id',
        component: <MarketDetail/>,
        getPath: (id: string) => `/market/${id}`,
    },

    auctionDetail: {
        path: '/auction/:id',
        getPath: (id: string) => `/auction/${id}`,
        component: <AuctionDetail/>
    },
    attributeDetail: {
        path: '/detail',
        component: <DetailAttributes/>
    },
    myNftDetail: {
        path: '/detailmynft/:id',
        component: <MyNftDetailPage/>,
        getPath: (id: string) => `/detailmynft/${id}`,
    },

}

export default appRoutes;
