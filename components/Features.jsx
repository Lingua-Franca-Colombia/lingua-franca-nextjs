import {
    Box,
    VStack,
    Button,
    Flex,
    Divider,
    chakra,
    Grid,
    GridItem,
    Container,
  } from "@chakra-ui/react";
  import {} from "@chakra-ui/react";
  import Link from "next/link";
  import "@fontsource/poppins"
  import "@fontsource/quicksand"
  
  const Feature = ({ heading, text }) => {
    return (
      <GridItem>
        <chakra.h3 fontFamily={"Poppins"} fontSize="xl" fontWeight="600">
          {heading}
        </chakra.h3>
        <chakra.p>{text}</chakra.p>
      </GridItem>
    );
  };
  
  export default function gridListWithCTA() {
    return (
      <Box as={Container} maxW="7xl" my={14} p={4} id="features">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={4}
        >
          <GridItem colSpan={1}>
            <VStack fontFamily={"Quicksand"} alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                Sobre Lingua Franca
              </chakra.h2>
              <Button
                as={Link}
                href="https://wa.link/v2fhzb"
                target="_blank"
                bg ="brand.100"
                color="white"
                size="md"
                _hover={{ textDecoration: "none" }}
              >
                Chatea con nosotros
              </Button>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p fontFamily={"Poppins"}>
                Somos un emprendimiento que inició en 2020 como un servicio de
                tutorias y traducciones en idiomas extranjeros. Actualmente, nos
                proponemos ser un proveedor de servicios comunicativos y digitales
                para clientes locales e internacionales con un alto enfoque en
                ofrecer servicios de calidad a la medida de nuestros clientes.
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={{ base: "8", sm: "12", md: "16" }}
        >
          <Feature
            heading={"Cursos de Idiomas"}
            text={
              "Cursos 100% Virtuales enfocados en el desarrollo de habilidades comunicativas en Inglés o Francés."
            }
          />
          <Feature
            heading={"Exámenes Internacionales"}
            text={
              "Prepárate para buscar y presentar tus exámenes de proficiencia en inglés."
            }
          />
          <Feature
            heading={"Traducción de Documentos"}
            text={
              "Preparamos y traducimos tus documentos no oficiales del inglés al español y viceversa."
            }
          />
          <Feature
            heading={"Diseño y Desarrollo Web"}
            text={
              "Impactamos tu presencia virtual a través del diseño y creación de tu página web"
            }
          />
        </Grid>
      </Box>
    );
  }