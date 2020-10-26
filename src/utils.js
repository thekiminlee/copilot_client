import axios from 'axios';

// API url
const PRODUCTION_URL = 'https://copilot-server.herokuapp.com/api/';
const DEV_URL = 'http://localhost:8000/api/'
export const API = PRODUCTION_URL;

/* 
    input: string DateTime
    return: DateTime string formatted to YYYY/MM/DD
*/
export const formatDate = (date) => {
    var extract_date = date.split('T');
    var formatted_date = extract_date[0].replaceAll('-','/')
    return formatted_date
}

export const officeHourExpired = (date) => {
    let currentDate = new Date();
    let officehour_date = Date.parse(date);

    currentDate.setHours(0,0,0,0)
    currentDate.setDate(currentDate.getDate())
    
    return currentDate > officehour_date
}

export const deleteOfficeHour = (id) => {
    let DEL_OFFICEHOUR = API + 'officehour/' + id;
    deleteRelatedQuestions(id);
    axios.delete(DEL_OFFICEHOUR)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
}

const deleteRelatedQuestions = (id) => {
    let DEL_QUESTIONS = API + "questions/" + id;
    axios.delete(DEL_QUESTIONS)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
}