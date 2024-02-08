import axios from 'axios';
import { useEffect, useState } from 'react';
import PokemonItem from './PokemonItem';
import { Button, Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import useItems from '../../hooks/useItems';

interface Pokemon_Item {
  name: string;
  url: string;
}

const HomePage: React.FC<{ url: string }> = ({ url }) => {
  const limit = 21;
  const [offSet, setOffSet] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<Pokemon_Item[]>([]);

  const handler = () => {
    setOffSet((old) => old + limit);
  };

  console.log(url);
  useEffect(() => {
    const getItems = async () => {
      const data = await axios.get(`${url}?offset=${offSet}&limit=${limit}`);
      const temp_d = data.data.results;
      setItems((old) => [...old, ...temp_d]);
      console.log(items);
      setIsLoading((old) => !old);
    };
    setIsLoading((old) => !old);
    getItems();
  }, [offSet]);

  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold my-2">Pokemon Listing page</h3>
      <Container
        fluid="sm"
        style={{
          borderRadius: '10px',
          background: 'yellow',
          width: '1000px',
          padding: '20px',
        }}
      >
        <Row>
          {items &&
            items.map((item: { name: string; url: string }, idx: number) => {
              return <PokemonItem idx={offSet + idx + 1} {...item} />;
            })}
        </Row>
        {isLoading && (
          <div>
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        <Button onClick={handler}>MORE</Button>
      </Container>
    </div>
  );
};

export default HomePage;
