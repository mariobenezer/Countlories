import { Image, Center } from '@chakra-ui/react';

export const Logo = () => (
  <Center mb={4}>
    {/* Menggunakan nama file logo yang benar */}
    <Image src="/android-chrome-512x512.png" alt="Countlories Logo" boxSize="60px" />
  </Center>
);