import logo from './logo.svg';
import './App.css';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ContentComponent from './components/ContentComponent';
import NavComponent from './components/NavComponent';


function App() {
    return (
    <div className="App">
      <HeaderComponent header="Header"></HeaderComponent>
      <NavComponent></NavComponent>
      <ContentComponent about="About" link="Quick links"></ContentComponent>
     <FooterComponent copyright="Site plan and copyright info"></FooterComponent>
    </div>
  );
}

export default App;
