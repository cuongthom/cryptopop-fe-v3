import {ARTWORK_CONTRACT_ABI, ARTWORK_CONTRACT_ADDRESS} from "../../contracts";
import {useConnect, useReadContracts, useWaitForTransactionReceipt} from 'wagmi'
import {formatEther, parseUnits} from "ethers";
import {useWriteContract} from 'wagmi'
import {useAccount} from 'wagmi'
import {injected} from "@wagmi/core";
import {Skeleton} from "antd";

function BuyBoxPage() {
    const account = useAccount()
    const {connect} = useConnect()
    const {data: hash, error, isPending, writeContract, writeContractAsync} = useWriteContract()
    const {isLoading, data: dataFunc, isSuccess} = useWaitForTransactionReceipt({
        hash,
    })

    const artWorkContract = {
        address: ARTWORK_CONTRACT_ADDRESS,
        abi: ARTWORK_CONTRACT_ABI,
    } as const

    const {data: dataReadContract, isPending: isPendingContract, refetch} = useReadContracts({
        contracts: [
            {
                ...artWorkContract,
                functionName: 'blindBoxPrice',
            },
            {
                ...artWorkContract,
                functionName: 'getArtworks',
            },
            {
                ...artWorkContract,
                functionName: 'totalSupply',
            }

        ],
    })

    if (isPendingContract) {
        return <Skeleton className="container" style={{margin: '20px 0'}} active/>
    }

    const formattedData = dataReadContract?.map((item) => ({
        ...item,
        result: item?.result.toString(),
    }));
    console.log("dataReadContract", formattedData)
    const price = formattedData ? formatEther(formattedData[0].result) : ""
    const totalSupply = formattedData ? formattedData[2].result : ""
    const artWorkLeng = formattedData ? formattedData[1].result.length : ""
    console.log("price", price)
    console.log("totalSupply", totalSupply)
    const buyBox = async (e) => {
        e.preventDefault()
        if (!account.address) {
            connect({connector: injected()})
        }
        writeContract({
            ...artWorkContract,
            functionName: 'buyBlindBox',
            args: [1],
            value: parseUnits(price, "ether"), // Chuyển giá thành wei
        })
        console.log("request")
        await refetch()
    }


    return (
        <div>
            <div className="flex container" style={{margin: '20px 0'}}>
                <b>Cryptopops </b>
                <b style={{padding: '0 20px'}}>|</b>
                <b>Buy Box</b>
            </div>
            <div className="flex-buyBox container">
                <div style={{padding: '10px'}} className="margin-auto">
                    <video height="auto" className="w-video-buyBox" loop={false} autoPlay={true} muted={true}>
                        <source
                            src="/video/videoPop.90fcae92.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div style={{padding: '10px'}}>
                    <div>
                        <h3 style={{fontSize: '35px'}}>CryptoPop</h3>
                    </div>
                    <div style={{padding: '20px 0'}}>
                        <p className="text-gray" style={{fontSize: '20px'}}>Remaining
                            Amount: {totalSupply} / {artWorkLeng} </p>
                        <p className="text-gray" style={{padding: '20px 0', fontSize: '20px'}}>Price</p>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126.61 126.61"
                                 style={{width: '30px', height: '30px'}}>
                                <g fill="#f3ba2f">
                                    <path d="m38.73 53.2 24.59-24.58 24.6 24.6 14.3-14.31-38.9-38.91-38.9 38.9z"/>
                                    <path d="m0 63.31 14.3-14.31 14.31 14.31-14.31 14.3z"/>
                                    <path
                                        d="m38.73 73.41 24.59 24.59 24.6-24.6 14.31 14.29-38.9 38.91-38.91-38.88z"/>
                                    <path d="m98 63.31 14.3-14.31 14.31 14.3-14.31 14.32z"/>
                                    <path
                                        d="m77.83 63.3-14.51-14.52-10.73 10.73-1.24 1.23-2.54 2.54 14.51 14.5 14.51-14.47z"/>
                                </g>
                            </svg>
                            <h3 style={{padding: '0 10px', fontSize: '30px'}}>{price} BNB</h3>
                        </div>
                        <button
                            disabled={isPending}
                            onClick={buyBox}
                            className="text-white bg-black c-pointer button-buyBox transition bg-hover">BUY NOW
                        </button>
                        {hash && <div>Transaction Hash: {hash}</div>}


                        <div>
                            <b>Contract Address</b>
                            <p className="text-gray">{ARTWORK_CONTRACT_ADDRESS}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyBoxPage;