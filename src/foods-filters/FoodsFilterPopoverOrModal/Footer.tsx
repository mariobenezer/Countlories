import { HStack, Button } from '@chakra-ui/react'
import {
  nonQueryChangesCount,
  useFoodsFilter,
  useFoodsFilterActions,
} from 'foods-filters'

type Props = {
  onClose: () => void
}

function Footer({ onClose }: Props) {
  const filter = useFoodsFilter()
  const foodsFilterActions = useFoodsFilterActions()

  const changesCount = nonQueryChangesCount(filter)

  function onReset() {
    foodsFilterActions.resetFilter()
    onClose()
  }

  return (
    <HStack spacing={3} justifyContent="flex-end">
      <Button 
      variant="solid"             // 1. Ubah dari "link" menjadi "solid"
        bg="#BFCF84"                // 2. Tambahkan warna latar belakang
        color="#333"               // 3. Tambahkan warna teks agar kontras
        _hover={{ bg: '#afbb71' }}  // 4. (Opsional) Tambahkan warna saat disentuh mouse
        isDisabled={changesCount === 0}
        onClick={onReset}
        >
        Reset
      </Button>
      <Button variant="outline" onClick={onClose}>
        Close
      </Button>
    </HStack>
  )
}

export default Footer
