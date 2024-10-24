import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, Heading, Image, Link, Flex, Tooltip } from '@chakra-ui/react';
import Camera from "../../components/Gifs";
import cameraGif from '/camera.gif';
import products from './productData.js'; 

const Products = () => {
  return (
    <Box py={10} mt={50}>
      <Camera Gif={cameraGif} />
      <Container maxW="6xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          wrap="wrap"
          justify="space-between"
          align="flex-start"
          gap={6}
        >
          {products.map((product, index) => (
            <Box
              key={index}
              mb={10}
              bg="white"
              p={6}
              borderRadius="md"
              boxShadow="lg"
              flexBasis={{ base: '100%', md: 'calc(33.333% - 16px)' }}
              maxW={{ base: '100%', md: 'calc(33.333% - 16px)' }}
              height="400px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              _hover={{ boxShadow: '2xl' }}
            >
              <Heading as="h2" size="lg" mb={6} textAlign="center" noOfLines={2}>
                {product.name}
              </Heading>
              <Box textAlign="center" mb={4}>
                <Tooltip label={product.description} hasArrow bg="gray.300" color="black">
                  <Link href={`tel:${product.phone}`}>
                    <Image
                      src={product.images[0]}
                      alt={`${product.name} Image`}
                      objectFit="contain"
                      borderRadius="md"
                      maxH="150px"
                      mx="auto"
                      _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
                    />
                  </Link>
                </Tooltip>
              </Box>

            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Products;
