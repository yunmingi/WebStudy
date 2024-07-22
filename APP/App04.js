import logo from './logo.svg';
import './App.css';
import Ex01Counter from './ex04-state/Ex01Counter';
import Ex02LikeButton from './ex04-state/Ex02LikeButton';
import Ex03BadCounter from './ex04-state/Ex03BadCounter';
import Ex03Counter from './ex04-state/Ex03Counter';

function App() {
  return (
    <div className="App">
      <h1>Hello React!!</h1>
      <Ex01Counter />
      <Ex02LikeButton />
      <Ex03BadCounter />
      <Ex03Counter />
    </div>
  );
}

export default App;
