export const skillCategories = [
  { id: 'all', label: 'All Skills', icon: 'fa-solid fa-border-all' },
  { id: 'pcb', label: 'PCB Design', icon: 'fa-solid fa-layer-group' },
  { id: 'arduino', label: 'Arduino & Embedded', icon: 'fa-solid fa-microchip' },
  { id: 'circuits', label: 'Basic Circuits', icon: 'fa-solid fa-bolt' }
];

export const skillsData = [
  {
    id: 's1',
    category: 'pcb',
    title: 'PCB Designing & Schematic Capture',
    level: 'Cadence OrCAD Capture CIS 17.2',
    percent: 95,
    icon: 'fa-solid fa-layer-group',
    tags: ['OrCAD Capture CIS 17.2', 'Schematic Capture', 'Component Libraries', 'Gerber Files', 'DRC Check']
  },
  {
    id: 's2',
    category: 'pcb',
    title: 'PCB Layout & Track Routing',
    level: '2-Layer PCB Layout & Ground Planes',
    percent: 90,
    icon: 'fa-solid fa-bezier-curve',
    tags: ['Track Routing', 'Ground Pours', 'Footprint Design', 'Design Rule Check', 'BOM Generation']
  },
  {
    id: 's3',
    category: 'arduino',
    title: 'Arduino Programming & Prototyping',
    level: 'Arduino Uno / Nano & Embedded C/C++',
    percent: 88,
    icon: 'fa-solid fa-microchip',
    tags: ['Arduino IDE', 'C/C++', 'Ultrasonic Sensors', 'Servo Motors', 'Motor Drivers (L298N)']
  },
  {
    id: 's4',
    category: 'arduino',
    title: 'Sensor & Module Interfacing',
    level: 'LDR, Relays, LCD & Analog/Digital Sensors',
    percent: 85,
    icon: 'fa-solid fa-sliders',
    tags: ['LDR Sensors', 'Relay Modules', '16x2 LCD Display', 'ADC Reading', 'Actuator Control']
  },
  {
    id: 's5',
    category: 'circuits',
    title: 'Basic Electronic Circuits & Power Supplies',
    level: 'AC-to-DC Regulated Power Supplies (7805/LM317)',
    percent: 92,
    icon: 'fa-solid fa-bolt',
    tags: ['Bridge Rectifiers', 'Voltage Regulators', 'Filter Capacitors', 'Transformers', 'Diodes & LEDs']
  },
  {
    id: 's6',
    category: 'circuits',
    title: 'Hardware Prototyping & Soldering',
    level: 'Breadboarding, SMD/THT Soldering & Multimeter',
    percent: 94,
    icon: 'fa-solid fa-screwdriver-wrench',
    tags: ['Breadboard Testing', 'Soldering Iron', 'Digital Multimeter', 'Circuit Debugging', 'Component Testing']
  }
];


