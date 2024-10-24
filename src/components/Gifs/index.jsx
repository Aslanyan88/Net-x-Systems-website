import { Box, Image } from "@chakra-ui/react";


export default function AnimatedCamera({Gif}) {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="150px" 
      bg="white"
      borderRadius="md" 
    >
      <Image
        src={Gif}
        alt="Camera"
        maxW="150px"
      />
    </Box>
  );
}
