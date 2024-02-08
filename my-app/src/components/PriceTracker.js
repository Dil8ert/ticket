import { useState, useEffect } from 'react';
import {
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
    <div style={{ margin: '0 auto', maxWidth: '1000px',}}>
      <Table
        variant="simple"
        style={{
          // border: '2px solid black',
          boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.4)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <TableCaption
          style={{
            color: 'white',
            fontWeight: 'bold',
            marginBottom: '10px',
          }}
        >
          Live Market Cap for Selected Coins
        </TableCaption>
        <Thead style={{backgroundColor : 'black'}}>
          <Tr>
            <Th
              style={{
                // border: '2px solid white',
                // padding: '10px',
                textAlign: 'center',
                fontWeight: 'bold',
                color:'#fff'
              }}
            >
              Coin Symbol
            </Th>
            <Th
              style={{
                // border: '2px solid white',
                // padding: '10px',
                textAlign: 'center',
                fontWeight: 'bold',
                color:'#fff'
              }}
            >
              Coin Name
            </Th>
            <Th
              style={{
                // border: '2px solid white',
                // padding: '10px',
                textAlign: 'center',
                fontWeight: 'bold',
                color:'#fff'
              }}
            >
              Market Cap (USD)
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {liveMarketCapData.map(coin => (
            <Tr
              key={coin.id}
              style={{
                background: specialCoinList.includes(coin.symbol)
                  ? 'linear-gradient(45deg, #FFA500, #FFD700)'
                  : 'linear-gradient(45deg, #282c34, #4a4e59)',
                fontFamily: 'monospace',
                color: 'white',
                transition: 'background-color 0.3s ease',
              }}
            >
              <Td
                style={{
                  border: '1px solid white',
                  padding: '10px',
                  textAlign: 'center',
                }}
              >
                {coin.symbol}
              </Td>
              <Td
                style={{
                  border: '1px solid white',
                  padding: '10px',
                  textAlign: 'center',
                }}
              >
                {coin.name}
              </Td>
              <Td
                style={{
                  border: '1px solid white',
                  padding: '10px',
                  textAlign: 'center',
                }}
              >
                {coin.quote.USD.market_cap}
              </Td>
              {/* Add more cells for additional information */}
            </Tr>
          ))}
          <Tr
            style={{
              background: 'linear-gradient(45deg, #0000FF, #00FFFF)',
              fontFamily: 'monospace',
              color: 'white',
              transition: 'background-color 0.3s ease',
            }}
          >
            <Td
              style={{
                border: '1px solid white',
                padding: '10px',
                textAlign: 'center',
              }}
            >
              BLUECHIP
            </Td>
            <Td
              style={{
                border: '1px solid white',
                padding: '10px',
                textAlign: 'center',
              }}
            >
              BLUECHIP
            </Td>
            <Td
              style={{
                border: '1px solid white',
                padding: '10px',
                textAlign: 'center',
              }}
            >
              UPCOMING
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
  
  
}

export default PriceTracker;
