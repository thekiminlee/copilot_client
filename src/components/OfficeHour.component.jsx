import React, { Component } from 'react';
import '../utils';
import { formatDate } from '../utils';

class OfficeHour extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: props.name,
            date: props.date,
            _id: props._id
        }
    }

    render() {
        return (
            <div>
                {this.state.name} {formatDate(this.state.date)} {this.state._id}
            </div>
        )
    }
}

export default OfficeHour;