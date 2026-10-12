import { Profile, Skill, EducationEntry, Project, AppMetadata } from '../types';

export const DEFAULT_PROFILE: Profile = {
  fullName: 'Nuzha Zainalabdeen Mohamed Ismail',
  registrationNumber: '25/27419',
  verificationCode: 'MOB-A2-7419',
  headline: 'Mobile Developer & Web Designer',
  biography: 'Passionate software engineering student specializing in mobile development, web design, and UI/UX. Experienced in building cross-platform applications with React Native and creating responsive web interfaces.',
  primarySkill: 'Mobile Development',
  availability: 'available',
  profileImageUri: null,
};

export const SKILLS: Skill[] = [
  { id: '1', name: 'Mobile Development' },
  { id: '2', name: 'Web Design' },
  { id: '3', name: 'UI/UX Design' },
  { id: '4', name: 'React Native' },
  { id: '5', name: 'JavaScript/TypeScript' },
  { id: '6', name: 'Responsive Design' },
];

export const EDUCATION: EducationEntry[] = [
  {
    id: '1',
    institution: 'INES-Ruhengeri',
    qualification: 'Bachelor of Software Engineering',
    startDate: '2023',
    endDate: '2026',
    description: 'Focus on mobile application development, web design, software architecture, and agile methodologies.',
  },
  {
    id: '2',
    institution: 'INES-Ruhengeri',
    qualification: 'SWE 3409 - Mobile Application Development',
    startDate: '2026',
    endDate: '2026',
    description: 'Course covering React Native, Expo, TypeScript, and mobile app deployment.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Musanze Market Application',
    problem: 'Local farmers and buyers in Musanze district lacked a digital platform to connect, leading to inefficient market access and price discovery.',
    contribution: 'Designed and developed the complete mobile application including UI/UX, vendor and buyer interfaces, product listings, and offline-capable data synchronization.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'AsyncStorage', 'React Navigation', 'Expo ImagePicker'],
    description: 'A marketplace application connecting farmers and buyers in Musanze district. Features product listings with images, categories, price negotiation, offline-first data persistence, and location-based discovery. Built as a capstone project demonstrating full-stack mobile development and UI/UX design skills.',
  },
];

export const APP_METADATA: AppMetadata = {
  appName: "Nuzha's Portfolio",
  version: '1.0.0',
  dataUseStatement: 'This application stores your editable profile information locally on your device using AsyncStorage. No data is transmitted to external servers. Camera and gallery permissions are requested only when you choose to update your profile photo. You can reset your profile data at any time from the Profile Editor screen.',
};