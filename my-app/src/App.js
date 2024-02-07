// App.js
import React, { useState, useEffect } from 'react';
import PriceTracker from './components/PriceTracker';
import ImageHoverer from './components/ImageHoverer';
import {
  ChakraProvider,
  Box,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box textAlign="center" fontSize="xl">
        <ImageHoverer />
        <PriceTracker />
      </Box>
    </ChakraProvider>
  );
}

export default App;
