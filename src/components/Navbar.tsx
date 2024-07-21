import React from "react";
import {
  Box,
  Flex,
  Button,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { COLORS } from "../Colors/color";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

interface LinkItem {
  to: string;
  label: string;
}

const links: LinkItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/login", label: "Login" },
];

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const MotionBox = motion(Box);
  const MotionFlex = motion(Flex);

  return (
    <Box>
      <MotionBox
        pos="fixed"
        top="0"
        left="0"
        width="100%"
        bg={COLORS.naviBlue}
        h="5rem"
        boxShadow="lg"
        zIndex="10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          height="100%"
          px="2rem"
        >
          <Button variant="outline" color={COLORS.bgWhite}>Logo</Button>
          <Flex display={{ base: "none", md: "flex" }}>
            {links.map((link) => (
              <Link to={link.to} key={link.to}>
                <Button variant="ghost" color={COLORS.bgWhite}>
                  {link.label}
                </Button>
              </Link>
            ))}
          </Flex>
          <IconButton
            display={{ base: "block", md: "none" }}
            ref={btnRef}
            onClick={onOpen}
            fontSize="25px"
            icon={<RxHamburgerMenu />}
            aria-label="Open menu"
            bg={COLORS.naviBlue}
            color="white"
            pl="0.5rem"
          />
        </Flex>
      </MotionBox>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <MotionFlex
              flexDir="column"
              fontWeight="bold"
              pt="3rem"
              gap="12px"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {links.map((link) => (
                <Link to={link.to} key={link.to}>
                  <Box textAlign="center" p="0.5rem" borderBottom="2px solid red">
                    {link.label}
                  </Box>
                </Link>
              ))}
            </MotionFlex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export { Navbar };
