import { Container, Text, VStack, Heading, Box, List, ListItem, ListIcon, Button } from "@chakra-ui/react";
import { FaCheckCircle, FaLanguage, FaFilePdf, FaFileWord, FaTable, FaUserCheck, FaShieldAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" p={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          AI-Powered PDF to Word Conversion
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Accurate conversion with a focus on Lao language support and layout preservation.
        </Text>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg">
            Project Goal
          </Heading>
          <Text mt={4}>Develop an AI system that converts PDF documents to editable Word format, ensuring high accuracy and layout preservation, with specialized support for the Lao language.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg">
            Technical Specifications
          </Heading>
          <List spacing={3} mt={4}>
            <ListItem>
              <ListIcon as={FaFilePdf} color="green.500" />
              Input: PDF documents (text-based, scanned images, or a combination)
            </ListItem>
            <ListItem>
              <ListIcon as={FaFileWord} color="green.500" />
              Output: Editable Word (.docx) documents
            </ListItem>
            <ListItem>
              <ListIcon as={FaLanguage} color="green.500" />
              OCR Engine: Deep learning-based OCR for Lao character recognition
            </ListItem>
            <ListItem>
              <ListIcon as={FaTable} color="green.500" />
              Layout Preservation: Maintain original PDF layout in the Word file
            </ListItem>
          </List>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg">
            Success Criteria
          </Heading>
          <List spacing={3} mt={4}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              High accuracy in Lao text conversion
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Original layout and formatting are well-preserved
            </ListItem>
            <ListItem>
              <ListIcon as={FaUserCheck} color="green.500" />
              User-friendly interface and reliable performance
            </ListItem>
          </List>
        </Box>
        <Button leftIcon={<FaShieldAlt />} colorScheme="teal" variant="solid">
          Learn More About Data Security
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
