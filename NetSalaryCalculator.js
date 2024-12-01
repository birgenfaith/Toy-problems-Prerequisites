function calculateNetSalary(basicSalary, benefits) {
let grossSalary = basicSalary + benefits;

    let paye = calculatePAYE(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(grossSalary);

    let netSalary = grossSalary - paye - nhif - nssf;

    return {
        grossSalary,
        paye,
        nhif,
        nssf,
        netSalary
    }
}
 
function calculatePAYE(salary) {
    if (salary <= 24000) {
        return salary * 0.1;
    } else if (salary <= 32333) {
        return salary * 0.25;
    } else {
        return salary * 0.3;
    }
}

function calculateNHIF(salary) {
    // Simplified for demonstration
    if (salary <= 5999) return 150;
    if (salary <= 7999) return 300;
    return 400;
}

function calculateNSSF(salary) {
    return Math.min(salary * 0.06, 1800); 
}