export interface VolunteerOpportunity {
  id: number;
  state: string;
  location: string;
  skills: string;
  hoursPerWeek: string;
  roles: string[];
  minimumDuration: string;
  accommodation: string;
  tag: string;
  image: string;
  isNew: boolean;
}

export const volunteerOpportunities: VolunteerOpportunity[] = [
  {
    id: 1,
    state: "Himachal Pradesh",
    location: "Nainital",
    skills: "Content Writer/ Support Manager",
    hoursPerWeek: "25h/week",
    roles: ["Kitchen Hand", "Bartending"],
    minimumDuration: "At least 4 weeks",
    accommodation: "Dom Bed",
    tag: "Sustainability",
    image: "/images/image.svg",
    isNew: true,
  },
  {
    id: 2,
    state: "Himachal Pradesh",
    location: "Nainital",
    skills: "Content Writer/ Support Manager",
    hoursPerWeek: "25h/week",
    roles: ["Kitchen Hand", "Bartending"],
    minimumDuration: "At least 4 weeks",
    accommodation: "Dom Bed",
    tag: "Sustainability",
    image: "/images/image1.svg",
    isNew: false,
  },
  {
    id: 3,
    state: "Himachal Pradesh",
    location: "Nainital",
    skills: "Content Writer/ Support Manager",
    hoursPerWeek: "25h/week",
    roles: ["Kitchen Hand", "Bartending"],
    minimumDuration: "At least 4 weeks",
    accommodation: "Dom Bed",
    tag: "Sustainability",
    image: "/images/image2.svg",
    isNew: true,
  },
  {
    id: 4,
    state: "Himachal Pradesh",
    location: "Nainital",
    skills: "Content Writer/ Support Manager",
    hoursPerWeek: "25h/week",
    roles: ["Kitchen Hand", "Bartending"],
    minimumDuration: "At least 4 weeks",
    accommodation: "Dom Bed",
    tag: "Sustainability",
    image: "/images/image3.svg",
    isNew: true,
  },
  {
    id: 5,
    state: "Himachal Pradesh",
    location: "Nainital",
    skills: "Content Writer/ Support Manager",
    hoursPerWeek: "25h/week",
    roles: ["Kitchen Hand", "Bartending"],
    minimumDuration: "At least 4 weeks",
    accommodation: "Dom Bed",
    tag: "Sustainability",
    image: "/images/image4.svg",
    isNew: true,
  },
  {
    id: 6,
    state: "Himachal Pradesh",
    location: "Nainital",
    skills: "Content Writer/ Support Manager",
    hoursPerWeek: "25h/week",
    roles: ["Kitchen Hand", "Bartending"],
    minimumDuration: "At least 4 weeks",
    accommodation: "Dom Bed",
    tag: "Sustainability",
    image: "/images/image.svg",
    isNew: true,
  },
  {
    id: 7,
    state: "Himachal Pradesh",
    location: "Nainital",
    skills: "Content Writer/ Support Manager",
    hoursPerWeek: "25h/week",
    roles: ["Kitchen Hand", "Bartending"],
    minimumDuration: "At least 4 weeks",
    accommodation: "Dom Bed",
    tag: "Sustainability",
    image: "/images/image1.svg",
    isNew: true,
  },
  {
    id: 8,
    state: "Himachal Pradesh",
    location: "Nainital",
    skills: "Content Writer/ Support Manager",
    hoursPerWeek: "25h/week",
    roles: ["Kitchen Hand", "Bartending"],
    minimumDuration: "At least 4 weeks",
    accommodation: "Dom Bed",
    tag: "Sustainability",
    image: "/images/image2.svg",
    isNew: true,
  },
];
