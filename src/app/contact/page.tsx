"use client"; // This makes the component a Client Component

import React, { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  Button,
  useToast,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import emailjs from "emailjs-com";
import PageTransition from "../components/PageTransition";

const Contact: React.FC = () => {

  const toast = useToast();

  const bgColor = useColorModeValue("gray.50", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");
  const headingColor = useColorModeValue("purple.600", "purple.400");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      "service_gmail",
      "template_w9toaoe",
      formData,
      "zlWnborlDCelY529v"
    )
    .then((result) => {
      console.log(result.text);
      toast({
        title: "Email sent.",
        description: "Your email has been sent successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.log(error.text);
      toast({
        title: "Error.",
        description: "An error occurred while sending your email.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <PageTransition>
    <Box p={8}bg={bgColor} minH="100vh" color={textColor} borderRadius="lg">
      <Container maxW="container.xl" as="section" id="contact" >
        <VStack spacing={8} align="stretch" maxW="container.md" mx="auto">
          <VStack spacing={2} align="center">
              <Heading 
                as="h2" 
                size="xl" 
                textAlign="center"
                color={headingColor}
                >
              Contact Me
              </Heading>
              <Text textAlign="center">
              Feel free to reach out to me for any inquiries or opportunities.
              </Text>
          </VStack>

          <Box as= "form" onSubmit={handleSubmit} px={4}>
              <VStack spacing={4}>
                  <FormControl id="name" isRequired>
                      <FormLabel>Name</FormLabel>
                      <Input
                          name="name"
                          placeholder="Your Name" 
                          value={formData.name}
                          onChange={handleChange}
                      />
                      </FormControl>
                      <FormControl id="email" isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input
                          placeholder="Your Email" 
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                      />
                      </FormControl>
                      <FormControl id="message" isRequired>
                      <FormLabel>Message</FormLabel>
                      <Textarea
                          placeholder="Your Message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                      />
                      </FormControl>
                  <Button type="submit" colorScheme="purple" width="full">
                  Send Message
                  </Button>
              </VStack>
          </Box>

          {/* FAQ Section */}
          <Accordion allowToggle py={8}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    What are your working hours?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                I'm generally available Monday to Friday, 9 AM to 5 PM EST. However, I'm flexible and can accommodate different time zones if needed.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    What's your typical response time?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                I aim to respond to all inquiries within 24-48 hours during business days.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

        </VStack>
      </Container>
    </Box>
    </PageTransition>
  );
};

export default Contact;