// src/constants/doctorsList.ts
import drRajneesh from "../../../../assets/images/Doctors/31.jpg";
import drYugal from "../../../../assets/images/Doctors/32.jpg";
import drManoj from "../../../../assets/images/Doctors/33.jpg";
import drNaresh from "../../../../assets/images/Doctors/34.jpg";
import drJalaj from "../../../../assets/images/Doctors/35.jpg";
import drHarit from "../../../../assets/images/Doctors/36.jpg";
import drAmit from "../../../../assets/images/Doctors/37.jpg";
import drPadman from "../../../../assets/images/Doctors/38.jpg";
import drRamani from "../../../../assets/images/Doctors/39.jpg";
import drVikas from "../../../../assets/images/Doctors/40.jpg";
import drAnil from "../../../../assets/images/Doctors/41.jpg";
import drSanjiv from "../../../../assets/images/Doctors/42.jpg";
import drBansal from "../../../../assets/images/Doctors/43.jpg";
import drAshok from "../../../../assets/images/Doctors/44.jpg";

export interface DoctorProfile {
  id: number;
  name: string;
  image: string;
}

export const doctorsList: DoctorProfile[] = [
  { id: 1, name: "Dr. Rajneesh Malhotra", image: drRajneesh },
  { id: 2, name: "Dr. Yugal Kishore Mishra", image: drYugal },
  { id: 3, name: "Dr. Manoj Luthra", image: drManoj },
  { id: 4, name: "Dr. Naresh Trehan", image: drNaresh },
  { id: 5, name: "Dr. Jalaj Baxi", image: drJalaj },
  { id: 6, name: "Dr. Harit Chaturvedi", image: drHarit },
  { id: 7, name: "Dr. Amit Javed", image: drAmit },
  { id: 8, name: "Dr. Padman", image: drPadman },
  { id: 9, name: "Dr. Ramani Narasimhan", image: drRamani },
  { id: 10, name: "Dr. Vikas Gupta", image: drVikas },
  { id: 11, name: "Dr. Anil Arora", image: drAnil },
  { id: 12, name: "Dr. Sanjiv K S Marya", image: drSanjiv },
  { id: 13, name: "Dr. S.S. Bansal", image: drBansal },
  { id: 14, name: "Dr. Ashok Seth", image: drAshok },
];
