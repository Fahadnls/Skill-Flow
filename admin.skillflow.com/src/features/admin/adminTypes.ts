export type AdminSection =
  | 'dashboard'
  | 'users'
  | 'courses'
  | 'teams'
  | 'analytics'
  | 'content'
  | 'pricing'
  | 'settings';

export type StatusTone = 'green' | 'blue' | 'amber' | 'red' | 'slate' | 'purple';

export interface AdminNavItem {
  id: AdminSection;
  label: string;
  description: string;
}

export interface StatMetric {
  label: string;
  value: string;
  helper: string;
  trend: string;
  trendPositive: boolean;
}

export interface LearnerProgress {
  learner: string;
  email: string;
  team: string;
  path: string;
  progress: number;
  status: string;
  lastActivity: string;
}

export interface UserRecord {
  id: number;
  name: string;
  email: string;
  team: string;
  role: string;
  enrolledCourses: number;
  completionRate: number;
  status: string;
  lastActive: string;
}

export interface CourseRecord {
  id: number;
  title: string;
  category: string;
  lessons: number;
  enrolledLearners: number;
  completionRate: number;
  author: string;
  updatedDate: string;
  status: string;
}

export interface TeamRecord {
  id: number;
  name: string;
  members: number;
  paths: string[];
  completionRate: number;
  owner: string;
  plan: string;
  status: string;
}

export interface ActivityEvent {
  id: number;
  label: string;
  detail: string;
  time: string;
  type: StatusTone;
}

export interface AttentionItem {
  id: number;
  title: string;
  detail: string;
  severity: StatusTone;
}

export interface BlogPostRecord {
  id: number;
  title: string;
  author: string;
  category: string;
  status: string;
  publishDate: string;
  views: number;
  lastUpdated: string;
}

export interface PricingPlanRecord {
  id: number;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  activeCustomers: number;
  includedUsers: string;
  features: string[];
  status: string;
}

export interface IntegrationRecord {
  id: number;
  name: string;
  status: string;
  lastSync: string;
  owner: string;
}

export interface SupportTicket {
  id: number;
  subject: string;
  customer: string;
  priority: string;
  age: string;
}

export interface AnalyticsPoint {
  label: string;
  value: number;
}
