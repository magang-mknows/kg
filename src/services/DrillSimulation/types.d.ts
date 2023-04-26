import { TMetaResponse } from "../types";

export type TSimulationItem = {
  id: string
  meeting_type: string
  place: string
  topic: string
  status: string
  assessor_name: string
  picked_schedule: any
  schedules: Schedule[]
}

export type Schedule = {
  date: string
  times: string[]
}  

export type TSimulationResponse = TMetaResponse<TSimulationItem>
  