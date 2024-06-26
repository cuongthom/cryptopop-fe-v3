import {http, createConfig, injected} from '@wagmi/core'
import { mainnet, bsc } from '@wagmi/core/chains'

export const config = createConfig({
    chains: [mainnet,bsc],
    connectors: [injected()],
    syncConnectedChain: false,
    transports: {
        [mainnet.id]: http("https://bsc.drpc.org"),
        [bsc.id]: http("https://bsc.drpc.org"),
    },
})