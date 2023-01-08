import { FC } from "react"
import TodoItem from "./TodoItem"

interface TodoListProps{
    data:{
        id:string,
        description:string
    }[]
    handleDeleteTodoItem:(todo:string)=>void
}

const TodoList:FC<TodoListProps>= ({data,handleDeleteTodoItem}) => {

    // const dummyData = [
    //     {
    //         id:'1',
    //         description:'Learn React'
    //     },
    //     {
    //         id:'2',
    //         description:'Learn English'
    //     }
    // ]

    return(
        <div className='flex flex-col items-center justify-center gap-4 mt-6'>
            {
                data.map(todoItem => <TodoItem key={todoItem.id} 
                    id={todoItem.id}
                    text={todoItem.description} handleDeleteTodoItem={handleDeleteTodoItem}/>
            )}
        </div>
    )
}

export default TodoList