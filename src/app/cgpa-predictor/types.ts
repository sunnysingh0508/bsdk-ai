export type Grade =
    | "O"
    | "A+"
    | "A"
    | "B+"
    | "B"
    | "C"
    | "D"
    | "F";

export interface Subject {
    id: string;
    name: string;
    credits: number;
    grade: Grade;
}

export const GRADE_POINTS: Record<Grade, number> = {
    O: 10,
    "A+": 9,
    A: 8,
    "B+": 7,
    B: 6,
    C: 5,
    D: 4,
    F: 0,
};
