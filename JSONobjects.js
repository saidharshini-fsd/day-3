function areEqualJSON(obj1,obj2)
{
    const jsonString1 = JSON.stringify(obj1);
    const jsonString2 = JSON.stringify(obj2);
     if (jsonString1 === jsonString2){
     return true;}
     else{
         return false;
     }
}
const obj1={name:"Person1",age:5};
const obj2={age:5,name:"Person1"};
 if(areEqualJSON(obj1,obj2))
 {
     console.log("The JSON objects are equal"); 
     
 }else
 {
    console.log("The JSON objects are  not equal"); 
 }