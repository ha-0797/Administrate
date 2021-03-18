import AddressContextProvider from './contexts/AddressContext';
import AddressBook from './components/AddressBook';
import NavBar from './components/Navbar';
import AddressForm from './components/AddressForm';

function App() {
  return (
    <div className="App">
      <AddressContextProvider>
        <NavBar />
        <AddressBook />
        <AddressForm />
      </AddressContextProvider>
    </div>
  );
}

export default App;
