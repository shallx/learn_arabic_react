import './App.css';
import ImageCard from './components/image_card/image_card';
import Button from './ui/Button/Button';
import { useState } from 'react';
import { alphabets } from './constants/alphabets';
import HamimCard from './components/hamim_card/HamimCard';


function App() {
  const [alphabetIndex, setAlphabetIndex] = useState(0);
  const [showPronounciation, setShowPronounciation] = useState(false);


  const randomLetter = () => {

    setAlphabetIndex(Math.floor(Math.random() * alphabets.length));
    setShowPronounciation(false);
  }
  
  const togglePronounciationVisibility = () => {
    setShowPronounciation(!showPronounciation);
  }

  return (
    <div className="App">
      <ImageCard 
      alphabet={alphabets[alphabetIndex]} 
      showPronounciation={showPronounciation}
      clicked={togglePronounciationVisibility}/>
      <Button clicked={randomLetter}>Random</Button>
    </div>
  );
}

export default App;