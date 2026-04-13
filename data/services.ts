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
    description: 'Integrated automation and audio-visual systems for modern living. One platform controlling your lighting, climate, entertainment, and security.',
    icon: Home,
    capabilities: [
      'Home automation platforms',
      'Audio-visual systems',
      'Lighting control',
      'Climate control integration',
      'Security integration',
      'Motorised window treatments',
    ],
  },
  {
    id: 'electrical',
    title: 'Electrical Solutions',
    description: 'Complete electrical installations for residential and commercial projects. From new builds to full rewrites, we spec, supply, and install.',
    icon: Zap,
    capabilities: [
      'New construction wiring',
      'Full rewires and panel upgrades',
      'LED lighting design and installation',
      'Three-phase commercial installations',
      'Emergency and exit lighting',
      'Main switchboard installations',
    ],
  },
  {
    id: 'it-support',
    title: 'IT Support',
    description: '24/7 UK-based IT support for businesses. Server setup, network maintenance, workstation deployment, and managed services.',
    icon: Server,
    capabilities: [
      'Server room setup',
      'Network infrastructure',
      'Workstation deployment',
      'Managed IT support',
      'Cloud integration',
      'Office relocations',
    ],
  },
  {
    id: 'data-fibre',
    title: 'Data & Fibre',
    description: 'High-performance network infrastructure. Structured cabling and fibre installations for homes and commercial spaces.',
    icon: Database,
    capabilities: [
      'Structured cabling (Cat6a, Cat7)',
      'Fibre to the room (FTTR)',
      'Network rack installation',
      'Commercial WiFi systems',
      'Data centre cabling',
      'Testing and certification',
    ],
  },
  {
    id: 'security',
    title: 'Security Systems',
    description: 'Professional surveillance and access control. We design systems appropriate to your property—then install and commission them.',
    icon: Shield,
    capabilities: [
      'CCTV systems (HD, 4K, IP)',
      'Access control and entry systems',
      'Intruder alarm systems',
      'Video doorbells',
      'Perimeter detection',
      'Remote monitoring integration',
    ],
  },
]
