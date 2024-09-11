"use client"; // This makes the component a Client Component

import React, { useState, useEffect } from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Badge,
  Link,
  Button,
  Spinner,
  useColorModeValue,
  Select,
  HStack,
  Container,
} from '@chakra-ui/react';
import { FaGithub, FaCalendar } from 'react-icons/fa';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  updated_at: string;
}

const Portfolio: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const cardBg = useColorModeValue('white', 'gray.700');
  const cardHoverBg = useColorModeValue('gray.100', 'gray.600');
  const bgColor = useColorModeValue("gray.50", "gray.700");
  const headingColor = useColorModeValue("purple.600", "purple.400");

  useEffect(() => {
    fetchRepositories();
  }, []);

  const fetchRepositories = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.github.com/users/wsucklal/repos?sort=updated&per_page=100');
      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }
      const data = await response.json();
      setRepositories(data);
    } catch (err) {
      setError('Failed to fetch repositories. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const filteredRepositories = repositories.filter(repo => 
    filter === 'all' || repo.language?.toLowerCase() === filter
  );

  const languages = ['all', ...Array.from(new Set(repositories.map(repo => repo.language?.toLowerCase()).filter(Boolean)))];

  const indexOfLastRepo = currentPage * itemsPerPage;
  const indexOfFirstRepo = indexOfLastRepo - itemsPerPage;
  const currentRepos = filteredRepositories.slice(indexOfFirstRepo, indexOfLastRepo);
  const totalPages = Math.ceil(filteredRepositories.length / itemsPerPage);

  if (isLoading) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" />
        <Text mt={4}>Loading projects...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" py={10}>
        <Text color="red.500">{error}</Text>
      </Box>
    );
  }

  return (
    <Box bg={bgColor} minH="100vh"  margin="auto" p={5} borderRadius="lg">
      <Container maxW="container.xl" maxWidth="1200px" as="section" id="portfolio">
      <VStack spacing={8} align="stretch">
        <Heading 
        as="h2" 
        size="xl" 
        textAlign="center"
        color={headingColor}>
          My Projects
        </Heading>

        <Select value={filter} onChange={(e) => setFilter(e.target.value)} maxWidth="200px" alignSelf="flex-end">
          {languages.map(lang => (
            <option key={lang} value={lang}>{lang ? lang.charAt(0).toUpperCase() + lang.slice(1) : 'All'}</option>
          ))}
        </Select>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {currentRepos.map((repo) => (
            <Box
              key={repo.id}
              borderWidth="1px"
              borderRadius="lg"
              p={5}
              bg={cardBg}
              _hover={{ bg: cardHoverBg }}
              transition="all 0.3s"
            >
              <VStack align="start" spacing={3}>
                <Heading as="h3" size="md">
                  {repo.name}
                </Heading>
                <Text fontSize="sm">{repo.description}</Text>
                {repo.language && <Badge colorScheme="purple">{repo.language}</Badge>}
                <Text fontSize="xs" color="gray.500">
                  <FaCalendar style={{ display: 'inline', marginRight: '5px' }} />
                  Last updated: {new Date(repo.updated_at).toLocaleDateString()}
                </Text>
                <Link href={repo.html_url} isExternal>
                  <Button leftIcon={<FaGithub />} size="sm">
                    View on GitHub
                  </Button>
                </Link>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        <HStack justifyContent="center" mt={4}>
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              colorScheme={currentPage === i + 1 ? "purple" : "gray"}
            >
              {i + 1}
            </Button>
          ))}
        </HStack>
      </VStack>
      </Container>
    </Box>
  );
};

export default Portfolio;
