/**
 * RSK Portfolio - Projects Database
 * Hands-on PCB Design, Arduino, and Circuit Engineering Projects
 */

export const projectsData = [
  {
    id: 'p1',
    category: 'pcb',
    categoryLabel: 'PCB Design & EDA',
    title: 'IC 555 Board',
    subtitle: 'Schematic Capture & PCB Layout in Cadence OrCAD Capture CIS 17.2',
    description: 'Designed and laid out an IC 555 timer and LED array circuit PCB using Cadence OrCAD Capture CIS 17.2. Created complete component schematic symbols, footprints, power traces, and generated fabrication-ready Gerber RS-274X and drill files with zero Design Rule Check (DRC) violations.',
    architecture: 'Power Header (VCC/GND) -> NE555 Timer Stage -> LED Array -> Cadence OrCAD CIS 17.2 Verification',
    specs: [
      'EDA Software: Cadence OrCAD Capture CIS (Version 17.2)',
      'Timer Stage: NE555 IC with timing resistor/capacitor network',
      'Output Stage: Multi-channel LED array with current-limiting resistors',
      'Power Header: 2-pin polarized connector (VCC/GND)',
      'Manufacturing Outputs: Gerber RS-274X files, Excellon Drill files & Bill of Materials (BOM)'
    ],
    tags: ['OrCAD Capture CIS 17.2', 'IC 555 Timer', 'PCB Layout', 'Schematic Capture', 'DRC'],
    icon: 'fa-solid fa-layer-group',
    images: [
      '/PCB/schematic/Screenshot 2025-11-18 174725.png',
      '/PCB/schematic/Screenshot 2025-11-18 174557.png'
    ],
    github: 'https://github.com',
    live: '#projects'
  }
];

