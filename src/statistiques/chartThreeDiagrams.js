
export function compterPaidFalseEtTrue(tableau) {
    const total = tableau.length;
    if (total === 0) {
        return [0, 0];
    }
    
    const countPaidFalse = tableau.filter(obj => obj.paid === false).length;
    const countPaidTrue = tableau.filter(obj => obj.paid === true).length;

    const pourcentagePaidFalse = (countPaidFalse / total) * 100;
    const pourcentagePaidTrue = (countPaidTrue / total) * 100;

    const compterArray = []

    compterArray.push(pourcentagePaidFalse)
    compterArray.push(pourcentagePaidTrue)

    // return { paidFalse: pourcentagePaidFalse, paidTrue: pourcentagePaidTrue };
    return compterArray
}