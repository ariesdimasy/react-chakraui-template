import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Menu,
  MenuItem,
  Container,
  Flex,
  Heading,
  Image,
  Center
} from "@chakra-ui/react";

export const App = () => {
  return (
    <Box>
      <Box borderWidth="1px" backgroundColor="#1D5D9B">
        <Container>
          <Menu>
            <Flex>
              <Heading color="white" w="50%">
                {" "}
                Hello{" "}
              </Heading>
              <Box w="50%" color="white">
                <Flex justifyContent="space-evenly">
                  <MenuItem width="30%">
                    <a href="#"> Home </a>
                  </MenuItem>
                  <MenuItem width="30%">
                    <a href="#"> Service </a>
                  </MenuItem>
                </Flex>
              </Box>
            </Flex>
          </Menu>
        </Container>
      </Box>
      <Box>
        <Container>
          <Flex>
            <Box w="50%">
              <Flex></Flex>
            </Box>
            <Box w="50%">
              <Image src="./broadcast.svg" />
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box backgroundColor="#F4D160" padding="20px 0">
        <Container>
          <Center>
            <Heading as="h2" marginBottom="20px" color="#1D5D9B">
              {" "}
              Service{" "}
            </Heading>
          </Center>
          <Flex justifyContent="space-between">
            <Card width="32%">
              <CardHeader backgroundColor="#1D5D9B">
                <Heading as="h4" size="sm" color="white">
                  {" "}
                  Lorem{" "}
                </Heading>
              </CardHeader>
              <Image
                objectFit="cover"
                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Caffe Latte"
              />
              <CardBody>
                <p>Lorem ipsum sit dolor amet</p>
              </CardBody>
            </Card>
            <Card width="32%">
              <CardHeader backgroundColor="#1D5D9B" color="white">
                <Heading as="h4" size="sm">
                  {" "}
                  Lorem{" "}
                </Heading>
              </CardHeader>
              <Image
                objectFit="cover"
                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Caffe Latte"
              />
              <CardBody>
                <p>Lorem ipsum sit dolor amet</p>
              </CardBody>
            </Card>
            <Card width="32%">
              <CardHeader backgroundColor="#1D5D9B" color="white">
                <Heading as="h4" size="sm">
                  {" "}
                  Lorem{" "}
                </Heading>
              </CardHeader>
              <Image
                objectFit="cover"
                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Caffe Latte"
              />
              <CardBody>
                <p>Lorem ipsum sit dolor amet</p>
              </CardBody>
            </Card>
          </Flex>
        </Container>
      </Box>
      <Box></Box>
    </Box>
  );
};
