import * as moment from 'moment';
import * as React from 'react';
import { Card, Icon } from 'semantic-ui-react';

import Idea from '@domain/Idea/Idea';
import CardStatus from '@application/Idea/components/IdeaCard/IdeaCardStatus';
import CardTitle from '@application/Idea/components/IdeaCard/IdeaCardTitle';

export interface IdeaCardProps {
    handleOnAttendeesClick: () => void;
    handleOnCommentsClick: () => void;
    handleOnExitClick: () => void;
    handleOnJoinClick: () => void;
    idea: Idea;
}

export default ({
    handleOnAttendeesClick,
    handleOnCommentsClick,
    idea: {
        attendees,
        capacity,
        comments,
        createdAt,
        createdBy: { firstName, lastName },
        description,
        status,
        title,
    },
}: IdeaCardProps): JSX.Element =>
    <Card fluid>
        <Card.Content>
            <CardStatus status={status} />
            <CardTitle>
                {title}
            </CardTitle>
            <Card.Meta>
                {`${firstName} ${lastName}`}
                <span className="right floated">
                    {moment(createdAt).fromNow()}
                </span>
            </Card.Meta>
            <Card.Description dangerouslySetInnerHTML={{__html: description}} />
        </Card.Content>
        <Card.Content extra>
            <a onClick={handleOnCommentsClick}>
                <Icon name={comments.length === 1 ? 'comment' : 'comments'} />
                {comments.length}
            </a>
            <a
                className='right floated'
                onClick={handleOnAttendeesClick}
            >
                <Icon name={attendees.length === 1 ? 'user' : 'users'} />
                {attendees.length}{capacity && `/${capacity}`}
            </a>
        </Card.Content>
    </Card>
;