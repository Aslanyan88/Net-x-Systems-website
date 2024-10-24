import { useState } from "react";
import OurPartners from "../../components/Partners";
import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  useBreakpointValue,
  Flex,
  Link,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import Tiandy from "../../assets/sliderImages/tiandy.png";
import Navigerd from "../../assets/sliderImages/navigerd.png";
import Switch from "../../assets/sliderImages/switch.png";
import Cat5 from "../../assets/sliderImages/cat5.png";
import Dnake from "../../assets/sliderImages/dnake.png";
import FiberOptic from "../../assets/sliderImages/FiberOptic.png";

const jobs = [
  {
    name: "Job 1",
    images: [
      "/src/assets/jobs/job1/image1.png",
      "/src/assets/jobs/job1/image2.png",
      "/src/assets/jobs/job1/image3.png",
    ],
  },
  {
    name: "Job 2",
    images: [
      "/src/assets/jobs/job2/image1.png",
      "/src/assets/jobs/job2/image2.png",
      "/src/assets/jobs/job2/image3.png",
    ],
  },
  {
    name: "Job 3",
    images: [
      "/src/assets/jobs/job3/image1.png",
      "/src/assets/jobs/job3/image2.png",
      "/src/assets/jobs/job3/image3.png",
    ],
  },
];

const serviceImages = [
  { src: "/src/assets/icons/5.png", href: "/damafon", label: "Video Intercom" },
  { src: "/src/assets/icons/2.png", href: "/camera", label: "Camera" },
  { src: "/src/assets/icons/1.png", href: "/alarm", label: "Alarm System" },
  { src: "/src/assets/icons/3.png", href: "/switch", label: "Switch" },
  { src: "/src/assets/icons/4.png", href: "/cable", label: "Cable" },
];

export default function Home() {
  const [slider, setSlider] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true, 
    speed: 500,
    autoplaySpeed: 1500, 
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const cards = [Tiandy, Navigerd, Switch, Cat5, Dnake, FiberOptic];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <Box>
      <Box
        position={"relative"}
        height={{ base: "300px", md: "600px" }}
        mt={"50px"}
        width={"full"}
        overflow={"hidden"}
      >
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((url, index) => (
            <Box
              key={index}
              height={{ base: "300px", md: "600px" }}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="contain"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>
      <Flex
        mt={"50px"}
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        textAlign="center"
        spacing={4}
      >
        {isMobile
          ? serviceImages.map((link, index) => (
              <Container key={index} mb={{ base: 4, md: 0 }} textAlign="center">
                <Link href={link.href}>
                  <Image
                    src={link.src}
                    alt={link.label}
                    mb={6}
                    maxW={{ base: "200px", md: "150px" }}
                    mx="auto"
                  />
                  <Heading size={"md"}>{link.label}</Heading>
                </Link>
              </Container>
            ))
          : serviceImages.map((link, index) => (
              <Container key={index} mb={{ base: 4, md: 0 }} textAlign="center">
                <Link href={link.href}>
                  <Image
                    src={link.src}
                    alt={link.label}
                    mb={6}
                    maxW={{ base: "200px", md: "200px" }}
                    mx="auto"
                    borderRadius={"20px"}
                  />
                  <Heading size={"md"}>{link.label}</Heading>
                </Link>
              </Container>
            ))}
      </Flex>
      <OurPartners />
      <Box bg="#E1E6F0" minH="100vh" py={10}>
        <Container maxW="6xl">
          <Heading as="h1" size="2xl" mb={10} color="white" textAlign="center">
          Past Projects
          </Heading>
          <Stack spacing={10}>
            {jobs.map((job, index) => (
              <Box
                key={index}
                bg="white"
                p={8}
                borderRadius="md"
                boxShadow="lg"
                textAlign="center"
              >
                {isMobile ? (
                  <Flex overflowX="scroll" direction="row" pb={2}>
                    {job.images.map((image, imgIndex) => (
                      <Box key={imgIndex} minW="100%" flexShrink={0} mr={2}>
                        <Image
                          src={image}
                          alt={`Image of ${job.name} ${imgIndex + 1}`}
                          borderRadius="md"
                          maxH="200px"
                          objectFit="contain"
                          mx="auto"
                          onClick={() => handleImageClick(image)}
                          cursor="pointer"
                        />
                      </Box>
                    ))}
                  </Flex>
                ) : (
                  <Stack
                    direction="row"
                    spacing={10}
                    justify="center"
                    alignItems="center"
                  >
                    {job.images.map((image, imgIndex) => (
                      <Image
                        key={imgIndex}
                        src={image}
                        alt={`Image of ${job.name} ${imgIndex + 1}`}
                        borderRadius="md"
                        maxH="290px"
                        objectFit="contain"
                        onClick={() => handleImageClick(image)}
                        cursor="pointer"
                      />
                    ))}
                  </Stack>
                )}
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
  <ModalOverlay />
  <ModalContent>
    <ModalCloseButton />
    <ModalBody display="flex" justifyContent="center">
      <Image
        src={selectedImage}
        alt="Enlarged Image"
        borderRadius="md"
        maxW={{ base: "90%", md: "600px" }}  
        maxH={{ base: "300px", md: "500px" }}  
        objectFit="contain"  
      />
    </ModalBody>
  </ModalContent>
</Modal>
    </Box>
  );
}
