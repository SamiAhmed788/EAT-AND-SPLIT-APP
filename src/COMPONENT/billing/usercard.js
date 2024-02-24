import "./cards.css";



export const Usercard =({index,singleuser,setsingleuser, singlenumber,setAddingFriend ,addingFriend ,naam, setNaam, totalBill ,setTotalBill,myExpense, setMyExpense , userExpense , setUserExpense , payBill , setPayBill  , cardsData , setCardsData})=>{
console.log(cardsData , ">>>>>>>>>>>>/");
console.log(index , ">>>>>>>>>>>");
const sulectuser =(index2)=>{
const convertdata =[...cardsData]
console.log(convertdata);
const check = convertdata.find((val,index1)=> index2 === index1)
console.log(check, "....../");
convertdata[index].isActive= true
setCardsData(convertdata)
localStorage.setItem("userdata",JSON.stringify({...check,index2 : index}))
console.log(check)
setNaam(check.userName)
setsingleuser(true)
console.log(singlenumber.userImg);
}
    return(
<div style={{width:"100%", backgroundColor:"green"}}>
<div 
      className="singleUser"
      style={{
        backgroundColor: singleuser ? "#fcf2e0" : "#fff",
        padding: "7px 5px",
        display:'flex'

      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
          src={singlenumber.userImg}
alt="usercard"        
        />
        <div>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "600",
              marginBottom: "2px",
              marginTop: "2px",
            }}
          >
            {singlenumber.userName}
          </p>
          <p
            style={{
              fontSize:"12px",
              fontWeight: "500",
              fontFamily: "sans-serif",
              marginBottom: "2px",
color:"blue"              
            }}
          >
            {singlenumber.desc}
          </p>
        </div>
      </div>
      <button
        onClick={() => sulectuser(index)}
        style={{
          padding: "8px 12px",
          fontWeight: "700",
          backgroundColor: "#fd9f3e",
          border: "none",
          borderRadius: "7px",
          cursor: "pointer",
         
        }}
      >
       select
      </button>
    </div>
    
</div>
    )
}
