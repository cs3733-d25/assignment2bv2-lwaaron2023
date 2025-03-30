type introduction = {
    person: string //the name of the person, "" assumes that their name was mentioned already
    paragraph: string[] //a paragraph written where each string is a line
}

//this function converts a paragraph into a form react can interpret
export default function Intro({person, paragraph}: introduction) {
    const lines = []
    for(let index = 0; index < paragraph.length; index++) {
        //writes each line of the paragraph into a container, and makes sure the containers are seperated by a newline
        if(index === 0 && person !== "") {
            //if the name hasn't already been mentioned it will be included
            lines[index] = <div>{person}:<br/>{paragraph[index]}<br/></div>
        }
        else{
            lines[index] = <div>{paragraph[index]}<br/></div>
        }
    }
    //puts all the line containers into a paragraph container
    const par = <p className={"Intro-p"}>{lines}<br/></p>
    return (par)
}