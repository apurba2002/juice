import logo from './logo.svg';
import './App.css';
import Pink from './pink';
import Green from './green';
import Orange from './orange';
import Hover from './hover';
import Nav from './nav';


function App() {
  console.log(document.getElementById('pink'))
  return (
    <>
          <Nav />
         <Pink />
         <Green />
         <Orange />
         <Hover />
         <Nav />
    </>
  );
}

export default App;
