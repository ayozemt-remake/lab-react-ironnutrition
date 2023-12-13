import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foods);
  const [foodData, setFoodData] = useState(foods);
  const [showForm, setShowForm] = useState(true);

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

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Iron Nutrition</h1>
      {showForm && <AddFoodForm addNewFood={addNewFood} />}
      <Button style={{ margin: '20px' }} onClick={toggleShowForm}>
        {!showForm ? 'Add new food' : 'Hide Form'}
      </Button>
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
      {!food.length && (
        <h1 style={{ textAlign: 'center' }}>Te comiste todo, wey 😭</h1>
      )}
    </div>
  );
}

export default App;
