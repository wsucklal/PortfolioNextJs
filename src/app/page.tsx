"use client"; // This makes the component a Client Component

import React from 'react';
import { Box, Text, VStack, Heading, SimpleGrid, Icon, Flex, Divider, useColorModeValue } from '@chakra-ui/react';
import { FaCode, FaGraduationCap, FaLaptopCode, FaBrain } from 'react-icons/fa';
import { FaBook, FaDumbbell, FaVolleyballBall, FaRunning, FaPodcast, FaGamepad } from 'react-icons/fa';
import FlippingCard from './components/FlippingCard';
import PageTransition from './components/PageTransition';

export default function Home() {
  const bgColor = useColorModeValue("gray.50", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");
  const headingColor = useColorModeValue("purple.600", "purple.400");
  const cardBgColor = useColorModeValue("white", "gray.600");
  const cardTextColor = useColorModeValue("gray.800", "white");
  const cardAccentColor = useColorModeValue("purple.500", "purple.300");
  const dividerColor = useColorModeValue("gray.200", "gray.600");

  return (
    <PageTransition>
    <Box p={8} bg={bgColor} color={textColor} borderRadius="lg">
    <VStack spacing={8} align="stretch">
      <Box>
        <Heading 
          as="h2"
          size="xl"
          mb={4}
          color={headingColor}>
            About Me</Heading>
        <Text>
          Hi, I'm Warren Sucklal, a passionate software engineer based in Toronto, Canada. With a strong foundation in Software Engineering and a keen interest in cutting-edge technologies, I strive to create innovative solutions that make a difference. I thrive on tackling complex problems and collaborating on projects that have a meaningful impact on people's lives, making them better and more convenient. Whether it's optimizing processes, enhancing user experiences, or solving real-world challenges, I am committed to pushing the boundaries of what technology can achieve. My journey in tech has been driven by curiosity and a desire to continuously learn and grow.
        </Text>
      </Box>

      <Box>
        <Heading as="h3" size="lg" mb={4}>What I'm Doing</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {[
            { icon: FaCode, title: "Coding", description: "Developing robust and scalable applications using modern technologies, commonly working with Full Stack Web Development" },
            { icon: FaGraduationCap, title: "Learning", description: "Continuously expanding my knowledge, with particular intrest in AI and machine learning." },
            { icon: FaLaptopCode, title: "Communicating", description: "Sharing ideas clearly, writing thorough documentation, and explaining technical concepts to both developers and non-technical stakeholders" },
            { icon: FaBrain, title: "Problem Solving", description: "Tackling complex challenges with creative solutions, where creativity meets experience." },
          ].map((item, index) => (
            <Flex key={index} align="center" p={4} bg={cardBgColor} borderRadius="md">
              <Icon as={item.icon} boxSize={10} mr={4} color={cardAccentColor} />
              <Box>
                <Heading as="h4" size="md" color={cardAccentColor} mb={2}>{item.title}</Heading>
                <Text fontSize="sm" color={cardTextColor}>{item.description}</Text>
              </Box>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>

      <Divider my={8} borderColor={dividerColor} />

      <Box>
        <Heading 
          as="h3"
          size="lg"
          mb={4}
          color="purple.400">
            Interests
        </Heading>
        <Text mb={6}>
          Beyond my professional pursuits, I try and maintain a balanced lifestyle with various hobbies that keep me energized and inspired. These interests not only provide me with some "me time" but also contribute to my personal growth and creativity.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {[
            { icon: FaBook, title: "Reading", level: 80, shortDescription: "Bookworm Level", longDescription: "I love diving into various genres, from sci-fi to non-fiction and many more! Reading broadens my perspective and fuels my imagination. My favourite book is 'Siddartha' by Hermann Hesse." },
            { icon: FaDumbbell, title: "Working Out", level: 70, shortDescription: "Fitness Enthusiast", longDescription: "Regular exercise keeps me healthy, energized and focused. I enjoy a mix of strength training and cardio workouts. My favourite workout is Chest Day at the gym." },
            { icon: FaVolleyballBall, title: "Volleyball", level: 65, shortDescription: "Team Player", longDescription: "I have been playing volleyball since I was in elementary school. Playing volleyball is not just about the sport, it's about teamwork, and having fun with friends." },
            { icon: FaRunning, title: "Running", level: 75, shortDescription: "Endurance Master", longDescription: "Running helps me clear my mind and stay fit. I try to at least 3k regularly." },
            { icon: FaPodcast, title: "Podcasts", level: 85, shortDescription: "Knowledge Seeker", longDescription: "Podcasts are my go-to for learning on the go. I enjoy a wide range of topics from tech to history." },
            { icon: FaGamepad, title: "Video Games", level: 90, shortDescription: "Digital Adventurer", longDescription: "Gaming is my way to unwind and explore interactive experiences as an art. I enjoy both indie and AAA titles, having played videogames for longer than I can remember." },
          ].map((item, index) => (
            <FlippingCard
              key={index}
              icon={item.icon}
              title={item.title}
              level={item.level}
              shortDescription={item.shortDescription}
              longDescription={item.longDescription}
            />
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  </Box>
  </PageTransition>
  );
}
