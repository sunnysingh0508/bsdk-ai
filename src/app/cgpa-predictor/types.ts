export type Grade = "O" | "A+" | "A" | "B+" | "B" | "C" | "P" | "F";

export const GRADE_POINTS: Record<Grade, number> = {
    "O": 10,
    "A+": 9,
    "A": 8,
    "B+": 7,
    "B": 6,
    "C": 5,
    "P": 4,
    "F": 0
};

export interface Subject {
    id: string;
    name: string;
    grade: Grade;
    credits: number;
}
