import {http, createConfig} from 'wagmi'
import {bscTestnet} from 'wagmi/chains'

export const config = createConfig({
    chains: [bscTestnet],
    transports: {
        [bscTestnet.id]: http("https://bsc-testnet.blockpi.network/v1/rpc/public"),

    },
})