import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import SideDetailForm from "./SideDetailForm";
import { Column } from "../dnd/Column";
import React, { forwardRef, useImperativeHandle, useState } from 'react';

class MyPointerSensor extends PointerSensor {
  static activators = [
    {
      eventName: 'onPointerDown',
      handler: ({nativeEvent: event}) => {
        if (
          !event.isPrimary ||
          event.button !== 0 ||
          isInteractiveElement(event.target)
        ) {
          return false;
        }

        return true;
      },
    },
  ];
}

function isInteractiveElement(element) {
  const interactiveElements = [
    'button',
    'input',
    'textarea',
    'select',
    'option',
  ];

  if (interactiveElements.includes(element.tagName.toLowerCase())) {
    return true;
  }

  return false;
}

const TimelineDetail = forwardRef(function TimelineDetail({newAction, cancelNewAction, tasks, setTasks, deletedTasks}, ref: React.Ref<any>) {

  const sensors = useSensors(
    useSensor(MyPointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] =  useState<Array<string>>([]);

  const handleDetailsClick = (item) => {
    setSelectedItem(item);
    cancelNewAction();
  };

  const handleCheckClick = (item, isChecked) => {
    if (isChecked) {
      setCheckedItems([...checkedItems, item])
    } else {
      setCheckedItems(checkedItems.filter((t) => t !== item))
    }
  }


  useImperativeHandle(ref, () => {
    return {
      handleNewAction() {
        setSelectedItem(null)
      },
      handleDelete() {
        return checkedItems;
      }
    }
  }, [checkedItems]);

  return (
    <div className="flex flex-row items-start gap-8">
        <div className="h-screen w-[600px]">
          <DndContext
              sensors={sensors}
              collisionDetection={closestCorners}
              onDragEnd={handleDragEnd}
            >
              <Column id="toDo" tasks={tasks} onDetailsClick={handleDetailsClick} onCheckClick={handleCheckClick}/>
            </DndContext>
            
        </div>
        <div className="items-start h-screen w-[600px]">
          {tasks.map((item, index) => (
              <SideDetailForm selectedItem={selectedItem} item={item} newAction={newAction} handleNewAction={cancelNewAction}/>
          ))}
          <SideDetailForm selectedItem="" item="" newAction={newAction} handleNewAction={cancelNewAction}/>
        </div>
    </div>
  )
});

export default TimelineDetail;