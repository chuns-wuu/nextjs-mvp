import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { Task } from "./Task";

import "./dnd.css"

export const Column = ({ tasks, onDetailsClick, onCheckClick }) => {
  return (
    <div className="dnd-column">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} title={task.title} onDetailsClick={onDetailsClick} onCheckClick={onCheckClick} />
        ))}
      </SortableContext>
    </div>
  );
};