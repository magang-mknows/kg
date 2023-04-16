import { TMetaResponse } from "../types";

export type TSimulationItem = {
    id: string
    meeting_type: string
    schedules: string[]
    place: string
    topic: string
    student_id: string
    "assessor.id": string
    "assessor.name": string
    status: string
    picked_schedule: any
}
  

  export type TSimulationResponse = TMetaResponse<TSimulationItem>
  