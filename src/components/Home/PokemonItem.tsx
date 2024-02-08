import { Image } from 'primereact/image';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

interface POKEMON_ITEM {
  name: string;
  idx: number;
  url: string;
}

interface Pokemon_Item {
  name: string;
  url: string;
}

const PokemonItem: React.FC<POKEMON_ITEM> = ({ name, idx, url }) => {
  const base_img_url: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx}.png`;
  const navigate = useNavigate();

  const navi = (): void => {
    navigate(`/pokemon/${idx}`);
  };
  return (
    <Col md="4" className="mb-5">
      <Card style={{ width: '18rem', textAlign: 'center' }}>
        <Card.Img variant="top" src={base_img_url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>{' '}
          <Button variant="outline-primary" onClick={navi}>
            READ MORE
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PokemonItem;
