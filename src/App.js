import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row, Divider } from 'antd';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [food, setFood] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFood = [newFood, ...food];
    setFood(updatedFood);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Iron Nutrition</h1>
      <AddFoodForm addNewFood={addNewFood} />
      <Divider>Food List</Divider>
      <Row>
        {food.map((unit, index) => {
          return <FoodBox key={index} food={unit} />;
        })}
      </Row>
    </div>
  );
}

export default App;
