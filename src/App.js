
import { useState } from 'react';
import './App.css';
import { Card } from './COMPONENT/billing/billing';




function App() {
  const [addingFriend, setAddingFriend] = useState(false);
  const [naam , setNaam]  = useState("");
  const [totalBill, setTotalBill] = useState(0)
  const [myExpense, setMyExpense] = useState(0)
  const [userExpense, setUserExpense] = useState(0)
  const [payBill, setPayBill] = useState(0);
  const [cardsData, setCardsData] = useState([
    {
      userImg: "https://th.bing.com/th/id/OIP.U6W8lqHMDd2wdDedKocmIwAAAA?rs=1&pid=ImgDetMain",
     userName:"Sami",
      desc: "Clear right now",
      price: 20,
      isActive: false
    },   {
      userImg: "https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/214835487_106308075059378_4576948015763926814_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGtfcuHL_SyX80DQg49_WOAfgETiW7RX3B-AROJbtFfcMXrOIY94Fp5Dmsfh_0pEnTDH8ITmVIfS2ep5IAfLhBZ&_nc_ohc=s5Q3NVzMzDkAX_qtN2i&_nc_ht=scontent.fkhi20-1.fna&oh=00_AfDj4dgC9O2HYIAGvGMHUCyCdCDlc3KZ1CZqh47l1xVN1Q&oe=65DFA0E5",
      userName: "kamran",
      desc: "Clear right now",
      price: 20,
      isActive: false
    },{
      userImg: "https://avatars.githubusercontent.com/u/139696048?v=4",
      userName: "Umair ghani",
      desc: "Clear right now",
      price: 20,
      isActive: false
    },
  
  
  ])
  return (
<>
<div style={{display:"flex",backgroundColor:"white", justifyContent:"center"}}>
  <div className='abuu'>
  <Card key={Date.now} setAddingFriend={setAddingFriend} addingFriend={addingFriend} naam={naam} setNaam={setNaam} totalBill={totalBill} setTotalBill={setTotalBill} myExpense={myExpense} setMyExpense={setMyExpense} userExpense={userExpense} setUserExpense={setUserExpense} payBill={payBill} setPayBill={setPayBill} cardsData={cardsData} setCardsData={setCardsData} />
  </div>


</div>

</>
  );
}

export default App;
