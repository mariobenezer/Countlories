import { Spinner, Text, Center, Flex } from '@chakra-ui/react'

type Props = {
  label: string
}

function Loader({ label }: Props) {
  return (
    <Center height="200px">
      <Flex flexDirection="column" alignItems="center">
        <Spinner size="lg" color="teal" />
        <Text mt={4} fontSize="lg" fontWeight="medium">
          {label}
        </Text>
      </Flex>
    </Center>
  )
}

export default Loader
