import { useState, useReducer } from "react";

const initialState = {
  toppings: [],
  crustType: 'pan',
};

const reducer = (state, action) => {
  console.log('action', action);

  if (action.type === 'add-new-topping') {
    return {
      ...state,
      toppings: [
        ...state.toppings,
        action.payload,
      ]
    };
  }

  if (action.type === 'set-crust-type') {
    return {
      ...state,
      crustType: action.payload,
    };
  }

  throw new Error(`${action.type} is not supported`);
};

const PizzaReducer = () => {
  const [newTopping, setNewTopping] = useState('');

  const [pizza, dispatch] = useReducer(reducer, initialState);

  const addTopping = () => {
    dispatch({ type: 'add-new-topping', payload: newTopping });
  };

  const updateCrustType = (event) => {
    dispatch({ type: 'set-crust-type', payload: event.target.value });
  };

  const mappedToppings = pizza.toppings.map((topping) => {
    return <p>{topping}</p>;
  });

  return (
    <div>
      <h2>Create your own Pizza!!!</h2>

      <div>
        <label>Crust Type:</label>
        <input
          value={pizza.crustType}
          onChange={updateCrustType}
        />
        <h3>Current crust type: {pizza.crustType}</h3>
      </div>

      <div>
        <label>New Topping:</label>
        <input 
          value={newTopping}
          onChange={(event) => { setNewTopping(event.target.value) }}
        />
        <button onClick={addTopping}>Add</button>
      </div>

      <div>
        <h3>Toppings</h3>
        { mappedToppings }
      </div>
    </div>
  );
};

export default PizzaReducer;
