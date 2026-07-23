import html2pdf from 'html2pdf.js';

export function formatDateDDMMYY(dateString) {
    if (!dateString) {
        return '';
    }

    const parts = dateString.split('-');
    if (parts.length !== 3) {
        return dateString;
    }

    return parts[2] + '/' + parts[1] + '/' + parts[0].slice(2);
}

export function getDhakaDate(offsetDays = 0) {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const dhakaTime = new Date(utc + (3600000 * 6));
    dhakaTime.setDate(dhakaTime.getDate() + offsetDays);
    return dhakaTime;
}

export function downloadPDF(elementId, fileName) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const previousShadow = element.style.boxShadow;
    const previousBorder = element.style.border;
    element.style.boxShadow = 'none';
    element.style.border = 'none';

    const options = {
        margin: 0,
        filename: fileName,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, scrollX: 0, scrollY: 0 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save().then(() => {
        element.style.boxShadow = previousShadow;
        element.style.border = previousBorder;
    });
}
