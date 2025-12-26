import { chakra, IconButton, Button } from '@chakra-ui/react'
import { useDietFormVersionsActions, useDietFormVersions } from 'undoRedo'
import { RotateCcw } from 'react-feather'
import {
  getCtrlKeyName,
  TooltipCommandLabel,
  Tooltip,
  useScreenSize,
  ScreenSize,
} from 'general'

const RotateCcwStyled = chakra(RotateCcw)
const ctrlKeyName = getCtrlKeyName()

function UndoButton() {
  const { undo } = useDietFormVersionsActions()
  const { canUndo } = useDietFormVersions()
  const screenSize = useScreenSize()

  if (screenSize >= ScreenSize.Medium) {
    return (
      <Tooltip
        label={
          <TooltipCommandLabel
            command="Undo last change"
            kbdCombo={`${ctrlKeyName}+Z`}
          />
        }
      >
        <Button
          variant="solid"
          leftIcon={<RotateCcwStyled size={16} pointerEvents="none" />}
          bg="#BFCF84" // Warna latar belakang baru
          color="#333" // Warna teks agar kontras (misal: abu-abu tua)
          _hover={{ bg: '#afbb71' }}
          isDisabled={!canUndo}
          onClick={() => undo()}
        >
          Undo
        </Button>
      </Tooltip>
    )
  }

  return (
    <IconButton
      aria-label="Undo"
      variant="solid"
      icon={<RotateCcwStyled size={20} pointerEvents="none" />}
      isDisabled={!canUndo}
      onClick={() => undo()}
    />
  )
}

export default UndoButton
