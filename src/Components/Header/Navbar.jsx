import React from "react";
import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    HStack,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton,
    InputGroup,
    InputLeftElement,
    Input,
    
} from "@chakra-ui/react";
import logo from "../../images/nice-white-logo.png";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom'



const Navbar = () => {
    const bg = useColorModeValue("#131921", "gray.800");
    const mobileNav = useDisclosure();

    return (
        <React.Fragment>
            <chakra.header
                bg={bg}
                w="full"
                px={{ base: 2, sm: 4 }}
                py={4}
                shadow="md"
            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <HStack display="flex" spacing={-1.5} alignItems="center">
                        <Box display={{ base: "inline-flex", md: "none" }}>
                            <IconButton
                                display={{ base: "flex", md: "none" }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color="white"
                                fontWeight="bold"
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />
                            <VStack
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={2}
                                bg={bg}
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    justifySelf="self-start"
                                    onClick={mobileNav.onClose}
                                    color="white"
                                />
                                
                            </VStack>
                        </Box>
                        <Link to="/">
                        <img src={logo} alt="logo" className="logo"/>
                        </Link>

                        <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
                        </HStack>
                 </HStack>
    
                    <HStack
                        spacing={3}
                        display={mobileNav.isOpen ? "none" : "flex"}
                        alignItems="center"
                    >
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<AiOutlineSearch />}
                                color="black"
                                
                                
                            />
                            <Input type="tel" placeholder="Search..." color="gray" bg="white"/>
                        
                        </InputGroup>

                        <chakra.a
                            p={3}
                            color={useColorModeValue("white.800", "inherit")}
                            rounded="lg"
                            
                            _hover={{ color: useColorModeValue("white.800", "white.600") }}
                        >
                            
                        </chakra.a>

                    
                    </HStack>

                    <button className="login_signup_button">Login</button>
                </Flex>
            </chakra.header>
        </React.Fragment>
    );
}


export default Navbar