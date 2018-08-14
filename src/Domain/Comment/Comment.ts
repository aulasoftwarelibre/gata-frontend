import User from '@domain/User/User';

export default interface Comment {
    createdBy: User;
    createdAt: Date;
    text: string;
};