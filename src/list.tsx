import './list.css'

type list<T = string | number | boolean> = {
    contents: T[]
    ordered: boolean
}

export default function List({contents, ordered}:list<string|number|boolean>){
    const lines = []
    for(let index = 0; index < contents.length; index++) {
        if(index === 0){
            lines[index] = <div className = "List-first">{"\t"+(ordered?((index+1)+"."):"\u2022")+" "+contents[index]}<br/></div>
        }
        else{
            lines[index] = <div>{(ordered?((index+1)+"."):"\u2022")+" "+contents[index]}<br/></div>
        }
    }
    const par = <p className={"List-p"}>{lines}<br/></p>
    return (par)
}