import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// import "./dnd.css"
import { Button } from "../ui/button";

export const Task = ({ id, title, onDetailsClick }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };


  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="dnd-task"
    >
      <input type="checkbox" className="dnd-checkbox" />
      {title}
      <Button variant="outline" size="sm" onClick={() => onDetailsClick(title)}> Details </Button>
    </div>
  );
};