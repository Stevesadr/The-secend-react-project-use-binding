import React, { useState } from 'react'

const Form = () => {
    // const [mytype , setType] =useState('')
    // const [mynum , setNum] =useState(0)
    const [myFormDate , myFormSet]=useState({type :'' , num:0});
    const sub = (event) => {
        event.preventDefault();
        console.log(myFormDate); 
        // myFormDate={type:'' , num : 0}
    }
    const changeinp = (e) =>{
        // console.log(target.value) 
        // setType(target.value);\
        myFormSet({...myFormDate , type : e.target.value})
    }
    const changnum = (e) => {
        // setNum(target.value);
        myFormSet({...myFormDate , num :  e.target.value})
        
    }
  return (
    <div>
        <form onSubmit={sub}>

            <input type="text" placeholder='متن را وارد کنید !' onChange={changeinp}/>
            <input type="number" placeholder='عدد را وارد کنید !' onChange={changnum} />
            <button> ذخیره </button>
        </form>
    </div>
  )
}

export default Form