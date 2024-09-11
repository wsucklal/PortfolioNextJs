"use client";

import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./NavBar";
import SidePanel from "./SidePanel";

function ClientLayout({ children }: { children: React.ReactNode }) {
  const sidebarWidth = useBreakpointValue({ base: '100%', md: '360px' });

  return (
    <Flex direction={{ base: 'column', md: 'row' }} minHeight="100vh" margin={4} gap={4}>
      <Box
        as="aside"
        width={sidebarWidth}
        bg="gray.800"
        color="white"
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
        bg="gray.700"        
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