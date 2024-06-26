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
}
export default popServices;