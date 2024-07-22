import logo from './logo.svg';
import './App.css';
import Ex01Hello from './ex03-props/Ex01Hello';
import Ex02UserApp from './ex03-props/Ex02UserApp';
import Ex03UserTableApp from './ex03-props/Ex03UserTableApp';
import Practice01Comment from './ex03-props/Practice01Comment';
import Quiz01CommentList from './ex03-props/Quiz01CommentList';
import Quiz02CommentList from './ex03-props/Quiz02CommentList';
import Quiz03CommentList from './ex03-props/Quiz03CommentList';

function App() {
  return (
    <div className="App">
      <Ex01Hello name='홍길동'/>
      <hr></hr>
      <Ex02UserApp />
      <hr></hr>
      <Ex03UserTableApp />
      <hr></hr>
      <Practice01Comment 
        author="홍길동"
        text="아싸 1빠"
        regdate="2024-03-04T12:34:56Z" />
      <hr/>
      <Quiz01CommentList /> 
      <hr></hr>
      <Quiz02CommentList />
      <hr></hr>
      <Quiz03CommentList />
    </div>
  );
}

export default App;
