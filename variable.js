let name = 'Earl'  //string 

let age = 25       //number

let saraly = 5000.00 //number

/**
 * HashMap
 */
let map = {'1':'120', '5':100} 
for(let i in map){
    //console.log(map[i])
}

/**
 * arrays
 */
let arrays = [1, 2, 99, 10]
arrays = arrays.sort((a,b)=>{return a<b});
arrays.forEach(e=>{
    //console.log(e)
});


/**
 * Object
 */
class Student{
    

}

let st = new Student()
st.name = 'Earl'
st.age = 26

let st2 = new Student()
st2.name = 'Earl'
st2.age = 27

let test = [st, st2]

test.forEach(e=>{
    console.log(e)
})