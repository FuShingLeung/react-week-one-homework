import './App.css';
import PetList from './assets/components/PetList';

function App() {
  const itms = [
    {
      name: 'Dog',
      breed: 'German Shepherd',
      picture:
        'https://www.akc.org/wp-content/uploads/2016/06/German-Shepherd-Dog-laying-down-in-the-backyard.jpeg',
    },
    {
      name: 'Kitty',
      breed: 'Ragdoll Cat',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/6/64/Ragdoll_from_Gatil_Ragbelas.jpg',
    },
  ];

  const petBorderColors = ['blue', 'red', 'green', 'orange'];

  return (
    <>
      <div className="App">
        <PetList items={itms} petBorderColors={petBorderColors} />
      </div>
    </>
  );
}

export default App;
