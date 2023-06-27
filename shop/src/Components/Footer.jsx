import {
  Box,
  Flex,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaAngleRight,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <Box as="footer" py="10" bg="white">  
      <SimpleGrid columns={[1, 2, 3]} w="90%" m="auto">
        <Box px={4}>
          <Heading
            w="50%"
            borderBottom={"2px solid #f28524"}
            as="h3"
            fontSize="xl"
            mb={4}
          >
            Get In Touch
          </Heading>
          <Text>Address: 514 S. Magnolia St. Orlando, FL 32806, USA</Text>
          <Text>Phone: 453876234</Text>
          <Text>Email: demoemail123@gmail.com</Text>
          <Text>Monday-Friday: 9:27 PM - 9:27 PM</Text>
          <Text>Saturday: 9:27 PM - 9:27 PM</Text>
          <Flex mt={4}>
            <IconButton
              as="a"
              href="https://www.facebook.com"
              target="_blank"
              bg="#f28524"
              aria-label="Facebook"
              icon={<FaFacebook />}
              size="md"
              colorScheme="blue"
              mr={2}
            />
            <IconButton
              as="a"
              href="https://www.youtube.com"
              target="_blank"
              bg="#f28524"
              aria-label="YouTube"
              icon={<FaYoutube />}
              size="md"
              colorScheme="red"
              mr={2}
            />
            <IconButton
              as="a"
              bg="#f28524"
              href="https://www.twitter.com"
              target="_blank"
              aria-label="Twitter"
              icon={<FaTwitter />}
              size="md"
              colorScheme="twitter"
              mr={2}
            />
            <IconButton
              as="a"
              href="https://www.linkedin.com"
              bg="#f28524"
              target="_blank"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              size="md"
              colorScheme="linkedin"
            />
          </Flex>
        </Box>
        <Box px={4}>
          <Heading
            as="h3"
            w="50%"
            borderBottom={"2px solid #f28524"}
            fontSize="xl"
            mb={4}
          >
            Useful Links
          </Heading>
          <UnorderedList listStyleType="none" pl={0}>
            <Flex>
              <Text color={"gray"} mt="4px">
                {<FaAngleRight />}
              </Text>
              <ListItem>Faq</ListItem>
            </Flex>
            <Flex>
              <Text color={"gray"} mt="4px">
                {<FaAngleRight />}
              </Text>
              <ListItem>About Us</ListItem>
            </Flex>
            <Flex>
              <Text color={"gray"} mt="4px">
                {<FaAngleRight />}
              </Text>
              <ListItem>Privacy Policy</ListItem>
            </Flex>
            <Flex>
              <Text color={"gray"} mt="4px">
                {<FaAngleRight />}
              </Text>
              <ListItem>Terms &amp; Service</ListItem>
            </Flex>
            <Flex>
              <Text color={"gray"} mt="4px">
                {<FaAngleRight />}
              </Text>
              <ListItem>Return Policy</ListItem>
            </Flex>
            <Flex>
              <Text color={"gray"} mt="4px">
                {<FaAngleRight />}
              </Text>
              <ListItem>How It Works</ListItem>
            </Flex>
          </UnorderedList>
        </Box>

        <Box mx="auto" px={4}>
          <Heading
            as="h3"
            w="50%"
            borderBottom={"2px solid #f28524"}
            fontSize="xl"
            mb={4}
          >
            Newsletter
          </Heading>

          <Flex mt={4}>
            <InputGroup border={"1px solid black"} borderRadius={"8px"}>
              <InputLeftElement
                pointerEvents="none"
                children={<FaEnvelope color="gray.300" />}
              />
              <Input type="email" placeholder="Enter your email" />
            </InputGroup>
          </Flex>
          <Button w="100%" bg="#f28524" mt="20px" colorScheme="blue" size="md">
            Subscribe
          </Button>
          <Text mt="10px">
            Subscribe to our Newsletter to receive early discount offers, latest
            news, sales and promo information.
          </Text>
          <Box mt="10px">
            <Image
              src="https://github-production-user-asset-6210df.s3.amazonaws.com/104376252/248861123-1386f0d2-5f80-4ffd-a69f-a269a2cc23d7.png"
              alt="card image"
            />
          </Box>
        </Box>
      </SimpleGrid>

      <Box w="90%" m="auto" borderTop={"1px solid black"} mt="10px" h="30px">
        <Text align={"center"}>OmniMart © All rights reserved.</Text>
      </Box>
    </Box>
  );
}

export default Footer;
