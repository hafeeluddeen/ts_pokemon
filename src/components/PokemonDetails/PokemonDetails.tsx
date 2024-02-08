import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const PokemonDetails: FC = () => {
  const { idx } = useParams();
  console.log(idx);

  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold my-2">Pokemon Details page</h3>
      <h3>{idx}</h3>
    </div>
  );
};

export default PokemonDetails;
