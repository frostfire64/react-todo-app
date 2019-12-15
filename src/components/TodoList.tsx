import React, { ReactNode, ChangeEvent } from 'react';
import TodoElement from './TodoElement';

interface TodoListProps {

}

interface TodoStateProps {
    elementsData: Array<{
        name: string,
        checked: boolean
    }>
}

class TodoList extends React.Component<TodoListProps, TodoStateProps> {
    constructor(props: TodoListProps) {
        super(props);
        this.state = {
            elementsData: [
                {name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, velit.', checked: true},
                {name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, velit.', checked: false},
            ]
        };
    };

    

    changeChecked = (index: number) => {
        const newElementsData = this.state.elementsData;
        newElementsData[index].checked = !newElementsData[index].checked

        this.setState({elementsData: newElementsData});
    };

    addItemToList = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const newElementsData = this.state.elementsData;
            newElementsData.push({name: event.currentTarget.value, checked: false});
            event.currentTarget.value = '';
            this.setState({elementsData: newElementsData});
        }
    };

    render: () => ReactNode = () => {
        return (
            <div className="TodoList">
                <div className="TodoList-AddItem">
                    <input 
                        type="text" 
                        className="TodoList-Input" 
                        onKeyDown={this.addItemToList.bind(this)}
                        placeholder="Add a new todo item and press enter..."
                    />
                </div>
                <div className="TodoList-Elements">
                    { this.state.elementsData.map( (element, index) => 
                        <TodoElement 
                            name={element.name}
                            checked={element.checked}
                            key={index}
                            handleChange={this.changeChecked.bind(this, index)}
                        />) }
                </div>
            </div>
        );
    }
}

export default TodoList;