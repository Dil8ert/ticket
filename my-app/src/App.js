// App.js
import React, { useState, useEffect } from 'react';
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
import axios from 'axios';

function App() {
  const [sortedCoins, setSortedCoins] = useState([]);

  const coinList = ['DOGE', 'PEPE', 'FLOKI'];

  useEffect(() => {
    const getSortedCoinsByMarketCap = async () => {
      try {
        const response = await axios.get('/api/listings/latest', {
          params: {
            start: 1,
            limit: 100,
            convert: 'USD',
          },
        });

        const coins = response.data.data;

        // Sort coins by market cap in descending order
        const updatedSortedCoins = coins.sort(
          (a, b) => b.quote.USD.market_cap - a.quote.USD.market_cap
        );

        // Log or use the sortedCoins array as needed
        console.log('Sorted Coins:', updatedSortedCoins);

        // Update the state with the sorted coins
        setSortedCoins(updatedSortedCoins);
      } catch (error) {
        console.error('Error fetching sorted coins:', error.message);
      }
    };

    // Call the function to get and sort coins
    getSortedCoinsByMarketCap();
  }, []);

  return (
    <ChakraProvider>
      <Box textAlign="center" fontSize="xl">
        <Table variant="simple" colorScheme="teal">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Coin Symbol</Th>
              <Th>Coin Name</Th>
              <Th>Market Cap (USD)</Th>
              {/* Add more columns as needed */}
            </Tr>
          </Thead>
          <Tbody>
            {sortedCoins.map(coin => (
              <Tr
                key={coin.id}
                style={{
                  backgroundColor: coinList.includes(coin.symbol)
                    ? 'yellow'
                    : 'white',
                }}
              >
                <Td>{coin.symbol}</Td>
                <Td>{coin.name}</Td>
                <Td>{coin.quote.USD.market_cap}</Td>
                {/* Add more cells for additional information */}
              </Tr>
            ))}
            <Tr
              style={{
                backgroundColor: 'blue',
              }}
            >
              <Td>BLUECHIP</Td>
              <Td>BLUECHIP</Td>
              <Td>UPCOMING</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </ChakraProvider>
  );
}

export default App;
