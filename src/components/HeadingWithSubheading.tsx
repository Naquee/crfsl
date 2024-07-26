// src/components/HeadingWithSubheading.js
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { COLORS } from '../Colors/color';

interface HeadingWithSubheadingProps {
    title:string,
    subtitle:string,
    titleSize:string
}

const MotionBox = motion(Box);

const HeadingWithSubheading:React.FC<HeadingWithSubheadingProps> = ({ title, subtitle,titleSize="xl" }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      mb={4}
    >
      <Heading as="h1" size={["lg",titleSize]} p="1rem" color={COLORS.naviBlue}>
        {title}
      </Heading>
      <Text fontSize="lg" color="gray.600" p="1rem" textAlign="start">
        {subtitle}
      </Text>
    </MotionBox>
  );
};

export  {HeadingWithSubheading};
