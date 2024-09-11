"use client";

import { Box, Flex, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./NavBar";
import SidePanel from "./SidePanel";

function ClientLayout({ children }: { children: React.ReactNode }) {
  const sidebarWidth = useBreakpointValue({ base: '100%', md: '360px' });
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const mainBgColor = useColorModeValue("white", "gray.700");

  return (
    <Flex direction={{ base: 'column', md: 'row' }} minHeight="100vh" bg={bgColor} margin={4} gap={4}>
      <Box
        as="aside"
        width={sidebarWidth}
        bg={mainBgColor}
        color={useColorModeValue("gray.800", "white")}
        position={{ base: 'static', md: 'sticky' }}
        top={0}
        height="100vh"
        borderRadius="lg"
      >
        <SidePanel/>
      </Box>

      <Box
        as="main"
        flex="1"
        bg={mainBgColor}
        overflow="auto"
        borderRadius="lg"
      >
        <Navbar/>
        {children}
      </Box>
    </Flex>
  );
}

export default ClientLayout;