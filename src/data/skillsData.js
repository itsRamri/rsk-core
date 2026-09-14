export const skillCategories = [
  { id: 'all', label: 'All Skills', icon: 'fa-solid fa-border-all' },
  { id: 'pcb', label: 'PCB Design', icon: 'fa-solid fa-layer-group' }
];

export const skillsData = [
  {
    id: 's1',
    category: 'pcb',
    title: 'PCB Designing & Schematic Capture',
    level: 'Cadence OrCAD Capture CIS 17.2',
    percent: 95,
    icon: 'fa-solid fa-layer-group',
    tags: ['OrCAD Capture CIS 17.2', 'Schematic Capture', 'Component Libraries', 'Gerber Files', 'DRC Check'],
    images: [
      '/PCB/schematic/Screenshot 2025-11-18 174725.png',
      '/PCB/schematic/Screenshot 2025-11-18 174557.png'
    ]
  },
  {
    id: 's2',
    category: 'pcb',
    title: 'PCB Layout & Track Routing',
    level: '2-Layer PCB Layout & Ground Planes',
    percent: 90,
    icon: 'fa-solid fa-bezier-curve',
    tags: ['Track Routing', 'Ground Pours', 'Footprint Design', 'Design Rule Check', 'BOM Generation'],
    proofTitle: 'PCB Layout & Routing Proof:',
    images: [
      '/PCB/Layout/Screenshot 2025-11-19 000539.png',
      '/PCB/Layout/Screenshot 2025-11-19 000559.png',
      '/PCB/Layout/Screenshot 2025-11-19 104726.png',
      '/PCB/Layout/Screenshot 2025-11-19 104804.png',
      '/PCB/Layout/Screenshot 2025-11-19 194022.png',
      '/PCB/Layout/Screenshot 2025-11-19 201106.png',
      '/PCB/Layout/Screenshot 2025-11-19 201405.png',
      '/PCB/Layout/Screenshot 2025-11-19 205351.png',
      '/PCB/Layout/Screenshot 2025-11-19 215802.png'
    ]
  }
];


