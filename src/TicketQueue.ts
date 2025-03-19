class QNode { 
  seatId: string;
  next : QNode | null

  constructor(seatId: string, next: QNode | null) {
      this.seatId = seatId;
      this.next = next;
  }
}

export class SeatQueue {
  private head: QNode | null = null;
  private tail : QNode | null = null;
  private count:number = 0;

  addSeat(seatId:string) {
      const newNode = new QNode(seatId, null);
      if(this.tail) {
          this.tail.next = newNode;
      }else {
          this.head = newNode;
      }
      this.tail = newNode;
      this.count++;
  }

  reserveSeat() {
      if(this.head === null) {
          return null // no seats available
      }
      const seatReserved = this.head.seatId;
      this.head = this.head.next;
      if(this.head === null) {
          this.tail = null;
      }
      this.count--;
      return seatReserved;
  }

  getAvailableCount() {
      return this.count;
  }
}