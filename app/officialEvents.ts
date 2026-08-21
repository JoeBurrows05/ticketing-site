export type OfficialEvent = {
  id: string;
  name: string;
  date: string;
  location: string;
  category: string;
  latitude: number;
  longitude: number;
};

export const officialEvents: OfficialEvent[] = [];