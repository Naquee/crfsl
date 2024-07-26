import './App.css';
import HeroSection from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Box h="300rem"></Box> */}
      <HeroSection/>
    </div>
  );
}

export default App;
