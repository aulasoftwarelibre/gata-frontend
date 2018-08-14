import { Moment } from 'moment';
import * as React from 'react';
import { Card, Icon } from 'semantic-ui-react';

import CardStatus from '@application/Idea/components/IdeaCard/IdeaCardStatus';
import CardTitle from '@application/Idea/components/IdeaCard/IdeaCardTitle';
import IdeaStatus from "@domain/Idea/IdeaStatus";

export interface IdeaCardProps {
    attendees: number;
    capacity?: number;
    comments: number;
    createdAt: Moment;
    createdBy: string;
    description: string;
    handleOnAttendeesClick: () => void;
    handleOnCommentsClick: () => void;
    status: IdeaStatus;
    title: string;
}

export default ({
    attendees,
    capacity,
    comments,
    createdAt,
    createdBy,
    description,
    handleOnAttendeesClick,
    handleOnCommentsClick,
    status,
    title,
}: IdeaCardProps): JSX.Element =>
    <Card fluid>
        <Card.Content>
            <CardStatus status={status} />
            <CardTitle>
                {title}
            </CardTitle>
            <Card.Meta>
                {createdBy}
                <span className="right floated">
                    {createdAt.fromNow()}
                </span>
            </Card.Meta>
            <Card.Description dangerouslySetInnerHTML={{__html: description}} />
        </Card.Content>
        <Card.Content extra>
            <a onClick={handleOnCommentsClick}>
                <Icon name={comments === 1 ? 'comment' : 'comments'} />
                {comments}
            </a>
            <a
                className='right floated'
                onClick={handleOnAttendeesClick}
            >
                <Icon name={attendees === 1 ? 'user' : 'users'} />
                {attendees}{capacity !== null && `/${capacity}`}
            </a>
        </Card.Content>
    </Card>
;