export interface Jsend<T> {
    message: string;
    stack: string[];
    status: string;
    data?: T;
    code: number;
}