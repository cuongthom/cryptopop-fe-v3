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
    getAllTypes: async (types: string): Promise<any> => {
        const url = `/nft/getAllTypes?types=${types}`;
        return await axiosClient.get(url);
    },
    getAllAttributes: async (attributes: string): Promise<any> => {
        const url = `/nft/getAllAttributes?attributes=${attributes}`;
        return await axiosClient.get(url);
    },
    getNftById: async (id: string): Promise<any> => {
        const url = `/nft/getNftById?auctionId=${id}`;
        return await axiosClient.get(url);
    },
    getMyNft: async (): Promise<any> => {
        const url = `/nft/getMyNft?address=0x4A05a19Dc0C1331dC4Ddb3aA7dADEaCE7dD4150f`;
        return await axiosClient.get(url);
    },
    getMyAuction: async (address: string): Promise<any> => {
        const url = `/auction/getMyAuction?address=${address}`;
        return await axiosClient.get(url);
    },
    getMyMarket: async (address: string): Promise<any> => {
        const url = `/market/getListMyNft?address=${address}`;
        return await axiosClient.get(url);
    },
}
export default popServices;