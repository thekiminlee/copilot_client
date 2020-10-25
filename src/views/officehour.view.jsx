import React, { Component } from 'react';
import { Form, Button, FormGroup } from 'react-bootstrap';
import axios from 'axios';

import Question from '../components/Question.component';
import Empty from '../components/Empty.component';

import { API, officeHourExpired, formatDate, deleteOfficeHour } from '../utils'


const GET_OFFICEHOUR = API + 'officehour'
const GET_QUESTIONS = GET_OFFICEHOUR + '/questions';
const POST_QUESTIONS = API + 'officehour'

export default class OfficeHour extends Component {
    constructor(props){
        super(props)
        this.state = {
            questions: [],
            name: '',
            email: '',
            question: '',
            officehour_name: '',
            officehour_date: '',
            officehour_id: ''
        }
    }

    componentDidMount = () => {
        axios.get(GET_QUESTIONS + "/" + this.props.match.params.id)
            .then(resp => this.setState({ questions: resp.data }))
            .catch(err => console.log(err))

        axios.get(GET_OFFICEHOUR + "/" + this.props.match.params.id)
            .then(resp => this.setState({officehour_name: resp.data.name, officehour_date: resp.data.date, officehour_id: resp.data._id }))
            .catch(err => console.log(err))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var question = {
            'author': this.state.name,
            'email': this.state.email,
            'question': this.state.question,
            'office_hour_id': this.props.match.params.id
        }

        axios.post(POST_QUESTIONS + '/' + question['office_hour_id'], question)
            .then(resp => {
                alert('Question submitted');
                window.location.reload();
            })
            .catch(err => {
                alert("Question submission failed");
                console.log(err)
            })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    renderQuestions() {
        if (this.state.questions.length === 0) 
            return <Empty message='No questions for this office hour'/>
        return (
            this.state.questions.map(question => {
                return <Question question={question} />
            })
        )
    }
    
    renderEmpty() {
        return (
            <div className='container'>
                <Empty message='Office hour expired'/>
            </div>
        )
    }

    renderContent() {
        return (
            <div className="container">

                <div className="row full">
                    {/* Question submission section */}
                    <section className="col question-form">
                        <Form onSubmit={this.handleSubmit}>
                            <div className='header-label'>Office Hour</div>
                            <div className='title-label'>{this.state.officehour_name}</div>
                            <div className='date-label'>{formatDate(this.state.officehour_date)}</div>
                            <FormGroup controlId="studentInfo">
                                <div className='row full'>
                                    <div className='col'>
                                        <Form.Label className="form-label">Name:</Form.Label>
                                        <Form.Control value={this.state.name} name='name' onChange={this.handleChange} type='text' placeholder='Enter name'/>                                
                                    </div>
                                    <div className='col'>
                                        <Form.Label className="form-label">Email:</Form.Label>
                                        <Form.Control value={this.state.email} name='email' onChange={this.handleChange} type='email' placeholder="Enter email"/>
                                    </div>
                                </div>
                            </FormGroup>
                            <FormGroup controlId="question">
                                <Form.Label className="form-label">Question:</Form.Label>
                                <Form.Control value={this.state.question} name='question' onChange={this.handleChange} as='textarea' style={{ height: 200}}/>
                            </FormGroup>
                            <Button variant='primary' type='submit' style={{marginTop:20}}>Submit</Button>
                        </Form>
                        
                    </section>

                    {/* Questions list section */}
                    <section className="col">
                        { this.renderQuestions() }
                    </section>
                </div>
            </div>
        )
    }

    render() {
        if (officeHourExpired(this.state.officehour_date)) {
            deleteOfficeHour(this.state.officehour_id);
            return this.renderEmpty()
        } else 
            return this.renderContent();
    }

}