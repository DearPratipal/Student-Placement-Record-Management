import React from 'react';

export enum UserRole {
  ADMIN = 'ADMIN',
  TNP_HEAD = 'TNP_HEAD',
  TNP_OFFICER = 'TNP_OFFICER',
  COORDINATOR = 'COORDINATOR'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
}

export interface Student {
  id: string;
  rollNo: string;
  name: string;
  email: string;
  department: string;
  cgpa: number;
  placed: boolean;
  backlogs: number;
  missedDrives: number; // For inactive analysis
  status: 'ACTIVE' | 'INACTIVE' | 'PLACED';
}

export interface Drive {
  id: string;
  companyName: string;
  role: string;
  packageLPA: number;
  date: string;
  eligibilityCgpa: number;
  eligibleBranches: string[];
  status: 'UPCOMING' | 'ONGOING' | 'COMPLETED';
  description: string;
}

export interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
  color?: string;
}