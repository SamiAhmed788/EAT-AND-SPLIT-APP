import { useState } from "react"

export const Addfriends =({setAddFriend, cardsData ,setCardsData})=>{
    console.log('cardsData before update:', cardsData);
const [addusername,setaddusername]  = useState("")
const [addImg,setaddImg]  = useState("")
const addingdata = ()=>{
    const carddata2 = [...cardsData]
    carddata2.push(
    {
        userImg:  addImg,
        userName: addusername,
        desc:"Clear right now",
        price: 20,
        isActive: true
    }
    
    )
    setAddFriend(false)
    setCardsData(carddata2)
}
    return(
        <div style={{padding:"18px", backgroundColor:"#fcf2e0",width:"50%", height:"100px", display:"flex", flexDirection:"column", justifyContent:"space-between", marginLeft:"430px",marginTop:" 10px "}}>
        <div style={{display:'flex', justifyContent:"space-between"}}>
        <label>👫 Friend name</label>
        <input onChange={(e) => setaddusername(e.target.value)}  style={{width:"120px", padding:"3px 4px"}} type="text" />
      </div>
      <div style={{display:'flex', justifyContent:"space-between"}}>
        <label>🖼️ Image URL</label>
        <input onChange={(e) => setaddImg(e.target.value)}  style={{width:"120px", padding:"3px 4px"}} type="text" />
      </div>
      <div style={{display:'flex', justifyContent:"flex-end"}}>
      <button onClick={() => addingdata()} style={{backgroundColor:"#fd9e40", width:"132px", border:"none", padding:"4px 0", cursor:'pointer'}}>Add</button>
      </div>
      </div>
    )
}