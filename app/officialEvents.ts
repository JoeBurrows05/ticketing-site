export type OfficialEvent = {
  id: string;
  name: string;
  date: string;
  location: string;
  category: string;
  latitude: number;
  longitude: number;
};

export const officialEvents: OfficialEvent[] = [
  {
    id: "gc-test-event",
    name: "GC Official Test Event",
    date: "12 December 2026",
    location: "London",
    category: "Event",
    latitude: 51.5074,
    longitude: -0.1278,
  },
];