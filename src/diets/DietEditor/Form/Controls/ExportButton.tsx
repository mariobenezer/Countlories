import { ScreenSize, useScreenSize } from 'general'
import { Button, ButtonProps, IconButton } from '@chakra-ui/react'
import { Share } from 'react-feather'
import { canExportDietForm } from 'diets/persistence'
import { useDietForm } from 'diets'

type Props = {} & ButtonProps

function ExportButton({ ...rest }: Props) {
  const screenSize = useScreenSize()
  const dietForm = useDietForm()
  const canExport = canExportDietForm(dietForm)

  const commonProps: ButtonProps = {
    isDisabled: !canExport,
    ...rest,
  }

  if (screenSize >= ScreenSize.Medium) {
    return (
      <Button
        leftIcon={<Share size={16} pointerEvents="none" />}
        variant="solid"
        // colorScheme="teal"
        size="md"
        bg="#31511E" // Warna latar hijau tua
        color="white"   // Warna teks putih
        _hover={{ bg: '#42544a' }}
        {...commonProps}
      >
        Export
      </Button>
    )
  }

  return (
    <IconButton
      isDisabled={!canExport}
      aria-label="Export"
      // colorScheme="teal"
      size="md"
      bg="#31511E" // Warna latar hijau tua
      color="white"   // Warna ikon putih
      _hover={{ bg: '#42544a' }}
      icon={<Share size={20} pointerEvents="none" />}
      {...commonProps}
    />
  )
}

export default ExportButton
