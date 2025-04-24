export interface IUser {
    name: string;
    email: string;
    password?: string;
    hasVoted?: boolean;
}