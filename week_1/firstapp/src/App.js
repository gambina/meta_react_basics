import logo from './logo.svg';
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Logo from './components/Logo'
import './App.css';


function App() {
  return (<div>
    <Header name="bob" address='somewhere'/>
    <Main />
    <Sidebar />
    <Logo />
    </div>)
}

export default App;

