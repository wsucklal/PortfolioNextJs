
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
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import { MdEmail, MdPhone, MdCake, MdLocationOn } from 'react-icons/md';

const SidePanel: React.FC = () => {

  const iconSizing:number = 8
  const hStackSpacing:number =  4
  const hstackMinWidth:string = "280px"

  return (
    <Box 
      p={4} 
      bg="gray.700" 
      color="white" 
      height="100%" 
      width="full" 
      borderRadius="lg"
      overflowY="auto" // Ensure overflow is scrollable
    >
      <VStack p={10} spacing={4} align="center">
        {/* Bio Picture */}
        <Image
          borderRadius="full"
          border="4px solid"
          boxSize="120px"
          src="https://media.licdn.com/dms/image/v2/C5603AQFgU7JukkXBbw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1609145713918?e=1730332800&v=beta&t=kdAM66bil_1ZDWm369YAMdiwwlCRBwPk8hsPWSwfh_4"
          alt="Profile Picture"
          boxShadow="lg"  // Add box shadow to the icon
        />

        {/* Profile Name */}
        <Text fontSize="x-large" fontWeight="bold">Warren Sucklal</Text>

        {/* Profession Badge */}
        <Badge padding={2} borderRadius="full" colorScheme="gray">Software Engineer</Badge>

        {/* Divider */}
        <Divider my={4} borderColor="gray.600" />

        {/* Information List */}
        <VStack 
          spacing={8} 
          align="start"
          >
          <HStack 
            spacing={hStackSpacing}
            align="stretch"
            flex="1"
            minWidth={hstackMinWidth}
            boxShadow="lg"  // Add box shadow here
            borderRadius="lg"
            p={2}
            >
            <Icon     
              //border="2px solid"
              //borderRadius="half" 
              as={MdEmail}
              boxSize={iconSizing}
              flexShrink={0}
              alignSelf="center"  // Center the icon vertically
            />
            <Divider 
              orientation="vertical" 
              height="auto" 
              borderColor="gray.600" 
            />
            <VStack 
              align="start" 
              spacing={.5}
              flex="1"
              >
              <Text color="purple.400"fontWeight="bold">Email:</Text>
              <Text isTruncated>warrensucklal@gmail.com</Text>
            </VStack>
          </HStack>
          <HStack 
            spacing={hStackSpacing}
            align="stretch"
            flex="1"
            minWidth={hstackMinWidth}
            boxShadow="lg"  // Add box shadow here
            borderRadius="lg"
            p={2}
            >
            <Icon 
              //border="2px solid"
              //borderRadius="half" 
              as={MdPhone} 
              boxSize={iconSizing}
              flexShrink={0}
              alignSelf="center"  // Center the icon vertically
               />
            <Divider 
              orientation="vertical" 
              height="auto" 
              borderColor="gray.600" 
            />
            <VStack 
              align="start"
              spacing={.5}
              flex="1"
              >
            <Text color="purple.400"fontWeight="bold">Phone:</Text>
            <Text>(416) 919-8478</Text>
            </VStack>
          </HStack>
          <HStack 
            spacing={hStackSpacing}
            align="stretch"
            flex="1"
            minWidth={hstackMinWidth}
            boxShadow="lg"  // Add box shadow here
            borderRadius="lg"
            p={2}
            >
            <Icon 
              as={MdCake} 
              boxSize={iconSizing} 
              flexShrink={0}
              alignSelf="center"  // Center the icon vertically
            />
            <Divider 
              orientation="vertical" 
              height="auto" 
              borderColor="gray.600" 
            />
            <VStack 
              align="start"
              spacing={.5}
              flex="1"
              >
            <Text color="purple.400" fontWeight="bold">Birthday:</Text>
            <Text>Feb 10, 2001</Text>
            </VStack>
          </HStack>
          <HStack 
            spacing={hStackSpacing}
            align="stretch"
            flex="1"
            minWidth={hstackMinWidth}
            boxShadow="lg"  // Add box shadow here
            borderRadius="lg"
            p={2}
            >
            <Icon 
              as={MdLocationOn}
              boxSize={iconSizing}
              flexShrink={0}
              alignSelf="center"  // Center the icon vertically
            />
            <Divider 
              orientation="vertical" 
              height="auto" 
              borderColor="gray.600" 
            />
            <VStack 
              align="start" 
              spacing={.5}
              flex="1"
              >
            <Text color="purple.400" fontWeight="bold">Location:</Text>
            <Text>Toronto, Canada</Text>
            </VStack>
          </HStack>
        </VStack>

        {/* Social Media Links */}
        <HStack spacing={4} mt={4}>
          <Link href="https://www.linkedin.com/in/warren-sucklal/" isExternal>
            <Icon 
              as={FaLinkedin}
              boxSize={6}
             />
          </Link>
          <Link href="https://github.com/wsucklal" isExternal>
            <Icon as={FaGithub} boxSize={6} />
          </Link>
          <Link href="https://medium.com/@warrensucklal" isExternal>
            <Icon as={FaMedium} boxSize={6} />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default SidePanel;
