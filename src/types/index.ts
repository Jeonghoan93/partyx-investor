// Enums
export enum ArtistType {
  DJ = 'DJ',
  BAND = 'BAND',
  SOLO = 'SOLO',
  PRODUCER = 'PRODUCER',
  OTHER = 'OTHER'
}

export enum PaymentMethod {
  GOOGLE_PAY = 'GOOGLE_PAY',
  APPLE_PAY = 'APPLE_PAY',
  CREDIT_CARD = 'CREDIT_CARD',
  PAYPAL = 'PAYPAL'
}

export enum GuestlistEntryStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  REDEEMED = 'REDEEMED',
  CANCELLED = 'CANCELLED'
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED'
}

export enum ProviderType {
  GOOGLE = 'GOOGLE',
  INSTAGRAM = 'INSTAGRAM'
}

export enum UserRole {
  USER = 'USER',
  DJ = 'DJ',
  ORGANIZER = 'ORGANIZER',
  PROMOTER = 'PROMOTER',
  ADMIN = 'ADMIN'
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export enum ActivityType {
  ATTENDED_EVENT = 'ATTENDED_EVENT',
  WROTE_REVIEW = 'WROTE_REVIEW',
  FOLLOWED_USER = 'FOLLOWED_USER',
  WAS_FOLLOWED = 'WAS_FOLLOWED',
  UPDATED_PROFILE = 'UPDATED_PROFILE',
  SHARED_EVENT = 'SHARED_EVENT'
}

export enum VerificationStatus {
  PENDING = 'PENDING',
  VERIFIED = 'VERIFIED',
  REJECTED = 'REJECTED'
}

export enum IDDocumentType {
  PASSPORT = 'PASSPORT',
  DRIVER_LICENSE = 'DRIVER_LICENSE',
  NATIONAL_ID = 'NATIONAL_ID'
}

export enum EventStatus {
  DRAFT = 'DRAFT',
  PENDING_APPROVAL = 'PENDING_APPROVAL',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  PUBLISHED = 'PUBLISHED',
  ONGOING = 'ONGOING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export enum ViolationSeverity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
  JPY = 'JPY',
  AUD = 'AUD',
  CAD = 'CAD',
  CHF = 'CHF',
  CNY = 'CNY',
  SEK = 'SEK',
  NZD = 'NZD',
  OTHER = 'OTHER'
}

export enum VenueType {
  CLUB = 'CLUB',
  BAR = 'BAR',
  HALL = 'HALL',
  OUTDOOR = 'OUTDOOR',
  OTHER = 'OTHER'
}

export enum RSVPStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  DECLINED = 'DECLINED',
  WAITLISTED = 'WAITLISTED',
  CANCELLED = 'CANCELLED'
}

export enum ExclusiveAccessType {
  NONE = 'NONE',
  VIP = 'VIP',
  EARLY_ACCESS = 'EARLY_ACCESS',
  BOTH = 'BOTH'
}

export enum EventKind {
  HOUSE_PARTY = 'HOUSE_PARTY',
  FESTIVAL = 'FESTIVAL',
  RAVE = 'RAVE',
  CLUB_EVENT = 'CLUB_EVENT',
  PUB_CRAWL = 'PUB_CRAWL'
}

// Interfaces
export type AuthProvider = {
  id: string
  userId: string
  user: User
  provider: ProviderType
  providerId: string
  createdAt: Date
  updatedAt: Date
}

export type User = {
  id: string
  email?: string
  phoneNumber?: string
  partyName?: string
  password?: string
  firstName: string
  lastName?: string
  dateOfBirth?: Date
  age?: number
  gender?: Gender
  bio?: string
  photo?: string
  emailVerified: boolean
  phoneNumberVerified: boolean
  idVerificationStatus?: VerificationStatus
  idDocumentType?: IDDocumentType
  idDocumentImageUrl?: string
  reputationScore?: number
  pastEventAttendance: string[]
  createdAt: Date
  updatedAt: Date
  authProvider: AuthProvider[]
  isActive: boolean
  roles: UserRole[]
  familyZone: string[]
  friendZone: string[]
  blockedUsers: string[]
  vipStatus: VIPStatus[]
  reviewsGiven: Review[]
  reviewsReceived: Review[]
  violations: Ban[]
  violationsReported: Ban[]
  RSVP: RSVP[]
  isHost: boolean
  hostingEvents: Event[]
  GuestlistEntry: GuestlistEntry[]
  TicketSale: TicketSale[]
  artist?: Artist
  eventSubscriptions: EventSubscription[]
  interestedEvents: Interested[]
}

export type VIPStatus = {
  id: string
  userId: string
  user: User
  name: string
  description?: string
  grantedAt: Date
  expiresAt?: Date
  isActive: boolean
}

export type Review = {
  id: string
  eventId?: string
  organizerId?: string
  reviewerId: string
  receivedById?: string
  rating: number
  comment?: string
  createdAt: Date
  updatedAt: Date
  isFlagged: boolean
  event?: Event
  reviewer: User
  receivedBy?: User
}

export type Ban = {
  id: string
  reportedByUserId: string
  eventId?: string
  partyPassportId?: string
  userId?: string
  description: string
  severity: ViolationSeverity
  reportedAt: Date
  resolved: boolean
  resolutionDate?: Date
  actionTaken?: string
  reportedBy: User
  reporterRole?: string
  user?: User
}

export type Event = {
  id: string
  title: string
  description: string
  images: string[]
  tags: string[]
  partyType: EventKind
  defaultOrganizerId: string
  defaultOrganizer: User
  defaultVenueId?: string
  defaultVenue?: Venue
  exclusiveAccessType: ExclusiveAccessType
  vipBenefits?: any
  limitedTimeOffer?: any
  instances: EventInstance[]
  createdAt: Date
  updatedAt: Date
  reviews: Review[]
  isDeleted: boolean
  deletedAt?: Date
  subscriptions: EventSubscription[]
}

export type EventInstance = {
  id: string
  eventId: string
  event: Event
  startDate: Date
  endDate?: Date
  tags: string[]
  isShownBeforeBook: boolean
  organizerId?: string
  venueId?: string
  venue?: Venue
  ticketVariants: TicketVariant[]
  guestlist?: Guestlist
  artists: Artist[]
  extraDetails?: any
  attendanceCount?: number
  programmes: Programme[]
  rsvps: RSVP[]
  status: EventStatus
  peopleInterested: number
  interestedPeople: Interested[]
  createdAt: Date
  updatedAt: Date
}

export type Interested = {
  id: string
  eventInstanceId: string
  userId?: string
  deviceId?: string
  createdAt: Date
  eventInstance: EventInstance
  user?: User
}

export type RSVP = {
  id: string
  eventInstanceId: string
  eventInstance: EventInstance
  userId: string
  user: User
  status: RSVPStatus
  statusUpdatedAt: Date
  createdAt: Date
}

export type Artist = {
  id: string
  name: string
  bio?: string
  pictureUrl?: string
  socialLinks?: any
  userId?: string
  user?: User
  artistType?: ArtistType
  createdAt: Date
  updatedAt: Date
  programme?: Programme
  EventInstance?: EventInstance
  eventInstanceId?: string
}

export type Programme = {
  id: string
  eventInstanceId: string
  eventInstance: EventInstance
  title: string
  stage: string
  startTime: Date
  endTime?: Date
  artistId: string
  artist: Artist
  description?: string
  mediaUrl?: string
  status?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export type Guestlist = {
  id: string
  eventInstanceId: string
  eventInstance: EventInstance
  rules?: any
  managerUserIds: string[]
  managerNames: string[]
  ticketCoverage: boolean
  type?: string
  ticketPrice?: number
  currency?: Currency
  capacity: number
  guestEntries: GuestlistEntry[]
}

export type GuestlistEntry = {
  id: string
  guestlistId: string
  guestlist: Guestlist
  invitedBy: string
  inviter: User
  inviteQuota?: number
  invitesUsed: number
  invitationCode?: string
  status: GuestlistEntryStatus
  addedAt: Date
  redeemedAt?: Date
}

export type TicketSale = {
  id: string
  ticketVariantId: string
  ticketVariant: TicketVariant
  userId?: string
  user?: User
  guestDetails?: any
  quantity: number
  totalPrice: number
  purchaseDate: Date
  paymentStatus: PaymentStatus
  transactionId?: string
  paymentMethod: PaymentMethod
  sellingStartDate?: Date
  sellingEndDate?: Date
}

export type TicketVariant = {
  id: string
  eventInstanceId: string
  eventInstance: EventInstance
  name: string
  description?: string
  basePrice: number
  currency: Currency
  quantityAvailable: number
  quantitySold: number
  maxPerPerson?: number
  startSale?: Date
  endSale?: Date
  earlyBirdPrice?: number
  earlyBirdEnd?: Date
  discountDetails?: any
  sales: TicketSale[]
}

export type Venue = {
  id: string
  name: string
  address: string
  city: string
  country: string
  latitude?: number
  longitude?: number
  googleMapUrl?: string
  capacity?: number
  venueType?: VenueType
  description?: string
  images: string[]
  eventsHosted: string[]
  defaultEvents: Event[]
  instanceVenues: EventInstance[]
  amenities?: Amenities
  isVerified: boolean
  createdAt: Date
  updatedAt: Date
}

export type Amenities = {
  id: string
  venueId: string
  venue: Venue
  barAvailable: boolean
  foodAvailable: boolean
  vipArea: boolean
  parkingAvailable: boolean
  wheelchairAccessible: boolean
  coatCheck: boolean
  smokingArea: boolean
}

export type EventSubscription = {
  id: string
  eventId: string
  event: Event
  userId: string
  user: User
  createdAt: Date
  updatedAt: Date
}
