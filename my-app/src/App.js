// App.js
import React, { useState, useEffect } from 'react';
import PriceTracker from './components/PriceTracker';
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
        <PriceTracker />
      </Box>
    </ChakraProvider>
  );
}

export default App;
