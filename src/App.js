import React from 'react';
import 'bulma/css/bulma.css';
import { FoodBox } from './component/FoodBox';
import { FoodForm } from './component/FoodsForm';
import { SearchBar } from './component/SearchBar';
import { TodayFoods } from "./component/TodayFoods"

import foodsJson from './foods.json';

function App() {
  const [foods, setFoods] = React.useState(foodsJson);
  const [show, setShow] = React.useState(false);
  const [todayFoods, setTodayFoods] = React.useState({})
  const [query, setQuery] = React.useState('');
  const addFood = (food) => setFoods([food, ...foods]);
  const handleQuery = ({ target }) => setQuery(target.value);
  const addTodayFoods = (food) => {
    const state = { ...todayFoods }
    if (state[food.name]) {
      state[food.name] = {
        name: food.name,
        calories: Number(state[food.name].calories) + Number(food.calories),
        quantity: Number(state[food.name].quantity) + Number(food.quantity)
      }
      return setTodayFoods(state)
    }
    state[food.name] = food;
    setTodayFoods(state)
  }
  const removeTodayFoods = (name) => {
    const state = { ...todayFoods }
    delete state[name];
    setTodayFoods(state)
  }
  return (
    <div>
      <Button onClick={() => setShow(!show)} />
      <ToggleDisplay toggle={show}>
        <FoodForm onSubmit={addFood} />
      </ToggleDisplay>

      <SearchBar query={query} onChange={handleQuery} />
      <div className="columns" >
        <div className="column">
          {foods.reduce((foods, food) => {
            if (includesName(food, query)) {
              foods.push(<FoodBox key={food.name} {...food} onClick={addTodayFoods} />)
            }
            return foods
          }, [])}

        </div>
        <div className="column">
          <TodayFoods todayFoods={Object.values(todayFoods)} onClick={removeTodayFoods} />
        </div>
      </div>
    </div>
  );
}

// todays food 
//  {
//  "Pizza": {
//    name: "Pizza",
//    calories: 100,
//    quantity: 2
//  },
//  "Burger": {
//   name: "Burger",
//   calories: 100,
//   quantity: 2
// }
// }
// Object.values(todaysFoods) --> [ {
//    name: "Pizza",
//    calories: 100,
//    quantity: 2
//  },
//   {
//   name: "Burger",
//   calories: 100,
//   quantity: 2
//  }
//   ]

// Yo quiero que cuando haga click en FoodBox, se agregue una food a TodayFood.
// TodayFood y FoodBox son hermanos, por lo cual no puedo pasar props de uno a otro.
// Necesito pasar la food al padre en comun.
// Pasa de FoodBox por callback a App.js y de App.js por prop a TodayFoods
//               () App
//       ()      ()      ()
//  () TodayFoods ()      () FoodBox


// filtrar las comidas y pintar las comidas
// query --> filtrar foods, mappear foods.
// query --> guardar en el estado foods filtrado, mappear foods
// filtraste TODAS las food y las guardaste, y despues hiciste map --> filter  + map



function includesName(food, query) {
  return food.name.toLowerCase().includes(query.toLowerCase())
}


function Button({ onClick }) {
  return (
    <button className="button" onClick={onClick}>
      Show Form
    </button>
  );
}

function ToggleDisplay({ children, toggle }) {
  return toggle ? children : null;
}

export default App;

// la informacion viaja por props de padre a hijo SIEMPRE.
// si un hijo quiere mandar informacion a un padre es por CALLBACK.
// callback es una funcion que pasa el padre al hijo por props para que el hijo ejecute.
// el hijo elecuta el callback y le pasa como argumento la informacion que queremos que llegue al padre.
