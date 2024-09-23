import { motion, AnimatePresence } from "framer-motion"


function Todo({ todo, deleteTodo }) {

    const handleDelete = () => {
        deleteTodo(todo.id)
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{
                    y: -20,
                    x: 0,
                }}
                animate={{
                    y: 0,
                }}
                transition={{
                    duration: .5,
                    type: "spring"
                }}
                exit={{
                    y: 25,
                }}
                layout
            >
                <div className="flex justify-between w-3/4 py-5 pl-2 mx-auto mt-4 rounded-lg shadow-lg shadow-secondary/30 bg-neutral lg:w-2/5">
                    <p className="text-lg font-bold text-neutral-content">{todo.task}</p>
                    <div className="pr-4 space-x-5">
                        <button><i className="fa-solid fa-pen-to-square text-info"></i></button>
                        <button onClick={() => handleDelete()}><i className="fa-solid fa-trash-can text-error"></i></button>
                    </div>

                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Todo