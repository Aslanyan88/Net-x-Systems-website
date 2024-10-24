import { Box, Container, Image, Flex, keyframes, Heading } from "@chakra-ui/react";
import logo1 from '/Partner/ajax.png';
import logo2 from '/Partner/dnake.png';
import logo3 from '/Partner/gopower.png';
import logo4 from '/Partner/logo_01.png';
import logo5 from '/Partner/mikrotik.png';
import logo6 from '/Partner/NRt52.png';
import logo7 from '/Partner/rubezh.png';
import logo8 from '/Partner/tiandy.png';
import logo9 from '/Partner/zkteco.png';

const logos = [
  logo1, logo2,logo3, logo4, logo5, logo6, logo7, logo8,logo9
];


const move = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export default function OurPartners() {
  const animation = `${move} 40s linear infinite`;

  return (
    <Box bg="#E1E6F0" mt={5} py={10}>
      <Container maxW="100vw">
        <Box textAlign="center" mb={8}>
          {/* <Heading as="h1" size="2xl" color="white">
            Our Partners
          </Heading> */}
        </Box>
        <Flex overflow="hidden" alignItems="center" position="relative">
          <Flex
            animation={animation}
            minWidth="350%"
            alignItems="center"
            justifyContent="space-around"
          >
            {[...logos, ...logos].map((logo, index) => (
            <Image
            key={index}
            src={logo}
            alt={`Partner ${index + 1}`}
            mx={{ base: 1, md: 4}} 
            maxW={{ base: "80px", md: "150px" }}
            objectFit="contain"
            borderRadius="5%"
            overflow="hidden"
          />
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
