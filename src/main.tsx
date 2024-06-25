import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {WagmiProvider} from "wagmi";
import {config} from "./config/CreateConfig.ts";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {darkTheme, RainbowKitProvider} from "@rainbow-me/rainbowkit";
import {bsc} from "wagmi/chains";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    <RainbowKitProvider initialChain={bsc} theme={darkTheme({
                        accentColor: '#black',
                        accentColorForeground: 'white',
                        borderRadius: 'small',
                        fontStack: 'rounded',
                        overlayBlur: 'small',
                    })}
                    >
                        <App/>
                    </RainbowKitProvider>
                </QueryClientProvider>
            </WagmiProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
