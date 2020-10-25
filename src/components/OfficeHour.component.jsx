import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
            <div className='list-container' style={{fontSize: 16}}>
                <Link to={'/officehour/' + this.state._id} style={{textDecoration: 'none', color: "black"}}>
                    <div>
                        {this.state.name} <br/>{formatDate(this.state.date)}
                    </div>
                </Link>            
            </div>
        )
    }
}

export default OfficeHour;