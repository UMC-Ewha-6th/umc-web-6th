import React, { useState } from 'react'
import './InputForm.css'

function InputForm({addToDo}) {

    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        addToDo(input);
        setInput("");
    }

    return (
        <>
            <form className="input-form" onSubmit={handleSubmit}>
                <input type="text" value={input} placeholder="UMC 스터디 계획을 작성해보세요!" onChange={handleChange}/>
            </form>
        </>
    )
}

export default InputForm;