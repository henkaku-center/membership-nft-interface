import { useContractRead } from 'wagmi'
import kamonNFTContract from '@/utils/abis/kamonNFT.json'

export const useTokenURI = (contract: string, tokenId: number) => {
  const { data: tokenURI, isError } = useContractRead(
    {
      addressOrName: contract,
      contractInterface: kamonNFTContract.abi
    },
    'tokenURI',
    {
      args: tokenId
    }
  )

  return {
    tokenURI: tokenURI
      ? tokenURI.replace(
          'https://sakazuki.mypinata.cloud/',
          'https://gateway.pinata.cloud/'
        )
      : undefined,
    isError
  }
}
