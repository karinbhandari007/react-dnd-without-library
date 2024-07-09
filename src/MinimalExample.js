import React from 'react';

const MinimalExample = () => {
    const handleDragStart = (event) => {
        event.dataTransfer.setData('text', event.currentTarget.id);
    }
    
    const enableDropping = (event) => { 
        event.preventDefault();
    }
        
    const handleDrop = (event) => {
        const id = event.dataTransfer.getData('text');
        console.log(`Somebody dropped an element with id: ${id}`);
    }
    
    return (
        <div>
            <div id="d1" draggable="true" onDragStart={handleDragStart}>Drag me</div>
            <div id="d2" draggable="true" onDragStart={handleDragStart}>Or me!</div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>Drop Area</div>
        </div>
    );
}

export default MinimalExample;
