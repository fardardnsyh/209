export function sortByMonth(tableau) {
    const mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

    const resultats = {};
    mois.forEach(m => {
        resultats[m] = { payes: 0, impayes: 0 };
    });

    tableau.forEach(obj => {
        const moisObjet = new Date(obj.invoice_date_time).getMonth();
        const moisNom = mois[moisObjet];

        if (obj.paid === true) {
            resultats[moisNom].payes++;
        } else {
            resultats[moisNom].impayes++;
        }
    });

    return resultats;
}