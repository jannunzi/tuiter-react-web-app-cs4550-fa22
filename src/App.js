import logo from './logo.svg';
import WelcomeToFSD from "./WelcomeToFSD";
import Labs from "./Labs";
import Tuiter from "./Tuiter";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Nav from "./nav";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route index element={<Labs/>}/>
          <Route path="/tuiter/*" element={<Tuiter/>}/>
          <Route path="/challenge" element={<h1>Challenge</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
