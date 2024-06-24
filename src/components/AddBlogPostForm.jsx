import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, useToast } from "@chakra-ui/react";

const AddBlogPostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      toast({
        title: "Error",
        description: "Title and content are required",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    onAddPost({ title, content, imageUrl });
    setTitle('');
    setContent('');
    setImageUrl('');
    toast({
      title: "Success",
      description: "Blog post added successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} bg="white" p={5} borderRadius="md" boxShadow="md">
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter post title" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Content</FormLabel>
          <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter post content" />
        </FormControl>
        <FormControl>
          <FormLabel>Image URL (optional)</FormLabel>
          <Input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Enter image URL" />
        </FormControl>
        <Button type="submit" colorScheme="blue">Add Post</Button>
      </VStack>
    </Box>
  );
};

export default AddBlogPostForm;