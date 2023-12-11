import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row, Divider } from 'antd';

function App() {
  const [food, setFoods] = useState(foods);
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Iron Nutrition</h1>
      {/* {food.map((unit) => {
        return (
          <div>
            <h3>Food list</h3>
            <p>{unit.name}</p>
            <img src={unit.image} alt={unit.name} style={{ height: '150px' }} />
          </div>
        );
      })} */}
      {/* <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      /> */}
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
