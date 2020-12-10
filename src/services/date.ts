const formatDate = (date : string | undefined, heure : boolean) => {
    if(date){
        const tempDate = new Date(date)
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        if(heure)
            return "Le "+tempDate.toLocaleDateString('fr-FR',options) +" à " + tempDate.getHours()+"h"+tempDate.getMinutes()
        else
            return "Le "+tempDate.toLocaleDateString('fr-FR',options)
    }
}

export default formatDate;