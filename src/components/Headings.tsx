import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC } from "react";
import { COLORS } from "../Colors/color";

interface HeadingsProps{
    title:string
}   

const MotionHeading = motion(Heading);
const Headings:FC<HeadingsProps> = ({title}) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" boxShadow='lg' px="1rem" py="1rem" rounded='md' bg='white'>
      <MotionHeading
        fontSize={["xl","4xl"]}
        color={COLORS.naviBlue}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {title}
      </MotionHeading>
    </Box>
  );
};

export { Headings };
