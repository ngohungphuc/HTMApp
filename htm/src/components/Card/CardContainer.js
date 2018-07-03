import React, {Component} from 'react'
import {CardDeck, Alert} from 'reactstrap';
import data from '../../data/properties.json';

import CardDetail from "./CardDetail";
import CustomInput from '../Input/CustomInput';

class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            searchStr: ""
        }
    }

    componentDidMount() {
        this.setState({rooms: data});
    }

    renderRoomInfo() {
        return this
            .state
            .rooms
            .map(room => (
                <CardDeck key={room.name}>
                    <CardDetail name={room.name} description={room.description}></CardDetail>
                </CardDeck>
            ));
    }

    onSearch = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const {searchStr} = this.state;

        return (
            <div>
                <Alert color="dark">
                    Search for room today
                </Alert>
                <div>
                    <CustomInput
                        name="searchStr"
                        type="input"
                        onChange={searchStr => this.onSearch(searchStr)}
                        value={searchStr}/>
                </div>
                <div>{this.renderRoomInfo()}</div>
            </div>
        )
    }
}

export default CardContainer