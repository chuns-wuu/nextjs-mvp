"use client";

import RCAForm from "@/components/v0/RCAForm";
import ServiceForm from "@/components/v0/ServiceForm";
import TimelineForm from "@/components/v0/TimelineForm";
import TitleForm from "@/components/v0/TitleForm";
import { redirect, useParams, useRouter } from "next/navigation";

export default function NewStep() {
  const params = useParams();
  const stepId = params.stepId;
  if(stepId == "0") 
    return <TitleForm />
  else if(stepId == "1")
    return <ServiceForm />
  else if(stepId == "2")
    return <TimelineForm />
  else if(stepId == "3")
    return <RCAForm />
  else
    redirect('/error')
}