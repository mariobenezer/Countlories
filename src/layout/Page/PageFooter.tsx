import { Box } from '@chakra-ui/react'
import { ReactNode, RefObject } from 'react'
import ElementContainer from './ElementContainer'

type Props = {
  children: ReactNode
  footerContainerRef?: RefObject<HTMLDivElement>
}

function PageFooter({ children, footerContainerRef }: Props) {
  return (
    <Box
      bg="#f6f6e9"
      boxShadow="md"
      position="fixed"
      bottom="0"
      left={0}
      right={0}
      zIndex={2}
    >
      <ElementContainer mx="auto" ref={footerContainerRef}>
        <Box py={3} bg="#f6f6e9">
          {children}
        </Box>
      </ElementContainer>
    </Box>
  )
}

export default PageFooter
