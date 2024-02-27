import React from "react";
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
  Tag,
} from "@chakra-ui/react";
import ToolTag from "./utils/ToolTag";

const milestones = [
  {
    id: 1,
    date: "2024",
    title: "VichaarDhaara",
    techStack: "Next JS, MongoDB, Docker, Google Auth",
    description: `VichaarDhara is a content-sharing platform, built with Next.js to enhance SEO. It utilizes MongoDB connected through Prisma for database management and Firebase for storing images.`,
    liveLink: "https://vichaar2.vercel.app/",
    codeLink: "https://github.com/nileshcode1/VichaarDhaara",
  },
  {
    id: 2,
    date: "2023",
    title: "Netflix-GPT",
    techStack: "React JS, Redux, Firebase, Tailwind CSS ",
    description: `React app that utilizes GPT for Netflix movie suggestions. It includes features such as user authentication, a browse page, movie suggestions, and a GPT-powered search bar.`,
    liveLink: "https://netflix-gpt.nileshpandey.cloud/",
    codeLink: "https://github.com/nileshcode1/Netflix-GPT",
  },
  {
    id: 3,
    date: "2023",
    title: "PandaTalks",
    techStack: "Flutter, Firebase",
    description:
      "Experience seamless chatting with friends without signup! Create and share room passwords for instant connections, ensuring privacy with encrypted messages. Built with Flutter, PandaTalks delivers a user-friendly interface, fostering secure and spontaneous conversations with your pals. Chat without boundaries! 🌐🗨️",
    liveLink:
      "https://drive.google.com/file/d/1cX9ezLmx_ZW3Vhu88dN14BG947qS7KGs/view",
    codeLink: "https://github.com/nileshcode1/flutter_pandatalks",
  },
  {
    id: 4,
    date: "2022",
    title: "RGIPT CPI-Guru",
    techStack: "React Js, Tailwind CSS",
    description:
      "Simple Utility for RGIPT students helps to calculate their SPI and CPI within seconds, used by almost 500+ students.",
    liveLink: "https://cpi-guru.vercel.app/",
    codeLink: "https://github.com/nileshcode1/cpi-guru",
  },
  {
    id: 5,
    date: "2022",
    title: "SyncDoodle",
    techStack: "Javascript, Socket IO, HTML, CSS",
    description:
      "Developed a website where people can draw doodle with feature to download and add stickers on it. Enabled live drawing sessions with Socket.io, allowing users to draw together instantly.",
    liveLink: "https://syncdoodle.onrender.com/",
    codeLink: "https://github.com/nileshcode1/SyncDoodle",
  },
];

const Projects = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container
      maxWidth="7xl"
      maxHeight={"3xl"}
      overflowX={"auto"}
      p={{ base: 2, sm: 10 }}
      my={2}
      css={{
        "&::-webkit-scrollbar": {
          marginTop: "8px",
          width: "8px",
          height: "8px",
        },
        "&::-webkit-scrollbar-track": {
          marginTop: "8px",
          width: "2px",
          height: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          marginTop: "8px",
          background: "#121212",
          borderRadius: "12px",
        },
      }}
    >
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
};

const Card = ({
  id,
  title,
  description,
  date,
  liveLink,
  codeLink,
  techStack,
}) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 === 0;
  let borderWidthValue = isEvenId ? "15px 15px 15px 0" : "15px 0 15px 15px";
  let leftValue = isEvenId ? "-15px" : "unset";
  let rightValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = "-15px";
    rightValue = "unset";
    borderWidthValue = "15px 15px 15px 0";
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue("gray.300", "gray.800")}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          "#edf2f6",
          "#1a202c"
        )} transparent`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        left: leftValue,
        right: rightValue,
        display: "block",
      }}
    >
      <Box>
        <Text fontSize="md" color={isEvenId ? "primary.800" : "blue.700"}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize="xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <chakra.h1
            fontSize="14"
            lineHeight={1.2}
            fontWeight="semibold"
            w="100%"
          >
            {techStack}
          </chakra.h1>
          <Text fontSize="sm">{description}</Text>
        </VStack>

        <HStack>
          <a href={liveLink} style={{ textDecoration: "none" }}>
            <Tag
              variant={"subtle"}
              backgroundColor={"lightblue"}
              _hover={{ bg: "blue.100" }}
            >
              Live
            </Tag>
          </a>
          <a href={codeLink} style={{ textDecoration: "none" }}>
            <Tag
              variant={"subtle"}
              backgroundColor={"lightblue"}
              _hover={{ bg: "blue.100" }}
            >
              Code
            </Tag>
          </a>
          {/* <Tag variant={"subtle"}>Next JS</Tag>
            <Tag variant={"subtle"}>React JS</Tag> */}
        </HStack>
        {/* 
          <HStack style={{ paddingTop: "10px" }}>
            <Tag variant={"subtle"}>Tailwind CSS</Tag>
            <Tag variant={"subtle"}>MongoDB</Tag>
            <Tag variant={"subtle"}>Prisma</Tag>
          </HStack> */}
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "40px", md: "40px" }}
      ml={{ base: "0", md: "40px" }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("gray.400", "gray.700")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue("primary.800", "gray.200")}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      bg="transparent"
    ></Box>
  );
};

export default Projects;
