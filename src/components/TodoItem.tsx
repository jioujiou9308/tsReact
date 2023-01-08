import { FC } from "react"
import {ImCancelCircle} from 'react-icons/im'

interface TodoItemProps {
    id:string,
    text:string,
    handleDeleteTodoItem:(todoId:string)=>void;
}

const TodoItem:FC<TodoItemProps> = ({id,text,handleDeleteTodoItem}) => {
    return (
        <div className='flex items-center justify-between w-64 px-4 py-2 bg-blue-500'>
            <div className='font-bold text-white'>{text}</div>
            <ImCancelCircle 
            onClick={handleDeleteTodoItem.bind(null,id)}/>
        </div>
    )
}
export default TodoItem