import { Flex, VStack, Text, Box} from '@chakra-ui/react';
import SuggestedHeader from './SuggestedHeader';
import SuggestedUser from './SuggestedUser';

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />

        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested for you
            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover = {{color: "gray.400"}} cursor={"pointer"}>
                See All
            </Text>

        </Flex>

        <SuggestedUser name={"Anubhav Sultania"} follower={"146"} avatar={'./img1.png'}/>
        <SuggestedUser name={"Sanjeev Dash"} follower={"465"} avatar={'./profile.png'}/>
        <SuggestedUser name={"Kuanl Sharma"} follower={"126"} avatar={'./profile.png'}/>
        <SuggestedUser name={"Jyoti Ranjan Mohanty"} follower={"500"} avatar={'/profile.png'}/>

        <Box fontSize = {12} color={"gray.500"} mt ={5} aligSelf={"start"}>
        © 2024 INSTAGRAM-Clone BY Ayushman
        </Box>
    </VStack>

  );
};

export default SuggestedUsers;