import HomePage from "../pages/home/HomePage.tsx";
import AllPopsPage from "../pages/all-pop/AllPopsPage.tsx";
import BuyBoxPage from "../pages/box/BuyBoxPage.tsx";
import AttributesPage from "../pages/attributes/AttributesPage.tsx";
import MyNfts from "../pages/nft/MyNfts.tsx";
import MyShop from "../pages/nft/MyShop.tsx";


const appRoutes = {
    home: {
        path: '/',
        component: <HomePage/>
    },
    allPops: {
        path: '/all-pops',
        component: <AllPopsPage/>,
    },
    buyBox: {
        path: '/box',
        component: <BuyBoxPage/>
    },
    attributes: {
        path: '/attributes',
        component: <AttributesPage/>
    },
    myNfts: {
        path: '/my-nfts',
        component: <MyNfts/>
    },
    myShop: {
        path: '/my-shop',
        component: <MyShop/>
    },
    //
    // popDetail: {
    //   path: '/pop/:id',
    //   component: <PopDetailPage/>,
    //   getPath: (id: string) => `/pop/${id}`,
    // },
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
