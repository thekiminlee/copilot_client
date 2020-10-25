import React, { Component } from 'react';
import OfficeHour from '../components/OfficeHour.component';

import axios from 'axios';

const GET_OFFICEHOUR = 'http://localhost:8000/api/officehours'

export default class OfficeHours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            officehours: []
        }
    }

    componentDidMount = () => {
        axios.get(GET_OFFICEHOUR).then(
            res => {this.setState( { officehours: res.data } ); }).catch(
            err => console.log(err)
        );
    }

    renderOfficeHour() {
        return (
            this.state.officehours.map(officehour => {
                return <OfficeHour name={officehour.name} date={officehour.date} _id={officehour._id}/>
            })
        )
    }


    render() {
        return (
            <div>
                { this.renderOfficeHour() }
            </div>
            
        );
    }

}