export  function Mybill({ndex,singleuser,setsingleuser, singlenumber,setAddingFriend ,addingFriend ,naam, setNaam, totalBill ,setTotalBill,myExpense, setMyExpense , userExpense , setUserExpense , payBill , setPayBill  , cardsData , setCardsData}) {

const localdata = JSON.parse(localStorage.getItem("userdata"))
// const splitbillhandler=()=>{

//   if (myExpense < userExpense && payBill === localdata.userName) {
//     console.log("You owe " + localdata.userName + myExpense + " paisay");
//     const convertIntoDuplicate = [...cardsData];
//     const data = convertIntoDuplicate.find((val, index5) => index5 === localdata.index2);
//     const oweToPay = (Number(myExpense) + Number(userExpense)) - Number(totalBill);
//     data.desc = `€${oweToPay - userExpense} You owe ${data.userName}`;
//     setCardsData(convertIntoDuplicate);
//     setsingleuser(false);
//   } else if (myExpense > userExpense && payBill === "you") {
//     console.log(localdata.userName + " owes " + myExpense);
//     const convertIntoDuplicate = [...cardsData];
//     const data = convertIntoDuplicate.find((val, index5) => index5 === localdata.index2);
//     const oweToPay = (Number(myExpense) + Number(userExpense)) - Number(totalBill);
//     data.desc = `€${oweToPay - userExpense} You owe ${data.userName}`;
//     setCardsData(convertIntoDuplicate);
//     setsingleuser(false);
//   } else if (myExpense === userExpense) {
//     console.log(localdata.userName + " owes $" + myExpense);
//     const convertIntoDuplicate = [...cardsData];
//     const data = convertIntoDuplicate.find((val, index5) => index5 === localdata.index2);
//     const oweToPay = (Number(myExpense) + Number(userExpense)) - Number(totalBill);
//     data.desc = ` €${oweToPay - userExpense} You owe ${data.userName}`;
//     setCardsData(convertIntoDuplicate);
//     setsingleuser(false);
//   }}

const splitbillhandler = () => {
  const totalExpense = Number(myExpense) + Number(userExpense);
  const convertIntoDuplicate = [...cardsData];
  const data = convertIntoDuplicate.find((val, index5) => index5 === localdata.index2);

  if (totalExpense < totalBill) {
      const remainingBalance = totalBill - totalExpense;
      data.desc = `$${remainingBalance} still to be paid`;
  } else if (myExpense > userExpense) {
      data.desc = `${naam} owes $${totalExpense - userExpense}`;
  } else if (myExpense < userExpense) {
      data.desc = `You owe ${naam} $${userExpense - totalExpense}`;
  }else if (myExpense === userExpense) {
    data.desc = `You owe ${naam} $${userExpense - totalExpense}`;} 
  else {
      data.desc = "All expenses settled";
  }

  setCardsData(convertIntoDuplicate);
  setsingleuser(false);
};

    return(
        <div className="splitBillPar2">
        <h3>SPLIT A BILL WITH {naam === "" ? "" : naam.toUpperCase()} </h3>
      <div style={{display:'flex', justifyContent:"space-between"}}>
        <label>💰 Bill value</label>
        <input onChange={(e) => setTotalBill(e.target.value)} style={{width:"80px", padding:"4px"}} type="Number" />
      </div>
      <div style={{display:'flex', justifyContent:"space-between"}}>
        <label>🧍‍♂️ Your expense</label>
        <input onChange={(e) => setMyExpense(e.target.value)}  style={{width:"80px", padding:"4px"}} type="Number" />
      </div>
      <div style={{display:'flex', justifyContent:"space-between"}}>
        <label>👫 {naam}'s expense</label>
        <input onChange={(e) => setUserExpense(e.target.value)}  style={{width:"80px", padding:"4px"}} type="Number" />
      </div>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <p>🤑 Who is paying the bill?</p>
        <select onChange={(e) => setPayBill(e.target.value)}  style={{width:"93px" , padding:"6px 4px"}}>
            <option>You</option>
            <option>{naam}</option>
        </select>
      </div>
      <div style={{display:"flex", justifyContent:"flex-end"}}>
        <button onClick={() => splitbillhandler()} style={{padding:"5px 20px",borderRadius:"4px",border:"none", fontWeight:"600", backgroundColor:"#fd9e40", cursor:"pointer"}}>Split bill</button>
      </div>
    </div>
    )
 }