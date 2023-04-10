import { MetaTypes } from "../types";

export type TLeaderboard = {
    student_name: string
    subject_count: string
    average_score: number
};

export type TLeaderboardResponse = MetaTypes<TLeaderboard>;


  