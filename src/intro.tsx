type introduction = {
    person: string
    paragraph: string[]
}

//this function converts a paragraph into a form react can interpret
export default function Intro({person, paragraph}: introduction) {
    const lines = []
    for(let index = 0; index < paragraph.length; index++) {
        if(index === 0 && person !== "") {
            lines[index] = <div>{person}:<br/>{paragraph[index]}<br/></div>
        }
        else{
            lines[index] = <div>{paragraph[index]}<br/></div>
        }
    }
    const par = <p className={"Intro-p"}>{lines}<br/></p>
    return (par)
}