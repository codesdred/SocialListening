import { Avatar, Flex, Text } from "@chakra-ui/react";
import { Link, Link as RouterLink} from "react-router-dom";

const SuggestedHeader = () => {
  return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} gap={3}>
            <Flex alignItems={"center"} gap={3}>
            <Avatar name="As a Programmer" size={"lg"} src="/profile.jpg"/>
            <Text>
                ayushmansaxena17
            </Text>
            </Flex>

            <Link
            as={RouterLink}
            to={"/auth"}
            fontSize={"14px"}
            fontWeight={"medium"}
            style={{ color: "#f1f4f7;", cursor: "pointer" }}
            >
                Logout
            </Link>



        </Flex>
  );
};

export default SuggestedHeader;
