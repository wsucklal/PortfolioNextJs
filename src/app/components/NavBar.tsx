"use client"; // This makes the component a Client Component

import { Box, HStack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from 'next/navigation';

import React from "react";


const Navbar = () => {

    const pathname = usePathname();

      // Function to check if the link is active
    const isActive = (href:string):boolean => { return pathname == href}; 

  return (
    <Box as="nav" 
        bg="gray.600" p={4} 
        boxShadow="md"
        borderRadius="lg"
    >
      <HStack spacing={8} justify="center">
        {/* Nav Links */}
        <NextLink 
            href="/" 
            passHref
            >
                <Text 
                color={isActive("/") ? "purple.400" : "white"}
                fontWeight={isActive("/") ?  "bold" : ""}
                _hover={{ color:"purple.400"}}
                >
                    About
                </Text>
          {/* <ChakraLink color="white" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
            About
          </ChakraLink> */}
        </NextLink>
        <NextLink href="/resume" passHref>
            <Text 
                color={isActive("/resume") ?  "purple.400" : "white"}
                fontWeight={isActive("/resume") ?  "bold" : ""}
                _hover={{color:"purple.400"  }}
                >
                Resume
            </Text>
          {/* <ChakraLink color="white" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
            About
          </ChakraLink> */}
        </NextLink>
        <NextLink href="/portfolio" passHref>
            <Text 
                color={isActive("/portfolio") ?  "purple.400" : "white"}
                fontWeight={isActive("/portfolio") ?  "bold" : ""}
                _hover={{color:"purple.400"  }}
                >
                Portfolio
            </Text>

          {/* <ChakraLink color="white" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
            About
          </ChakraLink> */}
        </NextLink>
        <NextLink href="/contact" passHref>
            <Text 
            color={isActive("/contact") ?  "purple.400" : "white"}
            fontWeight={isActive("/contact") ?  "bold" : ""}
            _hover={{color:"purple.400"  }}
            >
                Contact
            </Text>

          {/* <ChakraLink color="white" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
            About
          </ChakraLink> */}
        </NextLink>
      </HStack>
    </Box>
  );
};

export default Navbar;
