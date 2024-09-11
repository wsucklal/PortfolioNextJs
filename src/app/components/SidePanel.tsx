"use client"; // This makes the component a Client Component

// components/SidePanel.tsx
import React from 'react';
import {
  Box,
  Image,
  Text,
  Badge,
  Divider,
  VStack,
  HStack,
  Icon,
  Link,
  useColorModeValue,
  Tooltip,
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import { MdEmail, MdPhone, MdCake, MdLocationOn } from 'react-icons/md';
import ColorModeSwitcher from './ColorModeSwitcher'; // Import the ColorModeSwitcher

const SidePanel: React.FC = () => {
  const iconSizing: number = 8;
  const hStackSpacing: number = 4;
  const hstackMinWidth: string = "280px";

  const bgColor = useColorModeValue("gray.50", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("purple.600", "purple.400");
  const dividerColor = useColorModeValue("gray.200", "gray.600");
  const hstackBgColor = useColorModeValue("white", "gray.600");

  return (
    <Box 
      p={4} 
      bg={bgColor}
      color={textColor}
      height="100%" 
      width="full" 
      borderRadius="lg"
      overflowY="auto"
    >
    <Tooltip label="Change display" aria-label="Flip me to see more!" aria-describedby="Flip me to see more!" fontSize="sm">
    <Box textAlign="right" mb={4}>
        <ColorModeSwitcher />
      </Box>
    </Tooltip>


      <VStack p={10} spacing={4} align="center">
        <Image
          borderRadius="full"
          border="4px solid"
          borderColor={accentColor}
          boxSize="120px"
          src="https://media.licdn.com/dms/image/v2/C5603AQFgU7JukkXBbw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1609145713918?e=1730332800&v=beta&t=kdAM66bil_1ZDWm369YAMdiwwlCRBwPk8hsPWSwfh_4"
          alt="Profile Picture"
          boxShadow="lg"
        />

        <Text fontSize="x-large" fontWeight="bold">Warren Sucklal</Text>

        <Badge padding={2} borderRadius="full" colorScheme="purple">Software Engineer</Badge>

        <Divider my={4} borderColor={dividerColor} />

        <VStack spacing={8} align="start">
          <HStack 
            spacing={hStackSpacing}
            align="stretch"
            flex="1"
            minWidth={hstackMinWidth}
            boxShadow="lg"
            borderRadius="lg"
            p={2}
            bg={hstackBgColor}
          >
            <Icon as={MdEmail} boxSize={iconSizing} flexShrink={0} alignSelf="center" color={accentColor} />
            <Divider orientation="vertical" height="auto" borderColor={dividerColor} />
            <VStack align="start" spacing={.5} flex="1">
              <Text color={accentColor} fontWeight="bold">Email:</Text>
              <Text isTruncated>warrensucklal@gmail.com</Text>
            </VStack>
          </HStack>
          <HStack 
            spacing={hStackSpacing}
            align="stretch"
            flex="1"
            minWidth={hstackMinWidth}
            boxShadow="lg"
            borderRadius="lg"
            p={2}
            bg={useColorModeValue("white", "gray.600")}
          >
            <Icon as={MdPhone} boxSize={iconSizing} flexShrink={0} alignSelf="center" color={accentColor} />
            <Divider orientation="vertical" height="auto" borderColor={dividerColor} />
            <VStack align="start" spacing={.5} flex="1">
              <Text color={accentColor} fontWeight="bold">Phone:</Text>
              <Text>(416) 919-8478</Text>
            </VStack>
          </HStack>
          <HStack 
            spacing={hStackSpacing}
            align="stretch"
            flex="1"
            minWidth={hstackMinWidth}
            boxShadow="lg"
            borderRadius="lg"
            p={2}
            bg={useColorModeValue("white", "gray.600")}
          >
            <Icon as={MdCake} boxSize={iconSizing} flexShrink={0} alignSelf="center" color={accentColor} />
            <Divider orientation="vertical" height="auto" borderColor={dividerColor} />
            <VStack align="start" spacing={.5} flex="1">
              <Text color={accentColor} fontWeight="bold">Birthday:</Text>
              <Text>Feb 10, 2001</Text>
            </VStack>
          </HStack>
          <HStack 
            spacing={hStackSpacing}
            align="stretch"
            flex="1"
            minWidth={hstackMinWidth}
            boxShadow="lg"
            borderRadius="lg"
            p={2}
            bg={useColorModeValue("white", "gray.600")}
          >
            <Icon as={MdLocationOn} boxSize={iconSizing} flexShrink={0} alignSelf="center" color={accentColor} />
            <Divider orientation="vertical" height="auto" borderColor={dividerColor} />
            <VStack align="start" spacing={.5} flex="1">
              <Text color={accentColor} fontWeight="bold">Location:</Text>
              <Text>Toronto, Canada</Text>
            </VStack>
          </HStack>
        </VStack>

        <HStack spacing={4} mt={4}>
          <Link href="https://www.linkedin.com/in/warren-sucklal/" isExternal>
            <Icon as={FaLinkedin} boxSize={6} color={accentColor} />
          </Link>
          <Link href="https://github.com/wsucklal" isExternal>
            <Icon as={FaGithub} boxSize={6} color={accentColor} />
          </Link>
          <Link href="https://medium.com/@warrensucklal" isExternal>
            <Icon as={FaMedium} boxSize={6} color={accentColor} />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default SidePanel;
