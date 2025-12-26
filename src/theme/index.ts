// import { extendTheme } from '@chakra-ui/react'
// import styles from './styles'
// // import colors from './colors'
// import { Input, Button, Divider, Textarea, Alert } from './components'

// const customColors = {
//   brandGreen: {
//     50: '#E9F2E2',
//     100: '#DDEBCF',
//     200: '#A8C090', // Aksen/Tombol
//     500: '#A8C090', // Aksen/Tombol
//     600: '#8EAB73',
//   },
//   brand: {
//     bg: '#C4D8B2',         // Latar Belakang Utama
//     contentBg: '#F8F9F4',  // Latar Belakang Konten
//     border: '#A9C5D0',     // Warna Border
//     text: '#4F6457',       // Warna Teks
//   },
// };

// const theme = extendTheme({
//   styles,
//   colors: {
//     ...customColors, // Tambahkan warna baru Anda
//     teal: customColors.brandGreen, // Ganti skema 'teal' dengan 'brandGreen'
//   },
//   config: { initialColorMode: 'light', useSystemColorMode: false },
//   components: {
//     Input,
//     Button,
//     Divider,
//     Textarea,
//     Alert,
//   },
// })

// export { default as getComputedColorFromChakra } from './getComputedColorFromChakra'

// export default theme

import { extendTheme } from '@chakra-ui/react'
import styles from './styles'
// Hapus import 'colors' yang lama jika ada
import { Input, Button, Divider, Textarea, Alert } from './components'

// 1. Definisikan skema warna baru Anda di sini
const brandGreen = {
  50: '#f2f5e7',
  100: '#e5eac9',
  200: '#d8e0aa',
  300: '#cbd58b',
  400: '#BFCF84', // <-- Warna utama Anda
  500: '#a8b66e',
  600: '#8f9d58',
  700: '#768242',
  800: '#5e682c',
  900: '#474f17',
}

const theme = extendTheme({
  fonts: {
    body: "'Nunito', sans-serif",
    heading: "'Nunito', sans-serif",
  },
  colors: {
    // 2. Ganti skema warna 'teal' dengan skema warna baru Anda
    teal: brandGreen,
    // Anda juga bisa menambahkan warna lain di sini jika perlu
    brandGreen,
  },
  styles,
  config: { initialColorMode: 'light', useSystemColorMode: false },
  components: {
    Input,
    Button,
    Divider,
    Textarea,
    Alert,
  },
})

export { default as getComputedColorFromChakra } from './getComputedColorFromChakra'

export default theme