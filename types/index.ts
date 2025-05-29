export enum TabType {
  Opportunities = "opportunities",
  Experiences = "experiences",
}

export type CategoryType =
  | "Sustainability"
  | "Homestay"
  | "School"
  | "Ashram"
  | "Treehouses"
  | "Domes"
  | "Farms";

export interface VolunteerOpportunity {
  id: number;
  state: string;
  location: string;
  skills: string;
  hoursPerWeek: string;
  roles: string[];
  minimumDuration: string;
  accommodation: string;
  tag: CategoryType;
  image: string;
  isNew: boolean;
}
