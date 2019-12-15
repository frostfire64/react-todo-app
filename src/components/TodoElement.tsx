import React, { ChangeEvent } from 'react';

interface TodoElementProperties {
    name: string;
    checked: boolean;
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TodoElement: React.FC<TodoElementProperties> = (props) => {

    return (
        <div className={`TodoElement ${props.checked ? "TodoElement--Active": ''}`}>
            <span>{props.name}</span>
            <input type="checkbox" checked={props.checked} onChange={props.handleChange} />
        </div>
    );
};

export default TodoElement;