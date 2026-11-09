export function multiplyValue (
    value:number,
    multiplier?:number
):number{
    if (multiplier === undefined){
        return value * 2
    }
    return value * multiplier
}


export function processInput(value: string | number | boolean): String | number {
    if (typeof value === "string"){
        return value.trim().toLowerCase();
    }
    if(typeof value === "number"){
        return value * 10;
    } 
    return value ? "Active": "Inactive";
  
}




