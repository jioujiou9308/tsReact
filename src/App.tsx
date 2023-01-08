import { METHODS } from 'http';
import React,{FC,useState} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Todo from './models/Todo.model';

// 開始使用typescript
const App:FC =()=> {

const [todos,setTodos] = useState<Todo[]>([])

const handleAddTodoItem = (inputValue:string) => {
   setTodos(preTodos =>[...preTodos,{id:Math.random().toString(),description:inputValue}])
   console.log(inputValue)
}

// todo刪除
const handleDeleteTodoItem = (todoId:string) => {
   setTodos(prevTods => prevTods.filter(todoItem => todoItem.id !== todoId))
}

  return (
    <div>
       <header className='flex items-center justify-center w-full h-24 bg-green-300'>
          <div className='text-4xl font-bold text-center'>Learn to make Todo A Todo List</div>
       </header>
       <TodoForm handleAddTodoItem={handleAddTodoItem}/>
       <TodoList data={todos} 
       handleDeleteTodoItem={handleDeleteTodoItem}/>
    </div>
    
  );
}

export default App;
