import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import { Column } from "../dnd/Column";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Progress } from "../ui/progress";
import { Separator } from "@/components/ui/separator"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react";
import SideDetailForm from "./SideDetailForm";
import { Input } from "../ui/input";
import Link from "next/link";

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

export default function TimelineForm() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Rollback changes" },
    { id: 2, title: "Communicate with monitoring team" },
    { id: 3, title: "Scale web tier" },
    { id: 4, title: "Invalidate cache" },
  ]);

  const addTask = (title) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, title }]);
  };

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


  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <Progress value={66} />
      <div className="flex flex-row items-center justify-between w-1/2 py-6 ">
        <p className="max-w-[600px] mx-auto md:text-xl"> What were something you or others have tried? </p>
        <Button type="submit" className="flex items-center gap-2">
            <span>Continue</span>
        </Button>
      </div>
      <div className="flex flex-col w-full pl-9 mr-auto">
        <div className="flex w-1/2 justify-between mr-auto">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                <span>Incident start time</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <div className="rounded-md border p-4">
                <div className="grid grid-cols-2 gap-4">
                  <Calendar mode="single" initialFocus />
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Input
                      id="time"
                      type="time"
                      className="h-10 rounded-md border border-gray-300 px-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-500"
                    />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Button variant="outline" size="sm" onClick={handleDetailsClick}>
            New action
          </Button>
        </div>
        <div className="flex items-start my-6 justify-items-start mr-auto border-t border-gray-300 dark:border-gray-600 w-1/2 h-1" />
      </div>  
      <div className="flex flex-row gap-20 h-screen">
        <div className="items-start h-screen w-[600px]">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd}
          >
            <Column id="toDo" tasks={tasks} showDetails={showDetails} onDetailsClick={handleDetailsClick}/>
          </DndContext>
          
        </div>
        <div className="items-start h-screen w-[600px]">
          <SideDetailForm showDetails={showDetails} />
        </div>
      </div>
    </div>
  )
}

function CalendarDaysIcon(props) {
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
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}