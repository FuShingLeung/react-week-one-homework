import './App.css';
import List from './assets/components/List';

function App() {
  const itms = [
    {
      name: 'Dog',
      breed: 'German Shepherd',
      picture: '../src/assets/German-Shepherd.jpeg',
      color: 'blue',
    },
    {
      name: 'Kitty',
      breed: 'Ragdoll Cat',
      picture: '../src/assets/Ragdoll.jpeg',
    },
  ];
  return (
    <>
      <div className="App">
        <List items={itms} />
      </div>
    </>
  );
}

export default App;
