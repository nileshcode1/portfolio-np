import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import Education from "./Education";
import nileshpic from "../images/nileshpic.jpg";

// "https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png";

export default function Banner() {
  return (
    <Container maxW={"7xl"} alignItems="center" my={5}>
      <Flex
        width={"100%"}
        maxW={["full", "full", "7xl"]}
        justifyContent="center"
        alignItems={"center"}
        flexDir={["column", "column", "row", "row"]}
      >
        <Flex
          width={["md", "md", "2xl"]}
          flexDir={"column"}
          justifyContent="space-between"
          bgColor={"white"}
          color="black"
          maxHeight="2xl"
          minHeight={"4xl"}
          borderRadius="3xl"
          p="10"
          mb={10}
        >
          <Box>
            <Flex alignItems={"center"} justifyContent="center">
              <Image
                borderColor={"gray.100"}
                src={nileshpic}
                width="32"
                rounded={"full"}
              />
            </Flex>

            <Heading textAlign={"center"}>Nilesh Pandey</Heading>

            <Text fontSize={"sm"} textAlign="center">
              Hey, I am a Computer science graduate skilled in Web and Android
              app development
              <Tag mt={1} variant={"solid"}>
                Rajiv Gandhi Institute of Petroleum Technology
              </Tag>
              <Tag mt={1} variant={"solid"}>
                Btech in Computer Science 2020-2024
              </Tag>
            </Text>
            <VStack my={4}>
              <Tag px={5} variant={"subtle"} colorScheme="primary">
                Full Stack Web Developer
              </Tag>
              <Tag px={5} variant={"subtle"} colorScheme="primary">
                App Developer
              </Tag>
            </VStack>
            <Box
              orientation="horizontal"
              bgColor="gray.300"
              my={6}
              height={0.2}
            />
            {/* Icons  */}
            <VStack spacing={6} alignItems="start">
              <HStack>
                <Box me={2}>
                  <IconButton
                    shadow={"md"}
                    variant={"ghost"}
                    border="1px solid"
                    borderColor={"gray.300"}
                  >
                    <FaEnvelope />
                  </IconButton>
                </Box>
                <VStack alignItems={"start"} spacing={0.1}>
                  {/* <Text fontSize={"sm"}>Email</Text>
                    <Text fontWeight={"600"}>nileshpandey0021@gmail.com</Text> */}
                  <a
                    href="mailto:nileshpandey0021@gmail.com"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <Text fontSize={"sm"}>
                      <Text
                        fontWeight={"normal"}
                        _hover={{ color: "blue", cursor: "pointer" }}
                      >
                        Email
                      </Text>
                      <Text
                        fontWeight={"600"}
                        _hover={{ color: "blue", cursor: "pointer" }}
                      >
                        nileshpandey0021@gmail.com
                      </Text>
                    </Text>
                  </a>
                </VStack>
              </HStack>

              {/* <HStack>
                  <Box me={2}>
                    <IconButton
                      shadow={"md"}
                      variant={"ghost"}
                      border="1px solid"
                      borderColor={"gray.300"}
                    >
                      <FaPhone />
                    </IconButton>
                  </Box>
                  <VStack alignItems={"start"} spacing={0.1}>
                    <Text fontSize={"sm"}>Phone</Text>
                    <Text fontWeight={"600"}>princepatelcodes</Text>
                  </VStack>
                </HStack> */}

              <HStack>
                <Box me={2}>
                  <IconButton
                    shadow={"md"}
                    variant={"ghost"}
                    border="1px solid"
                    borderColor={"gray.300"}
                  >
                    <FaGithub />
                  </IconButton>
                </Box>
                <VStack alignItems={"start"} spacing={0.1}>
                  {/* <Text fontSize={"sm"}>Github</Text>
                    <Text fontWeight={"600"}>princepatelcodes</Text> */}
                  <a
                    href="https://github.com/nileshcode1"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <Text fontSize={"sm"}>
                      <Text
                        fontWeight={"normal"}
                        _hover={{ color: "blue", cursor: "pointer" }}
                      >
                        Github
                      </Text>
                      <Text
                        fontWeight={"600"}
                        _hover={{ color: "blue", cursor: "pointer" }}
                      >
                        github.com/nileshcode1
                      </Text>
                    </Text>
                  </a>
                </VStack>
              </HStack>

              <HStack>
                <Box me={2}>
                  <IconButton
                    shadow={"md"}
                    variant={"ghost"}
                    border="1px solid"
                    borderColor={"gray.300"}
                  >
                    <FaLinkedin />
                  </IconButton>
                </Box>
                <VStack alignItems={"start"} spacing={0.1}>
                  {/* <Text fontSize={"sm"}>Linkedin</Text>
                    <Text fontWeight={"600"}>princepatell</Text> */}
                  <a
                    href="https://www.linkedin.com/in/nilesh-pandey-0b7900206/"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <Text fontSize={"sm"}>
                      <Text
                        fontWeight={"normal"}
                        _hover={{ color: "blue", cursor: "pointer" }}
                      >
                        Linkedin
                      </Text>
                      <Text
                        fontWeight={"600"}
                        _hover={{ color: "blue", cursor: "pointer" }}
                      >
                        nileshpandey
                      </Text>
                    </Text>
                  </a>
                </VStack>
              </HStack>

              <HStack>
                <Box me={2}>
                  <IconButton
                    shadow={"md"}
                    variant={"ghost"}
                    border="1px solid"
                    borderColor={"gray.300"}
                  >
                    <FaTwitter />
                  </IconButton>
                </Box>
                <VStack alignItems={"start"} spacing={0.1}>
                  {/* <Text fontSize={"sm"}>Twitter</Text>
                    <Text fontWeight={"600"}>princepatelt</Text> */}
                  <a
                    href="https://twitter.com/nilesh_k_p"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <Text fontSize={"sm"}>
                      <Text
                        fontWeight={"normal"}
                        _hover={{ color: "blue", cursor: "pointer" }}
                      >
                        Twitter
                      </Text>
                      <Text
                        fontWeight={"600"}
                        _hover={{ color: "blue", cursor: "pointer" }}
                      >
                        nilesh_k_p
                      </Text>
                    </Text>
                  </a>
                </VStack>
              </HStack>
            </VStack>
          </Box>

          <ButtonGroup
            justifyContent={"center"}
            alignItems={"center"}
            variant="ghost"
            spacing={1.9}
          >
            <a
              href="https://github.com/nileshcode1"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <IconButton
                _hover={{
                  color: "primary.700",
                  bgColor: "primary.50",
                  border: "1px solid",
                  borderColor: "primary.700",
                }}
              >
                <FaGithub size={24} />
              </IconButton>
            </a>

            <a
              href="https://www.instagram.com/nileshpandey._?igsh=MXYyaWkwNzNlNjl2eA=="
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <IconButton
                _hover={{
                  color: "primary.700",
                  bgColor: "primary.50",
                  border: "1px solid",
                  borderColor: "primary.700",
                }}
              >
                <FaInstagram size={24} />
              </IconButton>
            </a>

            <a
              href="https://twitter.com/nilesh_k_p"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <IconButton
                _hover={{
                  color: "primary.700",
                  bgColor: "primary.50",
                  border: "1px solid",
                  borderColor: "primary.700",
                }}
              >
                <FaTwitter size={24} />
              </IconButton>
            </a>
          </ButtonGroup>
        </Flex>
        <Box
          ms={["0", "0", "8"]}
          flexDir={"column"}
          justifyContent="space-between"
          bgColor={"white"}
          color="black"
          maxHeight="4xl"
          scrollBehavior={"smooth"}
          minHeight={"4xl"}
          borderRadius="3xl"
          p="10"
          mb={10}
        >
          <Heading>Experience</Heading>
          <Education />
        </Box>
      </Flex>
    </Container>
  );
}
