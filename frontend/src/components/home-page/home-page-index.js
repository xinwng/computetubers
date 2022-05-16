import {
  Stack,
  HStack,
  Heading,
  Flex,
  Box,
  Center,
  Hstack,
} from "@chakra-ui/react";
import React from "react";
import AboutUs from "./home-page-about-us";
import HomePageTrendingTags from "./home-page-trending-tags";
import HomePageTrendingTitles from "./home-page-trending-titles";

export default function HomePageIndex() {
  return (
    <Flex>
      <Stack>
        <Box mt={15} my={5}>
          <Heading size={"lg"} textAlign="center">
            Home
          </Heading>
        </Box>
        <Box>{/* <HomePageTrendingTags></HomePageTrendingTags> */}</Box>
        <Box>{/* <HomePageTrendingTitles></HomePageTrendingTitles> */}</Box>
        <Box>
          <AboutUs></AboutUs>
        </Box>
      </Stack>
    </Flex>
  );
}
