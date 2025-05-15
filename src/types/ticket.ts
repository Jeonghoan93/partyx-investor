import type { HostingEvent } from '~/types/event';

export type Ticket = {
  type?: string;
  ticketId: string;
  eventId: string;
  userId: string;
  qrCode: string;
  paymentId: string;
  startDate: Date;
  endDate: Date;
  location: string;
  price: {
    count: number;
    currency: string;
  };
  createdAt: Date;
  updatedAt?: Date;
  status?: 'success' | 'pending' | 'declined';
  eventDetail?: HostingEvent;
  userDetail: {
    firstName: string;
    lastName: string;
    dateOfBirth: {
      year: number;
      month: number;
      day: number;
    };
    phone?: {
      countryCode: number;
      number: number;
    };
    email?: string;
  };
};
