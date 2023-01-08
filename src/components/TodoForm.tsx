import { FC,FormEvent,useRef } from "react";

interface TodoFormProps {
    handleAddTodoItem:(inputValue:string)=>void
}

const TodoForm:FC<TodoFormProps> = ({handleAddTodoItem}) => {
    // what is this
    const inputRef = useRef<HTMLInputElement>(null)
    
    const handleTodoSubmit = (event:FormEvent) => {
        // 預防提交表單時，轉換到其他頁面或資料消失
        event?.preventDefault()
        const inputValue = inputRef.current!.value
        // console.log(inputValue);
        handleAddTodoItem(inputValue)
        
    }
    
    return (
        <form onSubmit={handleTodoSubmit} className='flex items-center justify-center w-full gap-4 mt-4'>
            <input className='p-2 border' type="text" placeholder="Place Type any Text"  ref={inputRef}/>
            <button className='px-4 py-2 font-bold text-white bg-blue-700 rounded ' type="submit">Submit</button>
        </form>
    )
}
export default TodoForm;