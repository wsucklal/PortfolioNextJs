"use client"; // This makes the component a Client Component

import React, { useState } from 'react';
import { Box, VStack, Heading, Text, Icon, Progress, Tooltip, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface FlippingCardProps {
  icon: React.ElementType;
  title: string;
  level: number;
  shortDescription: string;
  longDescription: string;
}

const FlippingCard: React.FC<FlippingCardProps> = ({ icon, title, level, shortDescription, longDescription }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const cardBgColor = useColorModeValue("white", "gray.600");
  const cardTextColor = useColorModeValue("gray.800", "white");
  const cardAccentColor = useColorModeValue("purple.500", "purple.300");

  return (
    <Box
      onClick={handleClick}
      cursor="pointer"
      height="200px"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.4s',
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        <Box
          position="absolute"
          width="100%"
          height="100%"
          style={{ backfaceVisibility: "hidden" }}
          bg={cardBgColor}
          color={cardTextColor}
          borderRadius="md"
          p={4}
          boxShadow="md"
        >
          <Tooltip label="Flip me to see more!" aria-label="Flip me to see more!" aria-describedby="Flip me to see more!" fontSize="md">
            <VStack spacing={3} height="100%" justifyContent="space-between">
              <Icon as={icon} boxSize={10} color={cardAccentColor} />
              <Heading as="h4" size="md" color={cardTextColor}>{title}</Heading>
              <Text color={cardAccentColor} fontSize="sm" textAlign="center">{shortDescription}</Text>
              <Progress value={level} colorScheme="purple" size="sm" width="80%" borderRadius="full" />
              <Text fontSize="xs" color={cardTextColor}>Level {level}</Text>
            </VStack>
          </Tooltip>
        </Box>
        <Box
          position="absolute"
          width="100%"
          height="100%"
          style={{ backfaceVisibility: "hidden" }}
          bg={cardBgColor}
          color={cardTextColor}
          borderRadius="md"
          p={4}
          transform="rotateY(180deg)"
          boxShadow="md"
        >
          <VStack spacing={3} justifyContent="center" height="100%">
            <Text fontSize="sm" textAlign="center">{longDescription}</Text>
          </VStack>
        </Box>
      </motion.div>
    </Box>
  );
};

export default FlippingCard;