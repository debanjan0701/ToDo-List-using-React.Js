import React from 'react';

const ToDoLists = (props) => {

    
    return (
        <>
            <div className='todo_style'>
                <div className='fa fa-times' aria-hidden="true" 
                onClick={()=>{
                    props.onSelect(props.id);
                }}>
                    <li>{props.text}</li>;
                </div>
            </div>

        </>
    );
};
export default ToDoLists;