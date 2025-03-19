import { useMemo } from 'react';

/**
 * Approach
 * 1. Add type checks for the inputs
 * 2. Initalizing the default values 
 * 3. using useMemo for the performance which evaluates only if one of the dependencies changes
 * 4. filtering the tickets list based on the inputs provided
 * 5. returning the filtered result.
 */

interface Ticket {
  id: string;
  price: number;
}

const useTicketsFilter = (
  ticketList: Ticket[],
  minPrice = 0,
  maxprice = Infinity
) => {
  const filteredTickets = useMemo(() => {
    return ticketList.filter(
      (ticket: Ticket) => ticket.price >= minPrice && ticket.price <= maxprice
    );
  }, [ticketList, minPrice, maxprice]);

  return filteredTickets;
};

export default useTicketsFilter;
