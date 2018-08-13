import * as React from 'react';

import { Icon, Pagination } from 'semantic-ui-react';

export interface IdeasPaginationProps {
    currentPage?: number;
    handleOnPageChange: (page: number) => void;
    totalPages: number;
}

export default ({
    currentPage,
    handleOnPageChange,
    totalPages
}: IdeasPaginationProps): JSX.Element =>
    <Pagination
        defaultActivePage={currentPage || 1}
        ellipsisItem={{content: <Icon name='ellipsis horizontal' />, icon: true}}
        firstItem={{content: <Icon name='angle double left' />, icon: true}}
        lastItem={{content: <Icon name='angle double right' />, icon: true}}
        nextItem={{content: <Icon name='angle right' />, icon: true}}
        onPageChange={(event, { activePage: page }) => handleOnPageChange(Number(page))}
        prevItem={{content: <Icon name='angle left' />, icon: true}}
        totalPages={totalPages}
    />
;