import React from "react";
import AppRouter from './Components/MyRouter'; // Correct path
import './index.css'; // Adjust the path based on your CSS file
import "@fortawesome/fontawesome-free/css/all.min.css";
import '@coreui/coreui/dist/css/coreui.min.css';


const App = () => {
  return (
    <div>
      <AppRouter /> 
    </div>
  
  );
};

export default App;
