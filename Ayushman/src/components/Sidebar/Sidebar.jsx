import { Box, Flex, Link, Tooltip} from "@chakra-ui/react";
import { Link as RouterLink} from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo } from "../../assests/constants";
import  { AiFillHome } from "react-icons/ai";
import { SearchLogo } from "../../assests/constants";
import { NotificationsLogo } from "../../assests/constants";
import { CreatePostLogo } from "../../assests/constants";
import { Avatar } from "@chakra-ui/react";

import { CiLogout } from "react-icons/ci";


const Sidebar = () => {

    const sidebarItems = [
        {
            icon: <AiFillHome size = {25} />,
            text: "Home",
            link: "/",            
        },

        {
            icon: <SearchLogo />,
            text: "Search",        
        },

        {
            icon: <NotificationsLogo />,
            text: "Notifications",
        },

        {
            icon: <CreatePostLogo />,
            text: "Create",
            link: "/CreatePage",
        },

        {
            icon: <Avatar size = {"sm"} name ="Ayushman Saxena" src = "/profile.png" />,
            text: "Profile",
            link: "/asaprogrammer",
        }

    ];

  return (
    <Box
        height={"100vh"}
        borderRight={"1px solid"}
        borderColor={"whiteAlpha.300"}
        py={8}
        position={"sticky"}
        top={0}
        left={0}
        px={{base:2, md:4}}
    >
    <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
        {/*For desktop*/}
        <Link to = {"/"} as={RouterLink} pl={2} display={{base:"none", md:"block"}} cursor={"pointer"}>
            <InstagramLogo />
        </Link>

        {/*For mobile*/}
        <Link to = {"/"} as={RouterLink} p={2} display={{base:"block", md:"none"}} borderRadius = {6} 
         _hover={
            {
                bg: "whiteAlpha.200"
            }
         }
         w={{base:10}}
         cursor={"pointer"}>
            <InstagramMobileLogo />
        </Link>

      <Flex direction={"column"} gap={5} cursor={"pointer"}>
            {sidebarItems.map((item, index) => (

            <Tooltip
            key={index}
            hasArrow
            label={item.text}
            placement="right"
            ml={1}
            openDelay={500}
            display={{base:"block", md: "none"}}
            >
            <Link 
            display={"flex"}
            to = {item.link || null}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            _hover={{bg:"whiteAlpha.400"}}
            borderRadius={6}
            p={2}
            w={{base:10, md: "full"}}
            justifyContent={{base:"center", md:"flex-start"}}
            >
                {item.icon}
                <Box display={{base: "none", md: "block"}}>
                    {item.text}

                </Box>
            </Link>
            </Tooltip>
            ))}

        </Flex>  

        <Tooltip
            hasArrow
            label={"Logout"}
            placement="right"
            ml={1}
            openDelay={500}
            display={{base:"block", md: "none"}}
            >

            <Link 
            display={"flex"}
            to = {"/auth"}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            _hover={{bg:"whiteAlpha.400"}}
            borderRadius={6}
            p={2}
            w={{base:10, md: "full"}}
            mt={"auto"}
            justifyContent={{base:"center", md:"flex-start"}}
            
            >
                <CiLogout size={25}/>
                <Box display={{base: "none", md: "block"}}>
                    Logout

                </Box>
            </Link>
            </Tooltip>


    </Flex>
    </Box>
  );
}

export default Sidebar;
