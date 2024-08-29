import studentsArr from "./studentArr"

const deleteTodo = (e:number) =>{
    console.log("chala");
    studentsArr.splice(e, 1 )
    
}


export default deleteTodo