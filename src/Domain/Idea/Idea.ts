import Comment from '@domain/Comment/Comment';
import IdeaStatus from '@domain/Idea/IdeaStatus';
import User from '@domain/User/User';

export default interface Idea {
    attendees: User[];
    capacity: number;
    comments: Comment[];
    createdAt: Date;
    createdBy: User;
    description: string;
    status: IdeaStatus;
    title: string;
};