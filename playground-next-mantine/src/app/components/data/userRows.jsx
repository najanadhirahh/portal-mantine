// import { randomCreatedDate } from "@mui/x-data-grid-generator";
// import { format } from "date-fns";

import { formatDate, generateRandomDate } from "@/app/utils/dateUtils";

export const roleMap = {
  admin: "Poisum Admin",
  missionCreator: "Mission Creator",
  user: "User",
};

export const genderMap = {
  male: "Male",
  female: "Female",
};

export const departmentMap = {
  hr: "HR",
  it: "IT",
  sales: "Sales",
};

export const jobGradeMap = {
  1: "G1",
  2: "G2",
  3: "G3",
  4: "G4",
  5: "G5",
};

export const userData = [
  {
    id: 1,
    code: "EMP001",
    name: "Johnathan Davis",
    role: "admin",
    email: "johnathan.davis@company.com",
    gender: "male",
    dob: formatDate(generateRandomDate(new Date(1985, 0, 1), new Date(1990, 11, 31))),
    designation: "Senior Manager",
    department: "hr",
    jobgrade: "G1",
    status: "active",
    reportTo: ""
  },
  {
    id: 2,
    code: "EMP002",
    name: "Sarah Chen",
    role: "manager",
    email: "sarah.chen@company.com",
    gender: "female",
    dob: formatDate(generateRandomDate(new Date(1988, 0, 1), new Date(1992, 11, 31))),
    designation: "Product Manager",
    department: "engineering",
    jobgrade: "G2",
    status: "active",
    reportTo: ""
  },
  {
    id: 3,
    code: "EMP003",
    name: "Michael Rodriguez",
    role: "user",
    email: "michael.rodriguez@company.com",
    gender: "male",
    dob: formatDate(generateRandomDate(new Date(1990, 0, 1), new Date(1995, 11, 31))),
    designation: "Software Engineer",
    department: "engineering",
    jobgrade: "G3",
    status: "active",
    reportTo: ""
  },
  {
    id: 4,
    code: "EMP004",
    name: "Emily Watson",
    role: "manager",
    email: "emily.watson@company.com",
    gender: "female",
    dob: formatDate(generateRandomDate(new Date(1983, 0, 1), new Date(1988, 11, 31))),
    designation: "Finance Director",
    department: "finance",
    jobgrade: "G1",
    status: "active",
    reportTo: ""
  },
  {
    id: 5,
    code: "EMP005",
    name: "David Kim",
    role: "user",
    email: "david.kim@company.com",
    gender: "male",
    dob: formatDate(generateRandomDate(new Date(1992, 0, 1), new Date(1997, 11, 31))),
    designation: "Marketing Specialist",
    department: "marketing",
    jobgrade: "G4",
    status: "active",
    reportTo: ""
  },
  {
    id: 6,
    code: "EMP006",
    name: "Jennifer Lopez",
    role: "supervisor",
    email: "jennifer.lopez@company.com",
    gender: "female",
    dob: formatDate(generateRandomDate(new Date(1987, 0, 1), new Date(1992, 11, 31))),
    designation: "HR Supervisor",
    department: "hr",
    jobgrade: "G2",
    status: "inactive",
    reportTo: ""
  },
  {
    id: 7,
    code: "EMP007",
    name: "Robert Johnson",
    role: "user",
    email: "robert.johnson@company.com",
    gender: "male",
    dob: formatDate(generateRandomDate(new Date(1980, 0, 1), new Date(1985, 11, 31))),
    designation: "Operations Manager",
    department: "operations",
    jobgrade: "G2",
    status: "active",
    reportTo: ""
  },
  {
    id: 8,
    code: "EMP008",
    name: "Amanda Smith",
    role: "user",
    email: "amanda.smith@company.com",
    gender: "female",
    dob: formatDate(generateRandomDate(new Date(1993, 0, 1), new Date(1998, 11, 31))),
    designation: "Data Analyst",
    department: "it",
    jobgrade: "G4",
    status: "active",
    reportTo: ""
  },
  {
    id: 9,
    code: "EMP009",
    name: "Christopher Lee",
    role: "manager",
    email: "christopher.lee@company.com",
    gender: "male",
    dob: formatDate(generateRandomDate(new Date(1978, 0, 1), new Date(1983, 11, 31))),
    designation: "IT Manager",
    department: "it",
    jobgrade: "G1",
    status: "active",
    reportTo: ""
  },
  {
    id: 10,
    code: "EMP010",
    name: "Michelle Garcia",
    role: "user",
    email: "michelle.garcia@company.com",
    gender: "female",
    dob: formatDate(generateRandomDate(new Date(1991, 0, 1), new Date(1996, 11, 31))),
    designation: "Sales Executive",
    department: "sales",
    jobgrade: "G5",
    status: "active",
    reportTo: ""
  },
  {
    id: 11,
    code: "EMP011",
    name: "Daniel Brown",
    role: "supervisor",
    email: "daniel.brown@company.com",
    gender: "male",
    dob: formatDate(generateRandomDate(new Date(1984, 0, 1), new Date(1989, 11, 31))),
    designation: "Quality Assurance Lead",
    department: "engineering",
    jobgrade: "G3",
    status: "active",
    reportTo: ""
  },
  {
    id: 12,
    code: "EMP012",
    name: "Jessica Wilson",
    role: "user",
    email: "jessica.wilson@company.com",
    gender: "female",
    dob: formatDate(generateRandomDate(new Date(1994, 0, 1), new Date(1999, 11, 31))),
    designation: "Business Development",
    department: "sales",
    jobgrade: "G5",
    status: "active",
    reportTo: ""
  },
  {
    id: 13,
    code: "EMP013",
    name: "Kevin Taylor",
    role: "user",
    email: "kevin.taylor@company.com",
    gender: "male",
    dob: formatDate(generateRandomDate(new Date(1986, 0, 1), new Date(1991, 11, 31))),
    designation: "Customer Support",
    department: "operations",
    jobgrade: "G6",
    status: "inactive",
    reportTo: ""
  },
  {
    id: 14,
    code: "EMP014",
    name: "Lisa Anderson",
    role: "manager",
    email: "lisa.anderson@company.com",
    gender: "female",
    dob: formatDate(generateRandomDate(new Date(1979, 0, 1), new Date(1984, 11, 31))),
    designation: "Finance Manager",
    department: "finance",
    jobgrade: "G2",
    status: "active",
    reportTo: ""
  },
  {
    id: 15,
    code: "EMP015",
    name: "Thomas Martinez",
    role: "admin",
    email: "thomas.martinez@company.com",
    gender: "male",
    dob: formatDate(generateRandomDate(new Date(1975, 0, 1), new Date(1980, 11, 31))),
    designation: "CTO",
    department: "engineering",
    jobgrade: "G1",
    status: "active",
    reportTo: ""
  }
];