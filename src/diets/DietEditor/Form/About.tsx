import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  // ListItem,
  // List,
  // ListIcon,
} from '@chakra-ui/react'
// import { CheckCircle } from 'react-feather'

type Props = {
  isOpen: boolean
  onClose: () => void
}

function About({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>About </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="lg">
            <Text>Hello, we are from group 12 (Software Engineering).</Text>
            <br />
            <Text>
              <Text fontWeight="semibold" as="span" textColor="teal.600">
                Countlories
              </Text>{' '}
               is here as your digital diet assistant, with smart and 
              easy-to-use calorie tracking features, this application can help you to monitor your daily 
              intake, achieve your nutritional targets, and build a healthy lifestyle.
            </Text>
            {/* <Text>
              The idea was born out of my experience of trying to find a better
              alternative to Google Sheets for calculating the macros of my own
              meal plans. I wanted to be able to do this on desktop as it's more
              convenient but nothing really felt fast and simple enough.
            </Text>
            <br /> */}
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button size="lg" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default About
