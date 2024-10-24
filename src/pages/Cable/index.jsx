import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, Heading, Image, Link, Flex, Tooltip } from '@chakra-ui/react';
import products from './productData';

const Products = () => {
  return (
    <Box py={10} mt={50}>
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
              <Heading as="h2" size="md" mb={4} textAlign="center" noOfLines={2}>
                {product.name}
              </Heading>
              <Box textAlign="center">
                <Link href={`tel:${product.phone}`}>
                  <Tooltip label={product.description} placement="top" hasArrow bg="gray.300" color="black">
                    <Image
                      src={product.images[0]}
                      alt={`${product.name} Image`}
                      objectFit="contain"
                      borderRadius="md"
                      maxH="150px"
                      mx="auto"
                      _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
                    />
                  </Tooltip>
                </Link>
              </Box>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Products;
