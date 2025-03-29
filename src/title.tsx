type team = {
    className: string
    teamNumber: number
    hobbies: string[]
}

//formats the hobbies to look good
function getHobbies(hobbies: string[]) {
    let s: string = ""
    for(let i = 0; i < hobbies.length; i++) {
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
        <h1 className={"Title-h1"}>{className} Team {teamNumber} : {getHobbies(hobbies)}</h1>
    )
}