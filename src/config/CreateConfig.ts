import {getDefaultConfig} from '@rainbow-me/rainbowkit';
import {http} from 'wagmi';
import {bsc, mainnet} from 'wagmi/chains';

export const config = getDefaultConfig({
    appName: 'cryptoPop',
    projectId: 'YOUR_PROJECT_ID',
    chains: [bsc, mainnet],
    transports: {
        [bsc.id]: http("https://bsc-pokt.nodies.app"),
        [mainnet.id]: http("https://eth-pokt.nodies.app"),
    },
    ssr: true,
});