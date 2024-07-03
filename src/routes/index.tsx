import HomePage from "../pages/home/HomePage.tsx";
import AllPopsPage from "../pages/all-pop/AllPopsPage.tsx";
import BuyBoxPage from "../pages/box/BuyBoxPage.tsx";
import AttributesPage from "../pages/attributes/AttributesPage.tsx";
import AllMyNfts from "../pages/nft";
import DetailNfts from "../pages/detail/DetailNfts.tsx";


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
    popDetail: {
      path: '/pop/:id',
      component: <DetailNfts/>,
      getPath: (id: string) => `/pop/${id}`,
    },
    // marketDetail: {
    //   path: '/market/:id',
    //   component: <MarketDetailPage/>,
    //   getPath: (id: string) => `/market/${id}`,
    // },
    // auctionDetail: {
    //   path: '/auction/:id',
    //   getPath: (id: string) => `/auction/${id}`,
    //   component: <AuctionDetailPage/>
    // }


}

export default appRoutes;
