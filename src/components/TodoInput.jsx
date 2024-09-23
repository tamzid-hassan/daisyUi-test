import { useState } from "react"


function TodoInput({ addTodo }) {

    const [inputText, setInputText] = useState("")

    const handleInput = () => {
        const newTodo = { id: new Date(), task: inputText }
        addTodo(newTodo)
        setInputText("")
    }

    return (
        <div className="w-3/4 mx-auto mt-12 lg:w-2/5">
            <div className="flex justify-center w-full join">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type here"
                    className="w-full max-w-md rounded-lg join-item input input-bordered input-accent " />
                <button onClick={handleInput} className="z-10 rounded-lg group/send join-item btn btn-accent">
                    <i className="transition-transform duration-200 group-hover/send:translate-x-2 group-hover/send:text-white group-active/send:-translate-x-2 fa-solid fa-angles-right"></i>
                </button>
            </div>
            <div className="flex flex-col w-full">
                <div className="divider divider-accent">Tasks</div>
            </div>
        </div>
    )
}

export default TodoInput