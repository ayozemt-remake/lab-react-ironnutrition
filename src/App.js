import './App.css';
import foods from './foods.json';
import { useState } from 'react';

function App() {
  const [food, setFoods] = useState(foods);
  return (
    <div className="App">
      <h1>Iron Nutrition</h1>
      {food.map((unit) => {
        return (
          <div>
            <h3>Food list</h3>
            <p>{unit.name}</p>
            <img src={unit.image} alt={unit.name} style={{ height: '150px' }} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
