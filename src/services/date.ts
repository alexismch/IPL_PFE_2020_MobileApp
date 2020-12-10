const formatDate = (date : string | undefined) => {
    if(date){
        const tempDate = new Date(date)
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return "Le "+tempDate.toLocaleDateString('fr-FR',options) +" à " + tempDate.getHours()+"h"+tempDate.getMinutes()
    }
}

export default formatDate;