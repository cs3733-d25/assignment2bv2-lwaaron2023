import Form, {form} from "./form.tsx";
import Table, {table} from "./table.tsx";
import List, {list} from "./list.tsx";
import Intro, {introduction} from "./intro.tsx";

type hobby = {
    orderings: string[] //a list of the element types in the order they appear in the form
    forms: form[] //all the forms
    headers: header[] //all the headers
    tables: table[] //all the tables
    lists: list<string>[] //all the lists
    paragraphs: introduction[] //all the paragraphs
    imgs: img[] //all the images

}

type img = {
    src: string; //fills the "src" for the img
    alt: string; //fills the "alt" for the img
    width: number;//fills the "width" for the img
    height: number;//fills the "height" for the img
}

type header = {
    num: number //what type of header
    text: string //the innerText for the header
}

export default function Hobby({orderings, forms, headers, tables, lists, paragraphs, imgs}:hobby){
    const temp = []
    const indices = [0,0,0,0,0,0]
    //if the code doesn't recognize the tag it will put a <br/> tag
    for(let i = 0; i < orderings.length; i++){
        switch(orderings[i]){
            case "form":
                //create a Form to add to the hobby
                if(indices[0] < forms.length) {
                    const f = forms[indices[0]]
                    temp[i] = <Form selects={f.selects} labels={f.labels} textareas={f.textareas} inputs={f.inputs} buttons={f.buttons} paragraphs={f.paragraphs} orderings={f.orderings}></Form>
                    indices[0]++
                }
                break

            case "header":
                //creates a header to add to the hobby
                if(indices[1] < headers.length) {
                    const h = headers[indices[1]]
                    switch(h.num){
                        case 1:
                            temp[i] = <h1>{h.text}</h1>
                            indices[1]++
                            break
                        case 2:
                            temp[i] = <h2>{h.text}</h2>
                            indices[1]++
                            break

                        case 3:
                            temp[i] = <h3>{h.text}</h3>
                            indices[1]++
                            break

                        case 4:
                            temp[i] = <h4>{h.text}</h4>
                            indices[1]++
                            break

                        case 5:
                            temp[i] = <h5>{h.text}</h5>
                            indices[1]++
                            break

                        default:
                            //all other inputs (including incorrectly formatted ones) will be treated as if it was 6
                            temp[i] = <h6>{h.text}</h6>
                            indices[1]++
                            break
                    }
                }
                break

            case "table":
                //creates a Table to add to the hobby
                if(indices[2] < tables.length) {
                    const t = tables[indices[2]]
                    temp[i] = <Table rows={t.rows} headerRow={t.headerRow} headerCol={t.headerCol} caption={t.caption}></Table>
                    indices[2]++
                }
                break

            case "list":
                //creates a List to add to the hobby
                if(indices[3] < lists.length) {
                    const l = lists[indices[3]]
                    temp[i] = <List contents={l.contents} ordered={l.ordered}></List>
                    indices[3]++
                }
                break

            case "paragraph":
                //creates a paragraph to add to the hobby
                if(indices[4] < paragraphs.length) {
                    const p = paragraphs[indices[4]]
                    temp[i] = <Intro person={""} paragraph={p.paragraph}></Intro>
                    indices[4]++
                }
                break

            case "image":
                //creates an img to add to the hobby
                if(indices[5] < paragraphs.length) {
                    const im = imgs[indices[5]]
                    temp[i] = <img src = {im.src} alt = {im.alt} width={im.width} height={im.height}></img>
                    indices[5]++
                }
                break

            default:
                temp[i] = <br/>
        }
    }
    return (<>{temp}</>)
}
