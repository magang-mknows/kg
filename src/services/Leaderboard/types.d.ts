import { TMetaResponse } from "../types";

export type TLeaderboard = {
    student_name: string
    subjectCount: string
    averageScore: number
};

export type TLeaderboardResponse = TMetaResponse<TLeaderboard>;

