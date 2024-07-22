import logo from './logo.svg';
import './App.css';
import Ex01Lifecycle from './ex05-lifecycle/Ex01Lifecycle';
import Ex02Lifecycle from './ex05-lifecycle/Ex02Lifecycle';
import Ex02ParentComponent from './ex05-lifecycle/Ex02ParentComponent';
import Ex03Lifecycle from './ex05-lifecycle/Ex03Lifecycle';
import Ex03ParentComponent from './ex05-lifecycle/Ex03ParentComponent';
import Ex04ParentComponent from './ex05-lifecycle/Ex04ParentComponent';
import QuizCalculator from './ex05-lifecycle/QuizCalculator';
import QuizCalculator2 from './ex05-lifecycle/QuizCalculator2';


function App() {
  return (
    <div className="App">
      {/* <Ex01Lifecycle /> */}
      {/* <Ex02Lifecycle /> */}
      {/* <Ex02ParentComponent /> */}
      {/* <Ex03ParentComponent /> */}
      {/* <Ex04ParentComponent /> */}
      {/* <QuizCalculator /> */}
      <QuizCalculator2 />
    </div>
  );
}

export default App;
