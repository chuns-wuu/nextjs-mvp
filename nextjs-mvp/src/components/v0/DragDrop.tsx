import { useEffect, useRef } from "react";
import { Button } from "../ui/button";


export default function DragDropItems() {
  const sortableRef = useRef(null);
  let draggedItem = null;

  useEffect(() => {
    const sortableList = sortableRef.current;

    const handleDrag = (e) => {
      if (e.type === "dragstart") {
        draggedItem = e.target;
        setTimeout(() => {
          e.target.style.display = "none";
        }, 0);
      } else if (e.type === "dragend") {
        setTimeout(() => {
          e.target.style.display = "";
          draggedItem = null;
        }, 0);
      } else if (e.type === "dragover") {
        e.preventDefault();
        const afterElement = getDragAfterElement(sortableList, e.clientY);
        if (afterElement == null) {
          sortableList.appendChild(draggedItem);
        } else {
          sortableList.insertBefore(draggedItem, afterElement);
        }
      }
    };

    const getDragAfterElement = (container, y) => {
      const draggableElements = [...container.querySelectorAll("button:not(.dragging)")];
      
      return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      }, { offset: Number.NEGATIVE_INFINITY }).element;
    };

    sortableList.addEventListener("dragstart", handleDrag);
    sortableList.addEventListener("dragend", handleDrag);
    sortableList.addEventListener("dragover", handleDrag);

    return () => {
      sortableList.removeEventListener("dragstart", handleDrag);
      sortableList.removeEventListener("dragend", handleDrag);
      sortableList.removeEventListener("dragover", handleDrag);
    };
  }, []);

  return (
    <div>
        <ul id="sortable" ref={sortableRef}>
        <Button draggable={true} variant="ghost" className="w-full justify-start gap-4">
          <InboxIcon className="w-5 h-5" />
          Inbox
          <div className="flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
            <span className="h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
            <span className="h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
          </div>
        </Button>
        <Button draggable={true} variant="ghost" className="w-full justify-start gap-4">
          <CalendarIcon className="w-5 h-5" />
          Calendar
          <div className="flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
            <span className="h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
            <span className="h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
          </div>
        </Button>
        <Button draggable={true} variant="ghost" className="w-full justify-start gap-4">
          <FileIcon className="w-5 h-5" />
          Files
          <div className="flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
            <span className="h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
            <span className="h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
          </div>
        </Button>
        <Button draggable={true} variant="ghost" className="w-full justify-start gap-4">
          <UsersIcon className="w-5 h-5" />
          Users
          <div className="flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
            <span className="h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
            <span className="h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
          </div>
        </Button>
        <Button draggable={true} variant="ghost" className="w-full justify-start gap-4">
          <SettingsIcon className="w-5 h-5" />
          Settings
          <div className="flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
            <span className="h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
            <span className="h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
          </div>
        </Button>
            
        </ul>
    </div>
  )
}
function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function InboxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}