import { useState } from "react";

const Pizza = () => {
  const [newTopping, setNewTopping] = useState('');

  // const [toppings, setToppings] = useState([]); // ['pepperoni', 'mushrooms']
  // const [crustType, setCrustType] = useState('stuffed');

  const [pizza, setPizza] = useState({
    toppings: [],
    crustType: 'stuffed',
  });

  const addTopping = () => {
    const pizzaCopy = {
      ...pizza,
      toppings: [
        ...pizza.toppings,
        newTopping,
      ]
    };

    setPizza(pizzaCopy);
  };

  const updateCrustType = (event) => {
    const pizzaCopy = {
      ...pizza,
      crustType: event.target.value,
    };

    setPizza(pizzaCopy);
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

export default Pizza;
