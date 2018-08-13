export type IdeaStatus =
    | 'accepted'
    | 'pending'
    | 'rejected'
;

export const ACCEPTED: IdeaStatus = 'accepted';
export const PENDING: IdeaStatus = 'pending';
export const REJECTED: IdeaStatus = 'rejected';

export default IdeaStatus;