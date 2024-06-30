import {getDefaultConfig} from '@rainbow-me/rainbowkit';
import {http} from 'wagmi';
import {bscTestnet} from 'wagmi/chains';

export const config = getDefaultConfig({
    appName: 'cryptoPop',
    projectId: 'YOUR_PROJECT_ID',
    chains: [bscTestnet],
    transports: {
        [bscTestnet.id]: http("https://bsc-testnet.blockpi.network/v1/rpc/public"),
    },
});