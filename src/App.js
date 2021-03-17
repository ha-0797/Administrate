import AddressBook from './components/Addressbook';
import Navbar from './components/Navbar';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <AddressBook />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
