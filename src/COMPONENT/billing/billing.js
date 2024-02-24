import { useState } from "react"
import { Usercard } from "./usercard"
import { Addfriends } from "../Addfriend/Addfriend"
import { Mybill } from "./mybill"
import "./cards.css";
export const Card =({setAddingFriend ,addingFriend ,naam ="", setNaam, totalBill ,setTotalBill,myExpense, setMyExpense , userExpense , setUserExpense , payBill , setPayBill  , cardsData , setCardsData})=>{

const [singleuser, setsingleuser] = useState(false)

    return(
           <div className="cardkaabba">
            <div style={{width:"100%",backgroundColor:"white",height:"400px", marginRight:"150px"}}>
            <div className="card1">
            {cardsData.map((singlenumber, index)=>(<Usercard
            key={Date.now}
            singlenumber={singlenumber}
            index={index}
            singleuser={singleuser}
            setsingleuser={setsingleuser}
            setAddingFriend={setAddingFriend} 
            addingFriend={addingFriend}
             naam={naam} setNaam={setNaam} 
             totalBill={totalBill} 
             setTotalBill={setTotalBill}
              myExpense={myExpense} 
              setMyExpense={setMyExpense}
               userExpense={userExpense} 
               setUserExpense={setUserExpense} 
            payBill={payBill} 
            setPayBill={setPayBill}
             cardsData={cardsData}
              setCardsData={setCardsData} 
            
            />))}
            </div>

{
    addingFriend && (< Addfriends  key={Date.now}  cardsData={cardsData}
        setCardsData={setCardsData} setAddFriend={setAddingFriend}  />
)}
  <div
          style={{ display:"flex", width: "90%", justifyContent: "flex-end" ,marginLeft:"210px"}}
        >
                
<button style={{
  
           marginTop:"30px",
          padding: "6px 10px",
          fontWeight: "700",
          backgroundColor: "#fd9f3e",
          border: "none",
          borderRadius: "7px",
          cursor: "pointer",
          marginLeft:"200px"
        }} onClick={()=>setAddingFriend(true)} >
    {addingFriend ? "close" : "Addfriend"}
    </button>
        </div>
           </div>
<div className="card2">
    {singleuser &&( <Mybill key={Date.now}
  
            singleuser={singleuser}
            setsingleuser={setsingleuser}
            setAddingFriend={setAddingFriend} 
            addingFriend={addingFriend}
             naam={naam} setNaam={setNaam} 
             totalBill={totalBill} 
             setTotalBill={setTotalBill}
              myExpense={myExpense} 
              setMyExpense={setMyExpense}
               userExpense={userExpense} 
               setUserExpense={setUserExpense} 
            payBill={payBill} 
            setPayBill={setPayBill}
             cardsData={cardsData}
              setCardsData={setCardsData}  />)}




           </div>
           </div>
    )
}



