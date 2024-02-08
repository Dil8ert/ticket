// App.js
import React, { useState, useEffect } from 'react';
import PriceTracker from './components/PriceTracker';
import ImageHoverer from './components/ImageHoverer';
import { Center, Heading } from '@chakra-ui/react';
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
import { Flex, Spacer } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import pepeVideo from './components/videoPEPE.MP4';

function App() {
  return (
    <ChakraProvider>
      <Box textAlign="center" fontSize="xl">
        <Flex>
          <Box p="4" bg="black">
            <ImageHoverer style={{ textAlign: 'left' }} />
          </Box>
          <Box
            p="4"
            bg="black"
            style={{ width: '100%', color: '#89CFF0', fontFamily: 'Monospace' }}
          >
            <Heading>Bluechip</Heading>

            <Text noOfLines={1} style={{ padding: '4%' }}>
              "The quick brown fox jumps over the lazy dog" is an
              English-language pangram—a sentence that contains all of the
              letters of the English alphabet. Owing to its existence, Chakra
              was created.
            </Text>

            <Center style={{ padding: '4%' }}>
              <video width="520" height="340" controls>
                <source src={pepeVideo} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </Center>

            {/* <Box>
              <video width="320" height="240" controls>
                <source src="movie.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box> */}
          </Box>
        </Flex>
        <Box p="4" bg="black">
          <PriceTracker />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
