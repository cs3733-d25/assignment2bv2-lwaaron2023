
export type table = {
    //header row is the row that is considered the header, while header column is the column that is considered the header
    //set to -1 to indicate no header
    rows: string[][] //represents the contents of all cells of the table
    headerRow: number //the row that is considered the header for the table, -1 means no header
    headerCol: number //the column that is considered the header for the table, -1 means no header
    caption: string
}

export default function Table({rows, headerRow, headerCol, caption}:table){
    //finds the maximum length of strings to be stored in cells so that all cells are created with equal length


    const ret = []
    let conCap = false
    let i = 0
    if(caption !== "") {
        ret[0] = caption //setting first row to be the caption
        i++
        conCap = true
    }
    for(; i<rows.length; i++){

        const temp = []
        for(let j=0; j<rows[0].length; j++){
            if(headerRow === (conCap?i:i-1) && headerCol === j){
                temp[j] = <th>{rows[i][j]}</th>
            }
            else{
                temp[j] = <td>{rows[i][j]}</td>
            }
        }
        //Puts all the cells in a table row into a container for that row
        ret[i] = <tr>{temp}</tr>
    }
    return(<table className={"collapse"}>{ret}</table>)




}