import { Box, Container, Heading, Text, Stack, IconButton, VStack, HStack, Link } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';

export default function ContactUs() {
  return (
    <Box mt="15%" minH="100vh" py={10}>
      <Container maxW="6xl" centerContent>
        <Heading as="h1" size="2xl" mb={6} color="black">
          Contact Us
        </Heading>
        <Text fontSize="lg" color="black" mb={10} textAlign="center">
          We'd love to hear from you! Reach out to us through any of the following ways.
        </Text>
        
        <VStack spacing={8} align="stretch" width="100%">
          <Stack direction={{ base: 'column', md: 'row' }} spacing={10} justify="center" textAlign="center">
            <Box>
              <Heading size="md" color="black">Phone Number</Heading>
              <HStack justify="center" mt={2}>
                <PhoneIcon />
                <Link href="tel:+37444040405" _hover={{ textDecoration: 'none' }}>
                  <Text fontSize="lg" color="black"> +(374) 44 040-405</Text>
                </Link>
              </HStack>
            </Box>
            <Box>
              <Heading size="md" color="black">Email</Heading>
              <HStack justify="center" mt={2}>
                <EmailIcon />
                <Link href="mailto:itsgroupam@gmail.com" _hover={{ textDecoration: 'none' }}>
                  <Text fontSize="lg" color="black">itsgroupam@gmail.com</Text>
                </Link>
              </HStack>
            </Box>
          </Stack>

          <HStack spacing={8} justify="center">
            <Link href="https://facebook.com" isExternal>
              <IconButton
                aria-label="Facebook"
                icon={<FaFacebook />}
                variant="ghost"
                colorScheme="whiteAlpha"
                size="lg"
                _hover={{ bg: 'gray.600' }}
              />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram />}
                variant="ghost"
                colorScheme="whiteAlpha"
                size="lg"
                _hover={{ bg: 'gray.600' }}
              />
            </Link>
            <Link href="https://tiktok.com" isExternal>
              <IconButton
                aria-label="TikTok"
                icon={<FaTiktok />}
                variant="ghost"
                colorScheme="whiteAlpha"
                size="lg"
                _hover={{ bg: 'gray.600' }}
              />
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}
