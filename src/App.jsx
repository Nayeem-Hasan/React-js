import {useRef, useState } from "react"


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
  const [list,setList]=useState([]);  
  const [item,setItem]=useState("");
  
  const addToList = ()=> {
    list.push(item);
    setList([...list]);
  }
  const RemoveItem = (index)=>{
    list.splice(index,1);
    setList([...list]);
  }
 
  let myHeadline=useRef();

  const change = () => {
   myHeadline.current.classList.remove('text-success')
   myHeadline.current.classList.add('text-danger')
   myHeadline.current.classList.remove('bg-primary-subtle')
   myHeadline.current.classList.add('bg-success-subtle')
   myHeadline.current.classList.remove('p-4')
   myHeadline.current.classList.add('p-5')
  }
  
  return(
    <>
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
      <br />
    <br />
    <br />
    <br />
    <div>
      <table>
        <tbody>
          {
            list.length!==0?(
              list.map((element,index)=>{
                return(
                  <tr>
                    <td>{element}</td>
                    <td><button onClick={()=>{RemoveItem(index)}}>Remove</button></td>
                  </tr>
                )
              })
            ):(<tr></tr>)
          }
        </tbody>
      </table>

      
      <input onChange={(e)=>setItem(e.target.value)} placeholder="Item"/>
      <button onClick={addToList}>Add</button>
    </div>
    <br />
    <br />
    <br />
    <div>
       <h1 className="text-success p-4 bg-primary-subtle" ref={myHeadline}>This is Headline</h1>
       <button onClick={()=>change()}>Click to Change me</button>
     </div>

    </div>
    
   
   </>
  );

}

export default App
