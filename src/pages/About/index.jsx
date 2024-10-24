import { Box, Container, Heading, Text, Stack } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AboutUs() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <Box mt={10} minH="100vh" py={10}>
      <Container maxW="container.md" centerContent>
        <Heading as="h1" size="2xl" mb={6} color="#E1E6F0" textAlign="center">
          About Us
        </Heading>
        <Stack spacing={8} textAlign="center" px={4}>
          <Text fontSize={{ base: "md", md: "lg" }} color="black">
            Net-X Systems offers sales, installation, warranty, and
            post-warranty service of CCTV, fire alarm, signaling systems, access
            control systems, intercoms, barriers, WiFi coverage, fiber optic
            networks, and other systems.
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }} color="black">
            As a result of long-term and skilled work, we cooperate with the
            Ministry of Emergency Situations of the Republic of Armenia, Yerevan
            Municipality, Arabkir Administrative District, VESTA, GRAND RESORT
            JERMUK, RIVER ENERGY &lt;&lt;HPP&gt;&gt;, JUSK, HARMAN, and other
            organizations. Net-X Systems is the official representative of the
            GENATA, Tiandy, DNAKE, and NAVIGARD brands in Armenia and
            collaborates with world-renowned brands like ZKTeco, AJAX, SUPREMA,
            JT-COM, CISCO, MikroTik, Ubiquiti, RUBEZH, and more.
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }} color="black">
            Our team's goal is to provide guaranteed security for our customers.
          </Text>

          <Box width="100%" maxW={{ base: "90%", md: "600px" }} mx="auto">
            <Slider {...sliderSettings}>
              <Box>
                <img
                  src="/about/IMG_1692.jpg"
                  alt="Our Team 1"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                    width: "100%",
                  }}
                />
              </Box>
              <Box>
                <img
                  src="/about/IMG_1693.jpg"
                  alt="Our Team 2"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                    width: "100%",
                  }}
                />
              </Box>
              <Box>
                <img
                  src="/about/IMG_1700.jpg"
                  alt="Our Team 3"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                    width: "100%",
                  }}
                />
              </Box>
            </Slider>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
