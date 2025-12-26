import { useDietForm, useDietFormActions } from 'diets'
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react'
import { ChangeEvent, useEffect, useRef } from 'react'
// import getComputedColorFromChakra from 'theme/getComputedColorFromChakra'
import { canExportDietForm } from 'diets/persistence'

function Name() {
  const dietForm = useDietForm()
  const dietFormActions = useDietFormActions()
  const editablePreviewRef = useRef<HTMLDivElement>(null)
  const focusedForDietFieldIdMap = useRef<Record<string, boolean | undefined>>(
    {}
  )

  useEffect(() => {
    if (
      !canExportDietForm(dietForm) &&
      editablePreviewRef.current &&
      !focusedForDietFieldIdMap.current[dietForm.fieldId]
    ) {
      editablePreviewRef.current.focus()
      focusedForDietFieldIdMap.current[dietForm.fieldId] = true
    }
  }, [dietForm])

  function onNameChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    dietFormActions.updateDietForm({ name: value })
  }

  // const boxShadowColor = getComputedColorFromChakra('teal.400')

  return (
        <Editable
      fontSize="lg"
      fontWeight="medium"
      textAlign="center"
      value={dietForm.name}
      width="85%"
      data-test-type="diet-name"
    >
      {/* Tambahkan properti gaya di sini */}
      <EditablePreview
        ref={editablePreviewRef}
        width="100%"
        bg="#BFCF84" // Warna latar belakang solid
        color="#333"  // Warna teks
        borderRadius="md" // Sudut membulat
        px={3} // Padding horizontal (kiri-kanan)
        py={1} // Padding vertikal (atas-bawah)
      />
      <EditableInput
        onChange={onNameChange}
        bg="#afbb71" // Memastikan latar belakang tetap putih saat diedit
        _focus={{
        // Mengganti gaya saat di-klik/aktif
        borderColor: '#afbb71',
        boxShadow: `0 0 0 1px #afbb71`,
        }}
      />
    </Editable>

    // <Editable
    //   fontSize="lg"
    //   fontWeight="medium"
    //   textAlign="center"
    //   value={dietForm.name}
    //   width="85%"
    //   data-test-type="diet-name"
    // >
    //   <EditablePreview ref={editablePreviewRef} width="100%" />
    //   <EditableInput
    //     _focus={{ boxShadow: `${boxShadowColor} 0px 0px 0px 3px` }}
    //     onChange={onNameChange}
    //   />
    // </Editable>
  )
}

export default Name
