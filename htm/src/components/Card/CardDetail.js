import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button
} from 'reactstrap';

const CardDetail = props => {
    return (
        <Card className="roomInfo">
            <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"/>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
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