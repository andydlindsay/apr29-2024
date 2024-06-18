import './App.css';
import {useState} from 'react';

// import ClassBased from './components/ClassBased';
import Lifecycle from './components/Lifecycle';

const App = () => {
  const [showLifecycle, setShowLifecycle] = useState(false);

  return (
    <div className="App">
      <h2>Class-Based React</h2>
      <button onClick={() => setShowLifecycle(!showLifecycle)}>Toggle Lifecycle Component</button>

      {/* <ClassBased message="hello" colour="yellow" count={10} /> */}
      { showLifecycle && <Lifecycle /> }
    </div>
  );
};

export default App;
