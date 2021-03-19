import OrgContextProvider from './contexts/OrgContext';
import OrgBook from './components/OrgBook';
import NavBar from './components/Navbar';
import OrgForm from './components/OrgForm';

function App() {
  return (
    <div className="App">
      <OrgContextProvider>
        <NavBar />
        <OrgForm />
        <OrgBook />
      </OrgContextProvider>
    </div>
  );
}

export default App;
