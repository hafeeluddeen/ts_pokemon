import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Pokemon_Item {
  name: string;
  url: string;
}

const useItems = (url: string) => {
  const [items, setItems] = useState<Pokemon_Item[]>([]);
  console.log(url);
  useEffect(() => {
    const getItems = async () => {
      const data = await axios.get(url);
      console.log(data.data.results);
      setItems(data.data.results);
    };

    getItems();
  }, []);

  return items;
};

export default useItems;
