import React, { useState } from 'react';
import AddBlogPostForm from '../components/AddBlogPostForm';
import { Box, Container, VStack, Heading, Text, Image, Button, useColorModeValue } from "@chakra-ui/react";
import { FaEdit, FaHeart, FaTrash } from "react-icons/fa";

const BlogPost = ({ title, content, imageUrl, onDelete }) => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("gray.800", "white");
  return (
    <Box bg={bg} p={5} borderRadius="md" boxShadow="md" mb={5}>
      <Heading size="md" mb={2} color={color}>{title}</Heading>
      {imageUrl && <Image src={imageUrl} alt={title} mb={3} borderRadius="md" />}
      <Text mb={3} color={color}>{content}</Text>
      <Button leftIcon={<FaHeart />} colorScheme="pink" size="sm" mr={2}>
        Like
      </Button>
      <Button leftIcon={<FaEdit />} colorScheme="teal" size="sm">
        Comment
      </Button>
    <Button leftIcon={<FaTrash />} colorScheme="red" size="sm" onClick={onDelete}>
        Delete
      </Button>
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

  const handleDeletePost = (index) => {
    setBlogPosts(blogPosts.filter((_, i) => i !== index));
  };

  const bgColor = useColorModeValue("gray.50", "gray.900");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.md" py={10} bg={bgColor} minH="100vh">
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center" color={color}>My Personal Blog</Heading>
        <AddBlogPostForm onAddPost={handleAddPost} />
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} onDelete={() => handleDeletePost(index)} />
        ))}
      </VStack>
    </Container>
  );
};

export default Index;