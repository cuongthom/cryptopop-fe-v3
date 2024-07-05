import axiosClient from "./axiosClient.ts";

const popServices = {
    getAllAuction: async (): Promise<any> => {
        const url = "/auction/getAllAuction";
        return await axiosClient.get(url);
    },
    getAllMarket: async (): Promise<any> => {
        const url = "/market/getAllNftMarket";
        return await axiosClient.get(url);
    },

    getDetailNftAuction: async (id: string): Promise<any> => {
        const url = `/auction/getDetailById?id=${id}`;
        return await axiosClient.get(url);
    },
    getDetailNftMarket: async (id: string): Promise<any> => {
        const url = `/market/getDetailMarketById?id=${id}`;
        return await axiosClient.get(url);
    },
    getAllNft: async (): Promise<any> => {
        const url = "/nft/getAllNft";
        return await axiosClient.get(url);
    },
}
export default popServices;