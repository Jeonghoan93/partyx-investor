export type Payment = {
  paymentId: string;
  ticketId: string;
  userId: string;
  status?: 'success' | 'pending' | 'declined';
  method: {
    paidBy: 'card' | 'apple' | 'google';
    cardDetail?: {
      name: string;
      number: number;
      expiry: number;
      cvv: number;
    };
  };
};
