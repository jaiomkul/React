import './todo.css'
export const TodoItem = ({todo}) => {

    return (
        <div className="todoI">
            <button className='button1'>{todo} <input type="radio" /></button>
        </div>
    )
}