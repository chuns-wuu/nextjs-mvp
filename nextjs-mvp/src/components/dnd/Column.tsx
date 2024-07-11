import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { Task } from "./Task";

import "./dnd.css"

// Define the type for a single task
interface Tasks {
  id: string;
  title: string;
  // Add other task properties here
}

// Define the props interface
interface ColumnProps {
  tasks: Tasks[];
  onDetailsClick: (taskId: string) => void;
  onCheckClick: (taskId: string, checked: boolean) => void;
}


export const Column: React.FC<ColumnProps> = ({ tasks, onDetailsClick, onCheckClick }) => {
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