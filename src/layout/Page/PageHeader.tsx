import { Box, Flex } from '@chakra-ui/react'
import { ForwardedRef, forwardRef, ReactNode } from 'react'
import ElementContainer from './ElementContainer'

type Props = {
  children: ReactNode
  forwardedRef?: ForwardedRef<HTMLDivElement>
}

function PageHeader({ children, forwardedRef }: Props) {
  return (
    <Flex
      ref={forwardedRef}
      justifyContent="center"
      top="0"
      bg="#f6f6e9e"
      zIndex={2}
      px={3}
      boxShadow="md"
    >
      <ElementContainer>
        <Box>{children}</Box>
      </ElementContainer>
    </Flex>
  )
}

export default forwardRef<HTMLDivElement, Props>((props, ref) => (
  <PageHeader forwardedRef={ref} {...props} />
))
