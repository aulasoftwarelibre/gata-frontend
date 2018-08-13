import * as React from 'react';
import { Label, SemanticCOLORS, SemanticShorthandContent } from 'semantic-ui-react';

import IdeaStatus, { ACCEPTED, PENDING, REJECTED } from '@domain/Idea/IdeaStatus';

export interface IdeaCardStatusProps {
    status: IdeaStatus;
}

export default ({
    status,
}: IdeaCardStatusProps): JSX.Element => {
    let color: SemanticCOLORS;
    let content: SemanticShorthandContent;

    switch(status) {
        case ACCEPTED:
            color = 'green';
            content = 'Aprobado';
            break;
        default:
        case PENDING:
            color = 'grey';
            content = 'Pendiente';
            break;
        case REJECTED:
            color = 'red';
            content = 'Rechazada';
            break;
    }

    return(
        <Label
            color={color}
            content={content}
            ribbon='right'
        />
    );
};