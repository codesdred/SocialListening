import React, { useEffect, useState } from 'react'
import { Container, Divider, VStack, Flex, Skeleton, SkeletonCircle, Box} from '@chakra-ui/react';
import FeedPost  from './FeedPost';

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 200)
  }, [])
    return (
    <Container maxW={"container.sm"} py={10} px={2}>
    {isLoading && [0, 1, 2, 3].map((_,idx) =>(
      <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
        <Flex gap={2}>
        <SkeletonCircle size={10}/>
        <VStack gap={2} alignItems={"flex-start"}>
          <Skeleton height={"10px"} w={"200px"}/>


        </VStack>

        </Flex>
        <Skeleton w={"full"}>
            <Box height={"500px"}>Container wrapped</Box>
        </Skeleton>

      </VStack>
    ))}
      {!isLoading && (
        <>
        <FeedPost img='/ayush1.jpg' username='ayushmansaxena17' avatar='/profile.jpg'/>
        <FeedPost img='/img2.png' username='josh2005' avatar='/img2.png'/>
        <FeedPost img='/img3.png' username='linda' avatar='/img3.png'/>
        <FeedPost img='/krishna.jpg' username='jets_psd4' avatar='/img4.png'/>
        <FeedPost img='/profile.jpg' username='ayush2005' avatar='/ayush1.jpg'/>
        
        </>
      )} 

    </Container>

  );
};

export default FeedPosts;
