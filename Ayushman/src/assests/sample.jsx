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
    },
    {
        icon: <Avatar size = {"sm"} name ="Ayushman Saxena" src = "/profilepic.png" />,
        text: "Profile",
        link: "/asaprogrammer",
    },
];


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
      w={"full"}
      >
        {item.icon}
        <Box display={{base: "none", md: "block"}}>
            {item.text}

        </Box>
      </Link>
    </Tooltip>
))}

</Flex>