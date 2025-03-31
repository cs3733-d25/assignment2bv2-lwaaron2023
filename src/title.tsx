type team = {
    className: string //the name of the class
    teamNumber: number //the team number
    hobbies: string[] //a list of strings containing the hobbies of the team members
}

//formats the hobbies to look good
function getHobbies(hobbies: string[]) {
    let s: string = ""
    for(let i = 0; i < hobbies.length; i++) {
        //formats the names to be of the form: a, b, ..., and c
        if(i == hobbies.length-2) {
            s+= (hobbies[i]+", and ")
        }
        else if(i<hobbies.length-1) {
            s+=(hobbies[i]+", ")
        }
        else{
            s+=hobbies[i]
        }
    }
    return s
}


export default function Title({className, teamNumber, hobbies}: team) {
    return(
        //Formats the title correctly
        <h1 className={"Title-h1"}>{className} Team {teamNumber} : {getHobbies(hobbies)}</h1>
    )
}