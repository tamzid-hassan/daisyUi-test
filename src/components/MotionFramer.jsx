import { motion } from "framer-motion"


function MotionFramer() {


    return (

        <div className="w-[800px] mx-auto bg-slate-500">
            <motion.div
                className="size-[100px] bg-indigo-500"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                drag="x"
                dragConstraints={{ left: 0, right: 100 }}
            />

            <motion.div initial={{ scale: 0.5, x: 0 }}
                animate={{ scale: 1, x: 50 }}
                transition={{ duration: 0.5, delay: .5 }}
                className="size-[100px] bg-purple-500" />

            <motion.div
                className="size-[100px] bg-orange-500"
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{ duration: 1.5 }}
            />

        </div>
    )
}

export default MotionFramer