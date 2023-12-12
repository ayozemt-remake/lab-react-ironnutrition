import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row, Divider } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foods);
  const [foodData, setFoodData] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFood = [newFood, ...food];
    const updatedFoodData = [newFood, ...foodData];
    setFood(updatedFood);
    setFoodData(updatedFoodData);
  };

  const filterFoodList = (str) => {
    const input = str.toLowerCase();
    setFood(
      input
        ? food.filter((unit) => unit.name.toLowerCase().includes(input))
        : [...foodData]
    );
  };

  const deleteFood = (index) => {
    const updatedFood = [...food];
    const updatedFoodData = [...foodData];
    updatedFood.splice(index, 1);
    updatedFoodData.splice(index, 1);
    setFood(updatedFood);
    setFoodData(updatedFoodData);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Iron Nutrition</h1>
      <AddFoodForm addNewFood={addNewFood} />
      <Search filterFoodList={filterFoodList} />
      <Divider>Food List</Divider>
      <Row>
        {food.map((unit, index) => {
          return (
            <FoodBox
              key={index}
              food={unit}
              deleteFood={() => deleteFood(index)}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
