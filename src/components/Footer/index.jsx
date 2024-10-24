import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTiktok,FaLinkedinIn } from "react-icons/fa";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaMapMarkerAlt } from "react-icons/fa";
export default function Footer() {
  return (
    <Box bg="gray.800" color="white">
      <Container as={Stack} maxW="6xl" py={4} spacing={4}>
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          spacing={{ base: 4, md: 0 }}
        >
          <Stack
            direction="row"
            spacing={4}
            justify={{ base: "center", md: "flex-start" }}
          >
            <Link
              href="https://www.facebook.com/p/Net-X-Systems-100060054199721/"
              isExternal
            >
              <IconButton
                aria-label="Facebook"
                icon={<FaFacebook />}
                variant="ghost"
                colorScheme="whiteAlpha"
                _hover={{ bg: "gray.600" }}
                fontSize="30px"
              />
            </Link>
            <Link href="https://www.instagram.com/netxsystems/" isExternal>
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram />}
                variant="ghost"
                colorScheme="whiteAlpha"
                _hover={{ bg: "gray.600" }}
                fontSize="30px"
              />
            </Link>
            <Link href="https://www.tiktok.com/@netxsystems" isExternal>
              <IconButton
                aria-label="TikTok"
                icon={<FaTiktok />}
                variant="ghost"
                colorScheme="whiteAlpha"
                _hover={{ bg: "gray.600" }}
                fontSize="30px"
              />
              
            </Link>
            <Link
              href="https://www.linkedin.com/company/net-x-systems-armenia/"
              isExternal
            >
              <IconButton
                aria-label="Linkedin"
                icon={<FaLinkedinIn />}
                variant="ghost"
                colorScheme="whiteAlpha"
                _hover={{ bg: "gray.600" }}
                fontSize="30px"
              />
            </Link>
          </Stack>

          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={4}
            align="center"
            justify={{ base: "center", md: "flex-end" }}
          >
            <HStack spacing={1}>
              <PhoneIcon boxSize={4} />
              <Link
                href="tel:+12345678900"
                fontSize="sm"
                _hover={{ textDecoration: "underline" }}
              >
               +(374) 44 040-405
              </Link>
            </HStack>
            <HStack spacing={1}>
              <EmailIcon boxSize={4} />
              <Link
                href="mailto:yourcompany@gmail.com"
                fontSize="sm"
                _hover={{ textDecoration: "underline" }}
              >
                itsgroupam@gmail.com
              </Link>
            </HStack>
            <HStack spacing={1} mt={2} textAlign="center">
              <FaMapMarkerAlt size={16} />
              <Text fontSize="sm">
              Karapet Ulnetsi Street, 70/10
              </Text>
            </HStack>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={6} justify="center" mt={4}>
          <Link
            href="/contact"
            _hover={{ textDecoration: "underline" }}
            fontSize="sm"
          >
            Contact Us
          </Link>
          <Link
            href="/about"
            _hover={{ textDecoration: "underline" }}
            fontSize="sm"
          >
            About Us
          </Link>
        </Stack>

        <Text pt={4} fontSize="xs" textAlign="center">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}
