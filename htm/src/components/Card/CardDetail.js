import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, CardHeader, CardBody, CardText } from 'reactstrap';

const CardDetail = props => {
    return (
        <Card>
            <CardHeader>{props.name}</CardHeader>
            <CardBody>
                <CardText>{props.description}</CardText>
                <Button>Read more</Button>
            </CardBody>
        </Card>
    );
};

CardDetail.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default CardDetail;