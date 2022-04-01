import React from 'react';

const AppDescription = () => {
    const description = 'A simple gif searcher written on React ';

    return (
        <div className="Sub-Title-Container">
            <h3>
                {description}
                <i className="fab fa-react"></i>
            </h3>
        </div>
    );
};

export default React.memo(AppDescription);
