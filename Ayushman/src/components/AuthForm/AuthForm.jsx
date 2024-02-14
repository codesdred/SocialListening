import { Text, Flex, Button, Box, Image, VStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthForm = () => {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email: '',
        password: '',

    });
    const handleAuth = () =>{
        if(!inputs.email || !inputs.password){
            alert("Fill all the fields");
            return;
        }
        navigate("/");
    };

    return <>
        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <VStack spacing={4}>
                <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagran" />
                <Input 
                    placeholder="Email"
                    fontSize={14}
                    type="email"
                    value={inputs.email}
                    onChange={(e) => setInputs({...inputs,email:e.target.value})}
                />

                <Input 
                    placeholder="Password"
                    fontSize={14}
                    type="Password"
                    value={inputs.password}
                    onChange={(e) => setInputs({...inputs,password:e.target.value})}
                    
                />

                <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={handleAuth}>
                    Log in
                </Button>

                <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                    <Box flex={2} h={"1px"} bg={"gray.400"}/>
                    <Text mx={1} color={"white"}>OR</Text>
                    <Box flex={2} h={"1px"} bg={"gray.400"}/>
                </Flex>
                
                <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
                    <Image src="/google.png" w={5} alt="Google logo" />
                    <Text mx={"2"} color={"blue.500"}>
                        Log in with Google
                    </Text>
                </Flex>
            </VStack>
        </Box>
    </>
}

export default AuthForm;