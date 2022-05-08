import { Container, Heading, Box, Link, Flex, Spacer } from '@chakra-ui/react'
import { SwitchNetworkAlert } from '@/components/metaMaskAlert/SwitchNetworkAlert'
import { MetaMaskLeadBanner } from '@/components/metaMaskAlert/MetaMaskLeadBanner'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SwitchNetworkAlert />
      <MetaMaskLeadBanner />
      <Box padding="4">
        <Flex>
          <Box p={2}>
            <Heading size="md">Omise – HENKAKU</Heading>
          </Box>
          <Spacer />
          <Box p={2}>
            <Link href="/" p={4}>
              Home
            </Link>
            <Link href="/quests" p={4}>
              Quests
            </Link>
          </Box>
        </Flex>
      </Box>
      <Container maxW="4xl">{children}</Container>
    </>
  )
}

export { Layout }
