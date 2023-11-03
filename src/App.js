import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactHeader from './components/ContactHeader/ContactHeader';
import NavBar from './NavBar/NavBar.jsx';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <main className='maincontainer'>
    <ContactHeader/> 
    <ContactForm/>
    </main>
    </div>
  );
}

export default App;
