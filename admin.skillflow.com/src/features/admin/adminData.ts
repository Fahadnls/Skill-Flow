import {
  ActivityEvent,
  AdminNavItem,
  AnalyticsPoint,
  AttentionItem,
  BlogPostRecord,
  CourseRecord,
  IntegrationRecord,
  LearnerProgress,
  PricingPlanRecord,
  StatMetric,
  SupportTicket,
  TeamRecord,
  UserRecord,
} from './adminTypes';

export const adminNavItems: AdminNavItem[] = [
  { id: 'dashboard', label: 'Dashboard', description: 'Overview' },
  { id: 'users', label: 'Users', description: 'Learners and admins' },
  { id: 'courses', label: 'Courses', description: 'Learning paths' },
  { id: 'teams', label: 'Teams', description: 'Groups and plans' },
  { id: 'analytics', label: 'Analytics', description: 'Reports' },
  { id: 'content', label: 'Content', description: 'Blog workflow' },
  { id: 'pricing', label: 'Pricing Plans', description: 'Commercial plans' },
  { id: 'settings', label: 'Settings', description: 'Workspace controls' },
];

export const dashboardStats: StatMetric[] = [
  { label: 'Active learners', value: '18,420', helper: '2,140 active today', trend: '+12.4%', trendPositive: true },
  { label: 'Course completion', value: '74%', helper: 'Across all learning paths', trend: '+4.8%', trendPositive: true },
  { label: 'Active teams', value: '286', helper: '18 added this month', trend: '+6.1%', trendPositive: true },
  { label: 'Monthly revenue', value: '$128.6K', helper: 'Net recurring revenue', trend: '+9.7%', trendPositive: true },
  { label: 'Open tickets', value: '23', helper: '6 above SLA watch', trend: '-3.2%', trendPositive: true },
  { label: 'Engagement', value: '81%', helper: 'Weekly learner activity', trend: '+2.9%', trendPositive: true },
];

export const recentActivity: ActivityEvent[] = [
  { id: 1, label: 'Ava Patel enrolled in Security Awareness 2026', detail: 'People & Culture assigned compliance track', time: '8 min ago', type: 'blue' },
  { id: 2, label: 'Sales invited 14 new members', detail: 'Invitations expire in 6 days', time: '24 min ago', type: 'green' },
  { id: 3, label: 'Product Knowledge Certification published', detail: 'Visible to Growth and Business plans', time: '1 hr ago', type: 'purple' },
  { id: 4, label: 'Blog post scheduled', detail: 'Onboarding metrics guide set for Aug 2', time: '2 hrs ago', type: 'amber' },
  { id: 5, label: 'Google Workspace sync completed', detail: '1,284 learners reconciled', time: '3 hrs ago', type: 'green' },
  { id: 6, label: 'Business plan pricing updated', detail: 'Annual plan changed for new customers', time: '5 hrs ago', type: 'blue' },
];

export const learningProgress: LearnerProgress[] = [
  { learner: 'Maya Chen', email: 'maya.chen@northstar.co', team: 'Product', path: 'New Manager Foundations', progress: 92, status: 'On track', lastActivity: 'Today' },
  { learner: 'Omar Rahman', email: 'omar.rahman@orbitly.com', team: 'Engineering', path: 'Security Awareness 2026', progress: 48, status: 'At risk', lastActivity: '4 days ago' },
  { learner: 'Isabella Ross', email: 'isabella.ross@signalworks.io', team: 'Customer Success', path: 'Customer Success Onboarding', progress: 76, status: 'On track', lastActivity: 'Yesterday' },
  { learner: 'Noah Brooks', email: 'noah.brooks@luma.dev', team: 'Sales', path: 'Sales Enablement Essentials', progress: 36, status: 'Overdue', lastActivity: '9 days ago' },
  { learner: 'Priya Nair', email: 'priya.nair@brightops.com', team: 'Operations', path: 'Workplace Compliance', progress: 88, status: 'On track', lastActivity: 'Today' },
];

export const initialUsers: UserRecord[] = [
  { id: 1, name: 'Maya Chen', email: 'maya.chen@northstar.co', team: 'Product', role: 'Manager', enrolledCourses: 6, completionRate: 92, status: 'Active', lastActive: 'Today' },
  { id: 2, name: 'Omar Rahman', email: 'omar.rahman@orbitly.com', team: 'Engineering', role: 'Learner', enrolledCourses: 4, completionRate: 48, status: 'At risk', lastActive: '4 days ago' },
  { id: 3, name: 'Isabella Ross', email: 'isabella.ross@signalworks.io', team: 'Customer Success', role: 'Admin', enrolledCourses: 8, completionRate: 76, status: 'Active', lastActive: 'Yesterday' },
  { id: 4, name: 'Noah Brooks', email: 'noah.brooks@luma.dev', team: 'Sales', role: 'Learner', enrolledCourses: 5, completionRate: 36, status: 'Overdue', lastActive: '9 days ago' },
  { id: 5, name: 'Priya Nair', email: 'priya.nair@brightops.com', team: 'Operations', role: 'Manager', enrolledCourses: 7, completionRate: 88, status: 'Active', lastActive: 'Today' },
  { id: 6, name: 'Daniel Kim', email: 'daniel.kim@northstar.co', team: 'People & Culture', role: 'Owner', enrolledCourses: 9, completionRate: 95, status: 'Active', lastActive: 'Today' },
];

export const courses: CourseRecord[] = [
  { id: 1, title: 'New Manager Foundations', category: 'Leadership', lessons: 18, enrolledLearners: 1240, completionRate: 82, author: 'Lena Ortiz', updatedDate: 'Jul 18, 2026', status: 'Published' },
  { id: 2, title: 'Security Awareness 2026', category: 'Compliance', lessons: 12, enrolledLearners: 18200, completionRate: 69, author: 'Nadia Wells', updatedDate: 'Jul 15, 2026', status: 'Published' },
  { id: 3, title: 'Customer Success Onboarding', category: 'Customer Success', lessons: 22, enrolledLearners: 890, completionRate: 77, author: 'Jon Bell', updatedDate: 'Jul 12, 2026', status: 'Draft' },
  { id: 4, title: 'Workplace Compliance', category: 'Compliance', lessons: 15, enrolledLearners: 15340, completionRate: 71, author: 'Tessa Ford', updatedDate: 'Jun 28, 2026', status: 'Published' },
  { id: 5, title: 'Sales Enablement Essentials', category: 'Sales', lessons: 20, enrolledLearners: 1040, completionRate: 63, author: 'Malik Stone', updatedDate: 'Jun 14, 2026', status: 'Archived' },
  { id: 6, title: 'Product Knowledge Certification', category: 'Product', lessons: 16, enrolledLearners: 720, completionRate: 58, author: 'Erin Cho', updatedDate: 'Jul 20, 2026', status: 'Published' },
];

export const teams: TeamRecord[] = [
  { id: 1, name: 'Product', members: 86, paths: ['New Manager Foundations', 'Product Knowledge Certification'], completionRate: 79, owner: 'Maya Chen', plan: 'Business', status: 'Active' },
  { id: 2, name: 'Engineering', members: 214, paths: ['Security Awareness 2026'], completionRate: 68, owner: 'Victor Lane', plan: 'Enterprise', status: 'Active' },
  { id: 3, name: 'Customer Success', members: 72, paths: ['Customer Success Onboarding'], completionRate: 81, owner: 'Isabella Ross', plan: 'Growth', status: 'Active' },
  { id: 4, name: 'Sales', members: 118, paths: ['Sales Enablement Essentials'], completionRate: 61, owner: 'Noah Brooks', plan: 'Business', status: 'Review' },
  { id: 5, name: 'Operations', members: 54, paths: ['Workplace Compliance'], completionRate: 84, owner: 'Priya Nair', plan: 'Growth', status: 'Active' },
  { id: 6, name: 'People & Culture', members: 39, paths: ['Workplace Compliance', 'New Manager Foundations'], completionRate: 91, owner: 'Daniel Kim', plan: 'Enterprise', status: 'Active' },
];

export const attentionItems: AttentionItem[] = [
  { id: 1, title: '128 learners below 40% completion', detail: 'Mostly Sales Enablement Essentials and Security Awareness 2026', severity: 'amber' },
  { id: 2, title: 'Compliance training overdue', detail: '43 learners passed the due date across Engineering and Sales', severity: 'red' },
  { id: 3, title: 'HRIS sync failed', detail: 'BrightOps workspace has not synced in 18 hours', severity: 'red' },
  { id: 4, title: '5 course drafts unpublished', detail: 'Customer Success Onboarding is pending final review', severity: 'blue' },
  { id: 5, title: '26 invitations expiring', detail: 'Sales team invites expire within 48 hours', severity: 'amber' },
];

export const engagementData: AnalyticsPoint[] = [
  { label: 'Mon', value: 62 },
  { label: 'Tue', value: 78 },
  { label: 'Wed', value: 71 },
  { label: 'Thu', value: 84 },
  { label: 'Fri', value: 88 },
  { label: 'Sat', value: 43 },
  { label: 'Sun', value: 51 },
];

export const completionTrend: AnalyticsPoint[] = [
  { label: 'Feb', value: 58 },
  { label: 'Mar', value: 62 },
  { label: 'Apr', value: 67 },
  { label: 'May', value: 65 },
  { label: 'Jun', value: 71 },
  { label: 'Jul', value: 74 },
];

export const blogPosts: BlogPostRecord[] = [
  { id: 1, title: 'How to Measure Onboarding Readiness', author: 'Lena Ortiz', category: 'Onboarding', status: 'Published', publishDate: 'Jul 16, 2026', views: 18420, lastUpdated: 'Jul 18, 2026' },
  { id: 2, title: 'Compliance Training Without Learner Fatigue', author: 'Nadia Wells', category: 'Compliance', status: 'Scheduled', publishDate: 'Aug 2, 2026', views: 0, lastUpdated: 'Jul 19, 2026' },
  { id: 3, title: 'Building Learning Paths for Distributed Teams', author: 'Jon Bell', category: 'Workforce Development', status: 'Draft', publishDate: 'Unscheduled', views: 0, lastUpdated: 'Jul 12, 2026' },
  { id: 4, title: 'Manager Enablement Metrics That Matter', author: 'Erin Cho', category: 'Leadership', status: 'Published', publishDate: 'Jun 28, 2026', views: 12680, lastUpdated: 'Jul 3, 2026' },
];

export const pricingPlans: PricingPlanRecord[] = [
  { id: 1, name: 'Starter', monthlyPrice: 9, annualPrice: 90, activeCustomers: 428, includedUsers: 'Up to 25', features: ['Core courses', 'Basic analytics', 'Email support'], status: 'Active' },
  { id: 2, name: 'Growth', monthlyPrice: 19, annualPrice: 190, activeCustomers: 312, includedUsers: 'Up to 100', features: ['Learning paths', 'Team reports', 'Integrations'], status: 'Active' },
  { id: 3, name: 'Business', monthlyPrice: 39, annualPrice: 390, activeCustomers: 146, includedUsers: 'Up to 500', features: ['Advanced analytics', 'Custom branding', 'Priority support'], status: 'Active' },
  { id: 4, name: 'Enterprise', monthlyPrice: 79, annualPrice: 790, activeCustomers: 58, includedUsers: 'Unlimited', features: ['SSO', 'HRIS sync', 'Dedicated success manager'], status: 'Active' },
];

export const integrations: IntegrationRecord[] = [
  { id: 1, name: 'Slack', status: 'Connected', lastSync: '12 min ago', owner: 'Daniel Kim' },
  { id: 2, name: 'Microsoft Teams', status: 'Connected', lastSync: '32 min ago', owner: 'Priya Nair' },
  { id: 3, name: 'Google Workspace', status: 'Connected', lastSync: '3 hrs ago', owner: 'Maya Chen' },
  { id: 4, name: 'HRIS sync', status: 'Failed', lastSync: '18 hrs ago', owner: 'Daniel Kim' },
  { id: 5, name: 'Single sign-on', status: 'Connected', lastSync: '1 day ago', owner: 'Victor Lane' },
  { id: 6, name: 'Webhooks', status: 'Paused', lastSync: '5 days ago', owner: 'Erin Cho' },
];

export const supportTickets: SupportTicket[] = [
  { id: 1, subject: 'Bulk enrollment CSV failed validation', customer: 'Northstar Co', priority: 'High', age: '6 hrs' },
  { id: 2, subject: 'SCORM package preview not loading', customer: 'SignalWorks', priority: 'Medium', age: '11 hrs' },
  { id: 3, subject: 'Invoice recipient needs update', customer: 'BrightOps', priority: 'Low', age: '1 day' },
];
