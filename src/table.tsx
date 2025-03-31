
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
    const max = rows.reduce((temp1, row:string[]) =>{
        const r = row.reduce((temp2:number, value:string)=>{
        return Math.max(temp2, value.length)},0)
        return Math.max(temp1, r)
    },0)

    const ret = []
    const temp = [] //caption "row" of table
    for(let i = 0; i < rows[0].length; i++){
        if(i === Math.floor(rows[0].length/2)){
            temp[i] = <h3 style = {{width:max/2+"em"}} className={"Table-empty-cell"}>{caption}</h3>
        }
        else{
            temp[i] = <div style = {{width:max/2+"em"}} className={"Table-empty-cell"}></div>
        }
    }
    ret[0] = temp //setting first row to be the caption
    for(let i=1; i<rows.length; i++){

        const temp1 = []
        for(let j=0; j<rows[0].length; j++){
            const temp2 = rows[i-1][j]
            //creates a cell with appropriate formatting
            temp1[j] = <div style = {{width:max/2+"em"}} className = {temp2!=""?((headerRow === i-1 || headerCol === j)? "Table-important-cell":"Table-cell"): "Table-empty-cell"}>{
                temp2
            }</div>
        }
        //Puts all the cells in a table row into a container for that row
        ret[i] = <div className = {"Table-row"}>{temp1}</div>
    }
    return(ret)




}