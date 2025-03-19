import React, {useState, useEffect} from 'react';

interface TicketPriceProps {
  basePrice : number,
  demandFactor: number
}
const TicketPrice: React.FC<TicketPriceProps> = ({basePrice = 0, demandFactor = 0})=> {

 const calculatePrice = (basePrice:number, demandFactor: number) => {
   return Math.round((basePrice * (1 + demandFactor)));
 };
 const [price, setPrice] = useState<number>(calculatePrice(basePrice, demandFactor));

 useEffect(()=> {
 
   const calculatNewPrice = () => {
     const randomDemandFactor = Math.random();
     const updatedPrice = calculatePrice(basePrice, randomDemandFactor);
     setPrice(updatedPrice);
   }
   //calculate new price for every 5 sec;
   const intervalId = setInterval(calculatNewPrice, 5000);
   return () => {
    clearInterval(intervalId);
   }
 }, [basePrice, demandFactor])
  return(
    <span>${price}</span>
  )
}

export default TicketPrice;