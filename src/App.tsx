import React from "react";
import Navbar from './Components/Navbar';
import CustomSlider from './Components/Slider';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Jupiter</h1>
      <CustomSlider
        min={0}
        max={100}
        step={5}
        defaultValue={50}
        onChange={(val: any) => console.log("Slider value:", val)}
      />
    </div>
  );
};

export default App;