import {http} from 'wagmi'
import {arbitrum, base, bsc, bscTestnet, mainnet, optimism, polygon} from 'wagmi/chains'
import {getDefaultConfig} from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css';


export const config = getDefaultConfig({
    appName: 'CryptoPop',
    projectId: 'YOUR_PROJECT_ID',
    chains: [bsc, mainnet, bscTestnet, polygon, optimism, arbitrum, base],
    transports: {
        [bsc.id]: http(),
    },
    ssr: true,
})
