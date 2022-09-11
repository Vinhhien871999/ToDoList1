import React, { useState, useRef } from 'react'
import SelectValue from './SelectValue';
import TimePiker from './TimePiker';
function DragNDrop({ data }) {

    const [list, setList] = useState(data);
    console.log('list',list)
    const [dragging, setDragging] = useState(false);
    const dragItem = useRef();
    const dragItemNode = useRef();
    const handletDragStart = (e, item) => {
        console.log('Starting to drag', item)
        dragItem.current = item;
        dragItemNode.current = e.target;
        dragItemNode.current.addEventListener('dragend', handleDragEnd)
        setTimeout(() => {
            setDragging(true);
        }, 0)
    }
    const handleDragEnd = (e) => {
        setDragging(false);
        dragItemNode.current.removeEventListener('dragend', handleDragEnd)
        dragItem.current = null;
        dragItemNode.current = null;
    }
    const handleDragEnter = (e, targetItem) => {
        console.log('Entering a drag target', targetItem)
        const currentItem = dragItem.current;
        if (e.target !== dragItemNode.current) {
            console.log('Target is NOT the same as dragged item')
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList))
                newList[targetItem.grpI].items.splice(targetItem.itemI, 0, newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0])
                dragItem.current = targetItem;
                return newList
            })
        }

    }
    const getStyles = (item) => {
        const currentItem = dragItem.current;
        if (currentItem.grpI === item.grpI && currentItem.itemI === item.itemI) {
            return "dnd-item current"
        }
        return "dnd-item"
    }

    return (
        list.map((grp, grpI) => (
            <div
                key={grp.title}
                onDragEnter={dragging && !grp.items.length ? (e) => handleDragEnter(e, { grpI, itemI: 0 }) : null}
                className="dnd-group"
                style={{backgroundColor:`${grp.color}`,color:'black'}}
            >
                <div className='group-title'>{grp.title}</div>
                {grp.items.map((item, itemI) => (
                    <div
                        draggable
                        key={item}
                        onDragStart={(e) => handletDragStart(e, { grpI, itemI })}
                        onDragEnter={dragging ? (e) => { handleDragEnter(e, { grpI, itemI }) } : null}
                        className={dragging ? getStyles({ grpI, itemI }) : "dnd-item"}
                        style={{padding: '20px'}}
                    >
                        {item}
                        <br/>
                        <TimePiker/>
                        <br/>
                        <SelectValue />
                    </div>

                ))}
            </div>
        ))

    )

}

export default DragNDrop;