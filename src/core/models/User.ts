export default interface User {
    _id: string;
    mail?: string;
    bio?: string
    birthday?: Date;
    firstName?: string;
    lastName?: string;

    password?: string;
}