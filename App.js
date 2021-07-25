import Main from './components/Main';
import Navbar from './components/Navbar';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App" style={{ minWidth: 'fit-content' }}>
      <Navbar />
      <Main />
      <Tabs />
    </div>
  );
}

export default App;
