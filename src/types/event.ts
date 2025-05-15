// Event => repo => service => controller => router
// return new type

// Host as User => events as Event[] => hostingEvents as HostingEvent[]

export type Event = {
  eventId: string;
  hostId: string; // user id
  eventDetail: EventDetail;
  hostingEventsIds: string[];
};

export type EventDetail = {
  title: string;
  description: string;
  images: string[]; // images[0] is the main image
  venue: Venue;
  type: string;
  musicGenres: string[];
};

export type Venue = {
  venueName: string;
  venueId: string;
  venueType: string;
  location: Location;
  capacity: number;
};

// Get these from google maps api later
export type Location = {
  isShownBeforeBook?: boolean;
  country: string;
  city: string;
  street: string;
  zipCode?: string;
};

export type DJ = {
  isUser: boolean;
  name: string;
  musicGenres: string[];
  userId?: string;
  djId?: string;
}[];

export type Programme = {
  title: string;
  djId?: string;
  location?: string;
  startTime: Date;
  endTime: Date;
};

export type HostingEvent = {
  hostingEventId: string;
  parentEventId: string;
  hostId?: string; // user id
  eventDetail: EventDetail;
  shouldRequestInvitation?: boolean;
  djs?: DJ;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  tickets: {
    type: string;
    price: number;
    currency: string;
    numberAvailable?: number;
    bookableStartDate?: Date;
    bookableEndDate?: Date;
  }[];
  programmes: Programme[];
  bookable?: {
    startDate: Date;
    endDate: Date;
  };
};
