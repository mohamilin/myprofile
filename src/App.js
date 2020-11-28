// import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
       <Header/>
      <div className="app-test">
        <div className="sub-app">
          <div className="content">
            <LandingPage/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
