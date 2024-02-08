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
    <Table
      variant="simple"
      style={{
        backgroundColor: 'black',
        borderCollapse: 'collapse',
        border: '2px solid white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%', // Ensure the table takes full width
      }}
    >
      <TableCaption>Live Market Cap for Selected Coins</TableCaption>
      <Thead>
        <Tr>
          <Th style={{ border: '1px solid white' }}>Coin Symbol</Th>
          <Th style={{ border: '1px solid white' }}>Coin Name</Th>
          <Th style={{ border: '1px solid white' }}>Market Cap (USD)</Th>
          {/* Add more columns as needed */}
        </Tr>
      </Thead>
      <Tbody>
        {liveMarketCapData.map(coin => (
          <Tr
            key={coin.id}
            style={{
              backgroundColor: specialCoinList.includes(coin.symbol)
                ? '#FFD700'
                : 'black',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Adjust box shadow
              fontFamily: 'monospace',
              color: 'white',
            }}
          >
            <Td style={{ border: '1px solid white' }}>{coin.symbol}</Td>
            <Td style={{ border: '1px solid white' }}>{coin.name}</Td>
            <Td style={{ border: '1px solid white' }}>
              {coin.quote.USD.market_cap}
            </Td>
            {/* Add more cells for additional information */}
          </Tr>
        ))}
        <Tr style={{ backgroundColor: 'blue' }}>
          <Td style={{ border: '1px solid white' }}>BLUECHIP</Td>
          <Td style={{ border: '1px solid white' }}>BLUECHIP</Td>
          <Td style={{ border: '1px solid white' }}>UPCOMING</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

export default PriceTracker;
