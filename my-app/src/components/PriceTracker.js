import { useState, useEffect } from 'react';
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

function PriceTracker() {
  const coinList = [
    'DOGE',
    'SHIB',
    'BONK',
    'PEPE',
    'FLOKI',
    'PORK',
    'WIF',
    'MAGA',
    'MYRO',
    'HPOS10I',
    'LADYS',
    'WEN',
    'JESUS',
    'HONK',
    'MONG',
    'SMURFCAT',
    'SPX',
    'CHEEMS',
  ];

  const specialCoinList = ['DOGE', 'PEPE', 'FLOKI'];
  const [liveMarketCapData, setLiveMarketCapData] = useState([]);
  useEffect(() => {
    const fetchLiveMarketCap = async () => {
      try {
        const response = await axios.get(
          '/api/cryptocurrency/listings/latest',
          {
            params: {
              start: 1,
              limit: 5000,
              convert: 'USD',
            },
          }
        );

        const coins = response.data.data;

        // Filter coins based on the provided coin list
        const filteredCoins = coins.filter(coin =>
          coinList.includes(coin.symbol)
        );

        // Log or use the filtered coins array as needed
        console.log('Filtered Coins:', filteredCoins);

        // Update the state with the live market cap data
        setLiveMarketCapData(filteredCoins);
      } catch (error) {
        console.error('Error fetching live market cap:', error.message);
      }
    };

    // Call the function to fetch live market cap data
    fetchLiveMarketCap();
  }, []);

  return (
    <Table variant="simple" colorScheme="teal">
      <TableCaption>Live Market Cap for Selected Coins</TableCaption>
      <Thead>
        <Tr>
          <Th>Coin Symbol</Th>
          <Th>Coin Name</Th>
          <Th>Market Cap (USD)</Th>
          {/* Add more columns as needed */}
        </Tr>
      </Thead>
      <Tbody>
        {liveMarketCapData.map(coin => (
          <Tr
            key={coin.id}
            style={{
              backgroundColor: specialCoinList.includes(coin.symbol)
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
        <Tr style={{ backgroundColor: 'blue' }}>
          <Td>BLUECHIP</Td>
          <Td>BLUECHIP</Td>
          <Td>UPCOMING</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

export default PriceTracker;