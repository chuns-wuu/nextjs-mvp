import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Progress } from "../ui/progress";
import DragDropItems from "./DragDrop";
import Container from "./example";

export default function TimelineForm() {
  return (
    <div className="flex flex-col items-center w-full">
      <Progress value={66} />
      <div className="flex flex-row items-center justify-between w-1/2 py-6 ">
        <p className="max-w-[600px] mx-auto md:text-xl"> What were something you or others have tried? </p>
        <Button type="submit" className="flex items-center gap-2">
            <span>Continue</span>
        </Button>
      </div>
      <div className="flex flex-row justify-center items-start gap-8 w-full h-screen">
        <DragDropItems />
        <DndProvider backend={HTML5Backend}>
          <Container />
				</DndProvider>
        
      </div>
    </div>
  )
}