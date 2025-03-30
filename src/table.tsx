
type table = {
    //header row is the row that is considered the header, while header column is the column that is considered the header
    //set to -1 to indicate no header
    rows: string[][] //represents the contents of all cells of the table
    headerRow: number //the row that is considered the header for the table, -1 means no header
    headerCol: number //the column that is considered the header for the table, -1 means no header
}

export default function Table({rows, headerRow, headerCol}:table){
    //finds the maximum length of strings to be stored in cells so that all cells are created with equal length
    const max = rows.reduce((temp1, row:string[]) =>{
        const r = row.reduce((temp2:number, value:string)=>{
        return Math.max(temp2, value.length)},0)
        return Math.max(temp1, r)
    },0)

    const ret = []

    for(let i=0; i<rows.length; i++){

        const temp1 = []
        for(let j=0; j<rows[0].length; j++){
            const temp2 = rows[i][j]
            //creates a cell with appropriate formatting
            temp1[j] = <div style = {{width:max+"em"}} className = {temp2!=""?((headerRow === i || headerCol === j)? "Table-important-cell":"Table-cell"): "Table-empty-cell"}>{
                temp2
            }</div>
        }
        //Puts all the cells in a table row into a container for that row
        ret[i] = <div className = {"Table-row"}>{temp1}</div>
    }
    return(ret)




}