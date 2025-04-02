type label = {
    intended: string //fills the "for" field of a label
    text: string //fills the innerText of the label
}

type input = {
    type: string //fills the "type" field of a input
    name: string //fills the "name" field of a input
    value: string //fills the "value" field of a input
    id: string //fills the "id" field of a input
}

type select = {
    name: string //fills the "name" field of a select
    id: string //fills the "id" field of a select
    options: option[] //used to create the options within the select element
}

type option = {
    value: string //fills the "value" field of a option
    text: string //fills the innerText of the option
}

type button = {
    type: string //fills the "type" field of a button
    value: string //fills the "value" field of a button
    text: string //fills the innerText of the button
}

type textarea = {
    rows: number //fills the "rows" field of a textarea
    cols: number //fills the "type" field of a textarea
    id: string
}

type paragraph = {
    text: string //fills the innerText of the paragraph
}

export type form = {
    /*
    Forms include:
    1) label
    2) input
    3) p
    4) select
    5) textarea
    6) button
     */
    orderings: string[] //a list of the element types in the order they appear in the form, see the switch statements for how strings are interpretted
    labels: label[] //all the labels
    inputs: input[] //all the inputs
    selects: select[] //all the selects
    buttons: button[] //all the buttons
    textareas: textarea[] //all the text areas
    paragraphs: paragraph[] //all the paragraphs
}

export default function Form({orderings, labels, inputs, selects, buttons, textareas, paragraphs}:form){
    const temp = []
    const indices = [0,0,0,0,0,0]
    //if the code doesn't recognize the tag it will put a <br/> tag
    for(let i = 0; i < orderings.length; i++){
        switch(orderings[i]){
            case "label":
                //creates a label that will be added to the form
                if(indices[0] < labels.length) {
                    const l = labels[indices[0]]
                    temp[i] = <label htmlFor={l.intended}>{l.text}</label>
                    indices[0]++
                }
                break

            case "input":
                //creates a input that will be added to the form
                if(indices[1] < inputs.length) {
                    const inp = inputs[indices[1]]
                    temp[i] = <input type={inp.type} name ={inp.name} value = {inp.value} id = {inp.id}></input>
                    indices[1]++
                }
                break

            case "select":
                //creates a select that will be added to the form
                if(indices[2] < selects.length) {
                    const s = selects[indices[2]]
                    const temp2 = []
                    for(let j = 0; j < s.options.length; j++){
                        temp2[j] = <option value = {s.options[j].value}>{s.options[j].text}</option>
                    }
                    temp[i] = <select name = {s.name} id = {s.id}>{temp2}</select>
                    indices[2]++
                }
                break

            case "button":
                //creates a button that will be added to the form
                if(indices[3] < buttons.length) {
                    const b = buttons[indices[3]]
                    temp[i] = <button type = {(b.type === "submit" ||b.type === "reset" || b.type === "button")?b.type:undefined} value={b.value} >{b.text}</button>
                    indices[3]++
                }
                break

            case "textarea":
                //creates a textarea that will be added to the form
                if(indices[4] < textareas.length) {
                    const ta = textareas[indices[4]]
                    temp[i] = <textarea rows ={ta.rows} cols ={ta.cols} id={ta.id}></textarea>
                    indices[4]++
                }
                break

            case "paragraph":
                //creates a paragragh that will be added to the form
                if(indices[5] < paragraphs.length) {
                    const p = paragraphs[indices[5]]
                    temp[i] = <p>{p.text}</p>
                    indices[5]++
                }
                break

            default:
                temp[i] = <br/>
        }
    }
    return (<div className={"Form-container"}>
        <form className={"Form"}>{temp}</form>
    </div>)
}
