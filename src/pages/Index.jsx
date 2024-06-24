import React, { useState } from 'react';
import AddBlogPostForm from '../components/AddBlogPostForm';
import { Box, Container, VStack, Heading, Text, Image, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} position="fixed" top="4" right="4">
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

const BlogPost = ({ title, content, imageUrl }) => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("gray.800", "white");
  return (
    <Box bg={bg} color={color} p={5} borderRadius="md" boxShadow="md" mb={5}>
      <Heading size="md" mb={2}>{title}</Heading>
      {imageUrl && <Image src={imageUrl} alt={title} mb={3} borderRadius="md" />}
      <Text mb={3}>{content}</Text>
    </Box>
  );
};

const Index = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      title: "My First Blog Post",
      content: "Welcome to my personal blog! Here, I'll be sharing my thoughts, experiences, and insights on various topics. Stay tuned for more content!",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
    },
    {
      title: "The Joy of Coding",
      content: "Coding is not just about writing lines of text; it's about solving problems and creating something new. It's a skill that combines logic, creativity, and continuous learning.",
      imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ]);

  const handleAddPost = (newPost) => {
    setBlogPosts([newPost, ...blogPosts]);
  };

  const bgColor = useColorModeValue("gray.50", "gray.900");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.md" py={10} bg={bgColor} minH="100vh">
      <ColorModeToggle />
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center" color={color}>My Personal Blog</Heading>
        <AddBlogPostForm onAddPost={handleAddPost} />
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </VStack>
    </Container>
  );
};

export default Index;