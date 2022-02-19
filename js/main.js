import { diffDate, diffHTML } from "./calc";
import { formatError } from "./utils";


const dateCalcForm = document.getElementById('datecalc');
const dateCalcResult = document.getElementById('result');

dateCalcForm.addEventListener('submit', calcDate);

function calcDate(event) {
    

    dateCalcResult.innerHTML = '';
    event.preventDefault();
    
    let { datefirst, datesecond } = event.target.elements;
    datefirst = datefirst.value, datesecond = datesecond.value;

    if (datefirst && datesecond) {
        const diff = diffDate(datefirst, datesecond);
        dateCalcResult.innerHTML = diffHTML(diff);
    } else {
        dateCalcResult.innerHTML = formatError('Для расчета нужно ввести обе даты'); 
    }
}