import React from 'react';

export const Loading = () => {
    return (
        <div className="col">
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw bg-warning text-dark" />
            <p>Loading up! ...</p>
        </div>
    );
};