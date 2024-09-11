"use client"; // This makes the component a Client Component

import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Divider,
  UnorderedList,
  ListItem,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  SimpleGrid,
  Badge,
} from '@chakra-ui/react';

const Resume: React.FC = () => {

const headingColor = useColorModeValue("purple.600", "purple.400");
const dividerColor = useColorModeValue("gray.200", "gray.600");
const bgColor = useColorModeValue("gray.50", "gray.700");
const textColor = useColorModeValue("gray.800", "white");

const skillCategories = {
    'Frontend': ['React', 'Angular', 'React Native', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Next.js'],
    'Backend': ['C#', 'ASP.NET', 'Java', 'SQL', 'Python'],
    'DevOps & Cloud': ['Git', 'Docker', 'Kubernetes', 'GCP', 'Azure'],
    'Other': [ 'JavaFX', 'Unity', 'JIRA'],
};


  return (
    <Box p={8} bg={bgColor} color={textColor} borderRadius="lg">
      <Container maxW="container.xl" as="section" id="resume" pb={4}>
        <VStack spacing={12} align="stretch">
          <Heading 
              as="h2"
              size="2xl"
              textAlign="center"
              mb={2}
              color={headingColor}>
            Resume
          </Heading>

          {/* Education section */}
          <Box>
            <Heading as="h3" size="xl" mb={4} color={headingColor}>
              Education
            </Heading>
            <Box borderLeft="4px solid" borderColor={headingColor} pl={4}>
              <Text fontWeight="bold" fontSize="lg">Western University, London, Ontario</Text>
              <Text fontSize="md" mb={2}>Bachelor of Engineering Science, Software Engineering (BESc) 2019 - 2024</Text>
              <Text fontWeight="bold" mt={4}>Relevant Courses:</Text>
              <Text fontSize="sm">Algorithms and Data Structures, Machine Learning, Theoretical Foundations of Software Engineering, Networking: Principles, Protocols, and Architecture, Web Technologies, Database Management Systems</Text>
            </Box>
          </Box>
          <Divider borderColor={dividerColor} />

          {/* Professional Experience section */}
          <Box>
            <Heading as="h3" size="xl" mb={4} color={headingColor}>
              Professional Experience
            </Heading>
            <VStack align="stretch" spacing={8}>
              {/* PwC Experience */}
              <Box borderLeft="4px solid" borderColor={headingColor} pl={4}>
                <Text fontWeight="bold" fontSize="lg">Price Waterhouse Cooper</Text>
                <Text fontStyle="italic" mb={2}>Software Engineering Intern, May 2022 - Apr 2023</Text>
                <UnorderedList spacing={2}>
                  <ListItem>Engineered client-facing platforms and portfolio reporting tools for multi-million dollar projects, enhancing efficiency and managing key client initiatives</ListItem>
                  <ListItem>Implemented responsive front-end interfaces with TypeScript and Angular by optimizing component lifecycles, refining routing and managing dependencies to deliver high-performance, scalable, and maintainable solutions</ListItem>
                  <ListItem>Constructed back-end functionality in C# by implementing business logic, API endpoints, and serverless functions to achieve seamless integration with robust unit testing, secure user role authentication, and detailed logging</ListItem>
                  <ListItem>Maintained DevOps processes, managing pipelines and Azure functions to meet compliance for business code releases</ListItem>
                </UnorderedList>
              </Box>

              {/* Manulife Experience */}
              <Box borderLeft="4px solid" borderColor={headingColor} pl={4}>
                <Text fontWeight="bold" fontSize="lg">Manulife</Text>
                <Text fontStyle="italic" mb={2}>Co-op Software Developer, Summer 2021</Text>
                <UnorderedList spacing={2}>
                  <ListItem>Developed a website using ASP.NET MVC to collect, display and administer requested business initiatives, facilitating report generation and task delegation for team members</ListItem>
                  <ListItem>Created and optimized an MS SQL database to handle requested business initiatives including designing complex tables, views, and stored procedures</ListItem>
                  <ListItem>Collaborated in an agile environment with daily scrum meetings to translate stakeholder requirements into actionable user stories</ListItem>
                </UnorderedList>
              </Box>

              {/* Western Orientation Program Experience */}
              <Box borderLeft="4px solid" borderColor={headingColor} pl={4}>
                <Text fontWeight="bold" fontSize="lg">Western Orientation Program</Text>
                <Text fontStyle="italic" mb={2}>Engineering Orientation Leader (Soph), Sep 2020 - Apr 2022</Text>
                <UnorderedList spacing={2}>
                  <ListItem>Mentored first-year students throughout the year, providing guidance to ensure their academic and social success</ListItem>
                  <ListItem>Organized review sessions for first-year students by reviewing and teaching concepts to help students' performance</ListItem>
                </UnorderedList>
              </Box>

              {/* Western Engineering Concrete Canoe Association */}
              <Box borderLeft="4px solid" borderColor={headingColor} pl={4}>
                <Text fontWeight="bold" fontSize="lg">Western Engineering Concrete Canoe Association</Text>
                <Text fontStyle="italic" mb={2}>Software Developer Team (Member), Sep 2020 - Apr 2021</Text>
                <UnorderedList spacing={2}>
                  <ListItem>Collaborated with fellow members of the Software Developer Team as a mean stack developer using Angular and Node JS to create a new informational website for the club </ListItem>
                  <ListItem>Implemented structural and stylish elements using Figma, Angular, HTML and CSS to properly configure the website to specified requirements</ListItem>
                </UnorderedList>
              </Box>
            </VStack>
          </Box>
          <Divider borderColor={dividerColor} />

          {/* Skills section */}
          <Box>
            <Heading as="h3" size="xl" mb={6} color={headingColor}>
              Skills
            </Heading>
            <SimpleGrid columns={[1, 2, 4]} spacing={6}>
              {Object.entries(skillCategories).map(([category, skills]) => (
                <Box key={category}>
                  <Heading as="h4" size="md" mb={3}>
                    {category}
                  </Heading>
                  <Wrap spacing={2}>
                    {skills.map((skill) => (
                      <WrapItem key={skill}>
                        <Badge colorScheme="purple" fontSize="sm" px={2} py={1}>
                          {skill}
                        </Badge>
                      </WrapItem>
                    ))}
                  </Wrap>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>

  );
};

export default Resume;
