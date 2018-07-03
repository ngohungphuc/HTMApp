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
            searchStr: "",
        }
    }

    componentDidMount() {
        this.setState({rooms: data});
    }

    onSearch = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const {searchStr, rooms} = this.state;
        let filteredRoom = rooms.filter((item) => {
            return item
                .name
                .toLowerCase()
                .search(searchStr.toLowerCase()) !== -1;
        });

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
                <div>{filteredRoom.map(room => (
                        <CardDeck key={room.name}>
                            <CardDetail name={room.name} description={room.description}></CardDetail>
                        </CardDeck>
                    ))}</div>
            </div>
        )
    }
}

export default CardContainer