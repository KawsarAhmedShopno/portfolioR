import { BrowserRouter } from "react-router-dom";

import Approuter from "./router/Approuter";



function App() {
  return (
    <div>
       <BrowserRouter>
      <Approuter/>
    </BrowserRouter>
    </div>
  );
}

export default App;
