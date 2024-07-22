import logo from './logo.svg';
import './App.css';
import Ex01useState from './ex06-hooks/Ex01useState';
import Ex02useEffect from './ex06-hooks/Ex02useEffect'; 
import ParentComponent from './ex06-hooks/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Ex01useState /> */}
      {/* <Ex02useEffect /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
