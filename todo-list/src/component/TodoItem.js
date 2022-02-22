import { motion } from "framer-motion";
import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

const TodoItems = (props) => {
    const {item, updateTodo, removeTodo, completeTodo}=props;

    const inputRef = useRef(true);

    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    };

    const update = (id, value, e)=>{
        if(e.which === 13){
            updateTodo({id, item: value});
            inputRef.current.disabled = true;
        }
    };

    return(
        <motion.li>
            initial
        </motion.li>
    );
};