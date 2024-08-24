export function LoginEmailValidators() {
    const validations = {
        required: "L'email est requis",
        pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Addrèsse email invalide'
        }
    }

    return validations
}

export function LoginPasswordValidators() {
    const validations = {
        required: "Le mot de passe est requis",
        // pattern: {
        //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
        //     message: 'Mot de passe faible'
        // }
    }

    return validations
}

export function CompanyFieldsValidators() {
    const validations = {
        required: "Ce champ est requis",
        maxLength:{
            value: 50,
            message: "Ce champ ne dépasse pas 250 caractères"
        }
    }

    return validations
}

export function ActivitiesValidators() {
    const validations = {
        required: "Ce champ est requis",
        maxLength:{
            value: 300,
            message: "Ce champ ne dépasse pas 250 caractères"
        }
    }

    return validations
}



export function usernameGenerator(first_name) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let randomString = '';
    for (let i = 0; i < 12; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    const username = first_name + "-" + randomString
    return username;
}

export function getRencentInvoices(array) {
    const newArray = [...array]
    newArray.sort((a, b) => new Date(b.invoice_date_time) - new Date(a.invoice_date_time));
    return newArray.slice(0, 10);
}


export function formaterDate(date) {
    const options = { day: 'numeric', month: 'short' };
    return new Date(date).toLocaleDateString('fr-FR', options);
}

export function formaterDateISO(dateISO) {
    const mois = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    
    const dateObj = new Date(dateISO);
    const jour = dateObj.getDate();
    const moisIndex = dateObj.getMonth();
    const annee = dateObj.getFullYear();
  
    return `${jour < 10 ? '0' + jour : jour} ${mois[moisIndex]} ${annee}`;
}