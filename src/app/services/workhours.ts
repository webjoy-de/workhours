export interface Workhours {
  id: number;
  name: string;
  work_hours_per_week: number;
  registration_list: Registrations;
}

export interface Registrations {
  week: number;
  hours: any[];
}
