import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook,   FaGithub,   FaInstagram,   FaLinkedin,   FaTwitter,  } from 'react-icons/fa'


export const Footer = () => (
  <Container
    maxW={"100%"}
    as="footer"
    role="contentinfo"
    py={{ base: "8", md: "8" }}
    bg="white"
    color={"primary.800"}
  >
    <Stack justify="center" spacing={{ base: "4", md: "5" }}>
      <Stack justify="center" direction="row" align="center">
        <ButtonGroup
          justifyContent={"center"}
          alignItems={"center"}
          variant="ghost"
          spacing={1.9}
        >
          {/* <IconButton _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}><FaFacebook size={24} /></IconButton>
          <IconButton _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}><FaInstagram size={24} /></IconButton>
          <IconButton _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}><FaTwitter size={24} /></IconButton> */}
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
          <a
            href="https://www.linkedin.com/in/nilesh-pandey-0b7900206/"
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
              <FaLinkedin size={24} />
            </IconButton>
          </a>
        </ButtonGroup>
      </Stack>
      <Text
        textAlign={"center"}
        fontSize="20px"
        fontWeight={"bold"}
        color="gray.600"
      >
        Nilesh Pandey
      </Text>
    </Stack>
  </Container>
);