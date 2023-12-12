import { Divider, Input } from 'antd';
import { useState } from 'react';

export default function Search({ filterFoodList }) {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log('your search', e.target.value);
    filterFoodList(e.target.value);
  };

  return (
    <div style={{ margin: 20 }}>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input type="text" value={search} onChange={handleSearch} />
    </div>
  );
}
