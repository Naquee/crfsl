import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";
import { consultancyServices } from "../service/data";
import { Headings } from "./Headings";
import { ServiceCardProps } from "../Interface/interface";
// import { COLORS } from "../Colors/color";

const OurServices: React.FC = () => {
  return (
    <Box  w="98%" height="auto" margin="auto">
      <Headings title="Welcome to Our Consultancy Services" />

      {consultancyServices?.map((item, index) => {
        return (
          <Box key={item.category}>
            <Heading as="h4" size={["sm","md"]} textAlign="start" color="#6a5acd)" pt="1rem" borderBottom="1px solid #e3dadb" pl="2rem">
              {item.category}
            </Heading>
            {/* <Center>
            <Image src={item?.url} alt={item?.category} />
            </Center> */}
            <Box mt={4}>
              {item.services.map((card: any, index: number) => (
                <ServiceCard key={index} card={card} />
              ))}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ card }) => {
  return (
    <Accordion allowToggle w={["100%", "98%"]} m="auto">
      <AccordionItem>
        <Box bg="#1c2938" color="#fffafb" boxShadow='base' rounded='md'>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontSize={["sm","lg"]} fontWeight="400">
              {card?.name}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Box>
        <AccordionPanel pb={4} fontSize="16px" textAlign='start' color="gray">
          {card?.description}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default OurServices;
