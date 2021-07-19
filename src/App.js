import './App.css';
import { Switch, Route } from 'react-router-dom';
import OpenedTodos from './components/OpenedTodos';
import ClosedTodos from './components/ClosedTodos';
import Header from './components/Header';
import Search from './components/Search';
import AddTodoForm from './components/AddTodoForm';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTodoData} from './redux/actions/todo-data-actions';
import AddTodoButton from './components/AddTodoButton';

function App() {
  const dispatch = useDispatch();
  const [searchCriteria, setSearchCriteria] = useState("");
  const renderAddTodoForm = useSelector((state) => state.renderAddForm)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
    })
      .then((response) => response.json())
      .then((json) =>{
        return dispatch(setTodoData(json));
      });

  },[dispatch]);

  return (
    <div className="App">    
      <Header />
      <Search setSearchCriteria={setSearchCriteria} searchCriteria={searchCriteria}/>
      <div className="search-container-border"></div>
      {!renderAddTodoForm ? 
      <Switch>
        <Route exact path="/">
          <OpenedTodos searchCriteria={searchCriteria} />
          <AddTodoButton />
        </Route>
        <Route path="/closed">
          <ClosedTodos searchCriteria={searchCriteria} />
        <AddTodoButton />
        </Route>
      </Switch> :
        <AddTodoForm />
    }
    </div>
  );
};

export default App;
