"use client"; // This makes the component a Client Component

import { Box, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from 'next/navigation';
import React from "react";

const Navbar = () => {
	const pathname = usePathname();

	const bgColor = useColorModeValue("gray.200", "gray.900");
	const textColor = useColorModeValue("gray.800", "white");
	const activeColor = useColorModeValue("purple.600", "purple.400");
	const hoverColor = useColorModeValue("purple.500", "purple.300");

	// Function to check if the link is active
	const isActive = (href: string): boolean => pathname === href;

	return (
		<Box as="nav" 
			bg={bgColor}
			p={4} 
			boxShadow="md"
			borderRadius="lg"
		>
			<HStack spacing={8} justify="center">
				{[
					{ href: "/", label: "About" },
					{ href: "/resume", label: "Resume" },
					{ href: "/portfolio", label: "Portfolio" },
					{ href: "/contact", label: "Contact" },
				].map(({ href, label }) => (
					<NextLink key={href} href={href} passHref>
						<Text 
							color={isActive(href) ? activeColor : textColor}
							fontWeight={isActive(href) ? "bold" : "normal"}
							_hover={{ color: hoverColor }}
						>
							{label}
						</Text>
					</NextLink>
				))}
			</HStack>
		</Box>
	);
};

export default Navbar;
