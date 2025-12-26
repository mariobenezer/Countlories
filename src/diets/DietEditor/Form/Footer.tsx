import { Box, HStack, Button, Divider, BoxProps } from '@chakra-ui/react'

type Props = {
  onAbout: () => void
} & BoxProps

function Footer({ onAbout, ...rest }: Props) {
  return (
    <Box {...rest}>
      <Divider />
      <HStack height="50px" spacing={3}>
        <Button
          variant="link"
          color="gray.500"
          fontWeight="thin"
          py={0.5}
          onClick={onAbout}
        >
          About
        </Button>

        <Button
        variant="link"
        color="gray.500"
        fontWeight="thin"
        py={0.5}
        >
          Terms
        </Button>

        <Button
        variant="link"
        color="gray.500"
        fontWeight="thin"
        py={0.5}
        >
          Disclaimer
        </Button>
      </HStack>
    </Box>
  )
}

export default Footer
