import User from '../User/User';

export default interface Comment {
    author: User;
    text: string;
}