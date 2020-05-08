import React from 'react';
import PropTypes from 'prop-types';

const InformationHeader = ({ title, city, description, photoUrl }) => (
    <div className='d-flex'>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </div>
);

InformationHeader.propTypes = {
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
};

export default InformationHeader;
