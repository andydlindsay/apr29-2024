import './App.css';

// import VisitorCounter from './components/VistorCounter';
// import Pizza from './components/Pizza';
import PizzaReducer from './components/PizzaReducer';

const App = () => {
  return (
    <div className="App">
      <h2>Pat's Pizza Place</h2>

      {/* <VisitorCounter /> */}
      <PizzaReducer />
    </div>
  );
};

export default App;
