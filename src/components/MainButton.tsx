// App.js
import React from 'react';
import { ChakraProvider, Button, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface MainButtonProps{
    title:string,
}

const MotionButton= motion(Button);

const MainButton:React.FC<MainButtonProps>= ({title})=> {
  return (
      <Flex pl="5rem">
        <MotionButton
          colorScheme="purple"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          {title}
        </MotionButton>
      </Flex>
  );
}

export  {MainButton};
