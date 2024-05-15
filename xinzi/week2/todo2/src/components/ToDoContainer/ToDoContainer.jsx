
import React from "react";
import './ToDoContainer.css'

    const ToDoContainer = ({ title, children }) => {

    return (
        
        <div className="todo-form">
            <span className="todo-name">{title}</span>
            {children}
        </div>
     );
};

export default ToDoContainer;
