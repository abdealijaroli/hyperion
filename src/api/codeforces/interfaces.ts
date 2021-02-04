export interface ContestResponseSchema {
    id: number;
    name: string;
    type: string;
    phase: string;
    frozen: boolean;
    durationSeconds: number;
    startTimeSeconds: number;
    relativeTimeSeconds: number;
}
export interface UpcomingContestResponse {
    result: Array<ContestResponseSchema>;
}

export interface RunningContestResponse {
    result: Array<ContestResponseSchema>;
}
