import { DateTime } from "./luxon";

export function diffDate(datefirst, datesecond) {
    datefirst = document.getElementById('datefirst');
    datesecond = document.getElementById('datesecond');
    
    datefirst = DateTime.fromISO(datefirst);
    datesecond = DateTime.fromISO(datesecond);

    if (datefirst > datesecond) {
        // secondDate = [firstDate, firstDate = secondDate][0];
        return datefirst.diff(datesecond ['years', 'mounth', 'days']).toObject();
    }
    if (datesecond > datefirst) {
         return datesecond.diff(datefirst, ['years', 'mounth', 'days']).toObject();
    }
   

}

export const diffHTML = diff => `
<span>
${diff.years? 'Лет'+diff.years:''}
${diff.mounth? 'Месяцев'+diff.mounth:''}
${diff.days? 'Месяцев'+diff.days:''}
</span>
`