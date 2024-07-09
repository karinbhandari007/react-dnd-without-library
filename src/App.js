import './App.css';
import ContainerSort from './ContainerSort';
import HoverExample from './HoverExample';
import ListSort from './ListSort';
import MinimalExample from './MinimalExample';

function App() {
  return (
    <div className="App">
      <h1>Minimal Example</h1>
      <MinimalExample />
      <h1>Hover Example</h1>
      <HoverExample />
      <h1>List Sort</h1>
      <ListSort />
      {/* <h1>Container Sort</h1>
      <ContainerSort /> */}
    </div>
  );
}

export default App;
