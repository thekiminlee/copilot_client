import React, { Component } from 'react';
import OfficeHour from '../components/OfficeHour.component';
import Empty from '../components/Empty.component'

import axios from 'axios';
import { API } from '../utils'

const GET_OFFICEHOUR = API + 'officehours'

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
        if (this.state.officehours.length === 0 ){
            return <Empty message="No office hours posted"/>       
        }
        return (            
            this.state.officehours.map(officehour => {
                return <OfficeHour name={officehour.name} date={officehour.date} _id={officehour._id}/>
            })
        )
    }


    render() {
        return (
            <div className='container'>
                <div>
                    { this.renderOfficeHour() }
                </div>
            </div>
            
        );
    }

}