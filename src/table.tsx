
type table = {
    //header row is the row that is considered the header, while header column is the column that is considered the header
    //set to -1 to indicate no header
    rows: string[][]
    headerRow: number
    headerCol: number
}

export default function Table({rows, headerRow, headerCol}:table){
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
            temp1[j] = <div style = {{width:max+"em"}} className = {temp2!=""?((headerRow === i || headerCol === j)? "Table-important-cell":"Table-cell"): "Table-empty-cell"}>{
                temp2
            }</div>
        }
        ret[i] = <div className = {"Table-row"}>{temp1}</div>
    }
    return(ret)




}