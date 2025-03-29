type introduction = {
    person: string
    paragraph: string[]
}



//this function converts a paragraph into a form react can interpret
export default function Intro({person, paragraph}: introduction) {
    const lines = []
    for(let index = 0; index < paragraph.length; index++) {
        if(index === 0) {
            lines[index] = <>{person}:<br/>{paragraph[index]}<br/></>
        }
        else{
            lines[index] = <>{paragraph[index]}<br/></>
        }
    }
    const par = <p>{lines}<br/></p>
    return (par)
}