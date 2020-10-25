
/* 
    input: string DateTime
    return: DateTime string formatted to YYYY/MM/DD
*/
export const formatDate = (date) => {
    var extract_date = date.split('T');
    var formatted_date = extract_date[0].replaceAll('-','/')
    return formatted_date
}
