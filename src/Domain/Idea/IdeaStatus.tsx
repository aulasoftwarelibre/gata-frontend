export type IdeaStatus = 'accepted' | 'pending' | 'rejected';

export const accepted: IdeaStatus = 'accepted';
export const pending: IdeaStatus = 'pending';
export const rejected: IdeaStatus = 'rejected';
export const values: IdeaStatus[] = [accepted, pending, rejected];

export default IdeaStatus;