import React from 'react';


interface Ticket {
  name: string,
  price: number
}

interface TicketsListProps {
  tickets : Ticket[]
}

// Functional react component for displaying ticket list
const TicketsList: React.FC<TicketsListProps> = ({tickets})=>{
 
  return (
  <div>
    <h1>Tickets</h1>
    {/* Using semantic unordered list (<ul>) to display items */}
    <ul>
      {
        tickets.map((ticket: Ticket, index:number) => (
            <li key={index}>
              {ticket.name} - ${ticket.price}
            </li>
        ))
      }
    </ul>
  </div>
  );
}

export default TicketsList;