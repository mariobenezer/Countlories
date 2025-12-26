import {
  createContext,
  ReactElement,
  ReactNode,
  RefObject,
  useRef,
} from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import useHasSideNavigation from './useHasSideNavigation'

import Logo from '../layout/logo.png'

export type MainLayoutProps = {
  sidebarElement?: ReactElement
  children: ReactNode
}

const ContentBoxRefContext = createContext<RefObject<HTMLDivElement | null>>({
  current: null,
})

function MainLayout({ children }: MainLayoutProps) {
  const hasSideNavigation = useHasSideNavigation()
  const contentBoxRef = useRef<HTMLDivElement>(null)

  return (
    <Box bg="#31511E" minHeight="100vh">
      {hasSideNavigation && (
        <Box
          top="0"
          height="100vh"
          position="fixed"
          width="200px"
          bg="teal.500"
        />
      )}

      <Flex justify="center" pt={10}>
        <Image src={Logo} alt="Logo" boxSize="100px" />
      </Flex>

      <Flex
        justify="center"
        align="center"
        ml={hasSideNavigation ? '200px' : 0}
        minHeight="80vh"
        p={6}
      >
        <ContentBoxRefContext.Provider value={contentBoxRef}>
          <Box
            ref={contentBoxRef}
            bg="#f6f6e9"
            borderRadius="2xl"
            boxShadow="lg"
            width="100%"
            maxW="1680px"
            minHeight="75vh"
            p={10}
            mt="6"
          >
            {children}
          </Box>
        </ContentBoxRefContext.Provider>
      </Flex>
    </Box>
  )
}

export { ContentBoxRefContext }
export default MainLayout
