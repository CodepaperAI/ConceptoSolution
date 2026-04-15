import { Zap, Database, Home, Shield, Server } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: typeof Zap
  capabilities: string[]
}

export const services: Service[] = [
  {
    id: 'smart-home',
    title: 'Smart Home Solutions',
    description:
      'Smart home control, climate control, lighting and blind automation, multi-room audio and integrated security for connected homes.',
    icon: Home,
    capabilities: [
      'Smart home control',
      'Climate control',
      'Lighting and blind automation',
      'Multi-room audio',
      'Security integration',
      'Control4, Crestron and Lutron systems',
    ],
  },
  {
    id: 'electrical',
    title: 'Electrical Solutions',
    description:
      'NICEIC-approved electrical installations, maintenance, testing and upgrades for homes, workplaces and commercial premises.',
    icon: Zap,
    capabilities: [
      'Electrical installations and maintenance',
      'House rewiring and consumer units',
      'Lighting and power',
      'Electrical testing and inspection',
      'Emergency lighting and smoke alarms',
      'BS 7671 compliant installations',
    ],
  },
  {
    id: 'it-support',
    title: 'IT Support',
    description:
      '24/7 UK-based IT support, Microsoft platform solutions, cloud migration and managed services for businesses.',
    icon: Server,
    capabilities: [
      'Collaboration and communication',
      'Business process automation',
      'Information management and compliance',
      'Microsoft platform solutions',
      'Managed services and support',
      'Cloud migration',
    ],
  },
  {
    id: 'data-fibre',
    title: 'Data & Networking',
    description:
      'Data wiring, IT networking design and structured cabling that support reliable connectivity across homes and commercial sites.',
    icon: Database,
    capabilities: [
      'Data wiring',
      'IT networking design',
      'Structured cabling',
      'Network installation',
      'Connected workspace infrastructure',
      'Reliable wired and wireless coverage',
    ],
  },
  {
    id: 'security',
    title: 'Security Systems',
    description:
      'CCTV, door entry, video entry and fire systems for homes, developments and commercial premises.',
    icon: Shield,
    capabilities: [
      'CCTV systems',
      'Door entry systems',
      'Video entry systems',
      'Fire systems',
      'Smoke alarms',
      'Integrated property protection',
    ],
  },
]
