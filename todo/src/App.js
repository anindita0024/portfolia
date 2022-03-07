import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header';

// import {BrowserRouter as Router , Switch, Route} from 'react';
function App() {
  return (
    
    <div className="App m-4">

      <Header />
      <TodoInput/>
      <TodoList/>
</div>




    
  );
}

export default App;
