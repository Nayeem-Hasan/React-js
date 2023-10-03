import {useState } from "react"


const App = () => {

  let[FormObj,SetFormObj]=useState({fName:"", lName:"", city:"", gender:""})

  const InputOnChange = (property,value) => {
    SetFormObj(prevObj=>({
      ...prevObj,
      [property]:value
    }))
  }

  const Formsubmit=(e)=>{
    e.preventDefault();
    console.log(FormObj)

  }

  return(
    <div className="container">
      
      <form onSubmit={Formsubmit}>
        <input onChange={(e)=>{InputOnChange("fName",e.target.value)}} value={FormObj.fName} placeholder="First Name" /> <br />
       
        <input onChange={(e)=>{InputOnChange("lName",e.target.value)}} value={FormObj.lName} placeholder="Last Name" /> <br />
        <select onChange={(e)=>{InputOnChange("city",e.target.value)}} value={FormObj.city}>
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Rangpur">Rangpur</option>
        </select>
        <br />
        <input onChange={(e)=>{InputOnChange("gender",'Male' )}} checked={FormObj.gender==="Male"} type="radio" name="gender" id="" />Male
        <input onChange={(e)=>{InputOnChange("gender", 'Female',e.target.value)}} checked={FormObj.gender==="Female"} type="radio" name="gender" id="" />Female
        <br />
        <button type="submit">Submit</button>
      </form>

    </div>
  );
// const [list,setList]=useState([]);  
// const [item,setItem]=useState("");

// const addToList = ()=> {
//   list.push(item);
//   setList([...list]);
// }
// const RemoveItem = (index)=>{
//   list.splice(index,1);
//   setList([...list]);
// }


// return (
//   <div>
//     <table>
//       <tbody>
//         {
//           list.length!==0?(
//             list.map((element,index)=>{
//               return(
//                 <tr>
//                   <td>{element}</td>
//                   <td><button onClick={()=>{RemoveItem(index)}}>Remove</button></td>
//                 </tr>
//               )
//             })
//           ):(<tr></tr>)
//         }
//       </tbody>
//     </table>

    
//     <input onChange={(e)=>setItem(e.target.value)} placeholder="Item"/>
//     <button onClick={addToList}>Add</button>
//   </div>
// );

// const [list,setList]=useState([])
// const [item,setItem]=useState("");

// const AddToList=()=>{
//   list.push(item)
//   setList([...list]);
// }

// const RemoveItem = (index) => {
//   list.splice(index,1);
//   setList([...list]);
// }

//  return(
//   <div>
//     <table>
//       <tbody>
//         {
//           list.length!==0?(
//             list.map((element,index)=>{
//               return(

//                 <tr>
//                   <td>{element}</td>
//                   <td><button onClick={()=>{
//                   RemoveItem(index)
//                 }}>Remove</button></td>
//                 </tr>
//               )
//             })
//           ):(<tr></tr>)
//         }
//       </tbody>
//     </table>

//     <input onChange={(e)=>setItem(e.target.value)} placeholder="Item" />
//     <button onClick={AddToList}>Add</button>
//   </div>
//  );
// let myHeadline=useRef();

//   const change = () => {
//    myHeadline.current.classList.remove('text-success')
//    myHeadline.current.classList.add('text-danger')
//    myHeadline.current.classList.remove('bg-primary-subtle')
//    myHeadline.current.classList.add('bg-success-subtle')
//    myHeadline.current.classList.remove('p-4')
//    myHeadline.current.classList.add('p-5')
//   }
//   return (
    
//     <div>
//       <h1 className="text-success p-4 bg-primary-subtle" ref={myHeadline}>This is Headline</h1>
//       <button onClick={()=>change()}>Click to Change me</button>
//     </div>
     
//   )

// let number=useRef(0);

// const change = () => {
//   number.current++;
//   console.log('Clicked ${number.current} times'+"got");
// }
// return (
//   <div>
//     <h1></h1>
//     <button onClick={change}>Click</button>
//   </div>
// );
// let APIData=useRef(null);
// let PTag=useRef();

// const fetchData = async () => {
//   const response= await fetch("https://dummyjson.com/products") 
//   APIData.current=await response.json();
// }
// const showData = () => {
//   PTag.current.innerText=JSON.stringify(APIData.current)
// }
// return (
//   <div>
//     <p ref={PTag}></p>
//     <button onClick={fetchData}>Call Api</button>
//     <button onClick={showData}>Show Data</button>
//   </div>
// );

// let exResultRef = useRef(null);
// let myDiv = useRef(null);

// const fetchData = async() => {
//  const response = await fetch('https://dummyjson.com/products');
//   exResultRef.current = await response.json();
// }
// const ShowData = () => {
//  myDiv.current.innerHTML = JSON.stringify(exResultRef.current)
// }

// return (
//  <div>
//   <div ref={myDiv}></div>
//   <button onClick={fetchData}>Call Api</button>
//   <button onClick={ShowData}>Show Api</button>
  
//  </div>
// );
  // const [myObj,setMyObj]=useState({
  //   key1:"Key Value 1",
  //   key2:"Key Value 2",
  //   key3:"Key Value 3",
  //   key4:"Key Value 4",
  // });

  // const change = () => {
  //   setMyObj(

  //     prevOBJ=>({
  //       ...prevOBJ,
  //       key1:"New value for me 1",
  //       key2:"New value for me 2",
  //       key4:"New value for me 4",
  //     })

  //   )
  // }
  // return (
  //   <div>
  //     <h1>{myObj.key1}</h1>
  //     <h1>{myObj.key2}</h1>
  //     <h1>{myObj.key4}</h1>
  //     <button onClick={change}>Click</button>
  //   </div>
  // );



}

export default App
