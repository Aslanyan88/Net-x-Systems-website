import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, PhoneIcon } from "@chakra-ui/icons";
import { NavLink as RouterLink } from "react-router-dom";

const NavLink = ({ href, children }) => (
  <Link
    as={RouterLink}
    to={href}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "gray.200",
    }}
  >
    {children}
  </Link>
);

export default function Nav({ links, logo, phone }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={"#E1E6F0"}
      px={5}
      position="fixed"
      top={0}
      width="100%"
      zIndex={1000}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={5} alignItems={"center"}>
          <Box w={100} borderRadius="5%" overflow="hidden">
            {logo}
          </Box>
          <HStack as={"nav"} spacing={5} display={{ base: "none", md: "flex" }}>
            {links.map((link, index) => {
              if (link.options) {
                return (
                  <Menu key={index}>
                    <MenuButton
                      as={Link}
                      cursor="pointer"
                      px={2}
                      py={1}
                      rounded={"md"}
                      _hover={{
                        textDecoration: "none",
                        bg: "gray.200",
                      }}
                    >
                      {link.label}
                    </MenuButton>
                    <MenuList>
                      {link.options.map((option, idx) => (
                        <MenuItem key={idx} as={RouterLink} to={option.href}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                );
              } else {
                return (
                  <NavLink key={index} href={link.href}>
                    {link.label}
                  </NavLink>
                );
              }
            })}
          </HStack>
        </HStack>
        <Link
          href="tel:+12345678900"
          fontSize="sm"
          _hover={{ textDecoration: "underline" }}
        >
          <PhoneIcon />
          {phone}
        </Link>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {links.map((link, index) =>
              link.options ? (
                <Menu key={index}>
                  <MenuButton
                    as={Link}
                    cursor="pointer"
                    px={2}
                    py={1}
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                      bg: "gray.200",
                    }}
                  >
                    {link.label}
                  </MenuButton>
                  <MenuList>
                    {link.options.map((option, idx) => (
                      <MenuItem key={idx} as={RouterLink} to={option.href}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              ) : (
                <NavLink key={index} href={link.href}>
                  {link.label}
                </NavLink>
              )
            )}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
