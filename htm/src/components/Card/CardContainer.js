import React, { Component } from 'react'
import { CardDeck, Alert } from 'reactstrap';
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

    onSearch = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const {searchStr, rooms} = this.state;
        let filteredRoom = rooms.filter((item) => {
            return (item.name.toLowerCase().search(searchStr.toLowerCase()) !== -1
                || item.description.toLowerCase().search(searchStr.toLowerCase()) !== -1);
        });

        return (
            <div id="cardContainer">
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
                <div>
                    {filteredRoom.length === 0
                        ? <Alert id="emptyAlert" color="danger">
                                Your search criteria return no result!
                            </Alert>
                        : null}
                </div>
                <div className="row" id="roomList">
                    {filteredRoom.map(room => (
                        <div className="col-6 col-md-4" key={room.name}>
                            <CardDeck className="cardList">
                                <CardDetail name={room.name} description={room.description}></CardDetail>
                            </CardDeck>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default CardContainer