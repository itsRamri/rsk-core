/**
 * RSK Portfolio - Projects Database
 * Hands-on PCB Design, Arduino, and Circuit Engineering Projects
 */

export const projectsData = [
  {
    id: 'p1',
    category: 'pcb',
    categoryLabel: 'PCB Design & EDA',
    title: 'Custom Microcontroller & Power Carrier Board',
    subtitle: 'Schematic Capture & PCB Layout in Cadence OrCAD Capture CIS 17.2',
    description: 'Designed and laid out a custom 2-layer microcontroller development PCB using Cadence OrCAD Capture CIS 17.2. Created complete component schematic symbols, footprints, power traces, ground copper pour, and generated fabrication-ready Gerber RS-274X and drill files with zero Design Rule Check (DRC) violations.',
    architecture: 'Schematic Capture (OrCAD CIS 17.2) -> Footprint Mapping -> PCB Routing -> DRC Verification -> Gerber Export',
    specs: [
      'EDA Software: Cadence OrCAD Capture CIS (Version 17.2)',
      'Layer Stackup: 2-Layer FR-4 with bottom solid ground copper pour',
      'Power Stage: LM7805 & AMS1117 Linear Regulators (5V & 3.3V Rails) with decoupling capacitors',
      'Manufacturing Outputs: Gerber RS-274X files, Excellon Drill files & Bill of Materials (BOM)'
    ],
    tags: ['OrCAD Capture CIS 17.2', 'PCB Layout', 'Schematic Capture', 'Gerber RS-274X', 'DRC'],
    icon: 'fa-solid fa-layer-group',
    github: 'https://github.com',
    live: '#projects'
  },
  {
    id: 'p2',
    category: 'arduino',
    categoryLabel: 'Arduino & Robotics',
    title: 'Autonomous Obstacle Avoiding Robot',
    subtitle: 'Mobile Rover with Arduino Uno, HC-SR04 Sensor & L298N Motor Driver',
    description: 'Constructed an autonomous robotic vehicle controlled by an Arduino Uno. Interfaced an HC-SR04 ultrasonic distance sensor mounted on an SG90 micro servo to scan 180° ahead, calculate real-time distance vectors, and steer DC motors through an L298N H-bridge motor driver to avoid obstacles.',
    architecture: 'HC-SR04 Sensor -> Arduino Uno -> Distance Calculation Logic -> L298N Motor Driver -> Dual Geared DC Motors',
    specs: [
      'Microcontroller: Arduino Uno (ATmega328P @ 16MHz)',
      'Sensor & Servo: HC-SR04 Ultrasonic Distance Sensor + SG90 Micro Servo',
      'Motor Driver: L298N Dual H-Bridge Driver Module (2A peak output)',
      'Power System: 2x 18650 3.7V Li-ion battery pack with power distribution switch'
    ],
    tags: ['Arduino Uno', 'HC-SR04', 'L298N Driver', 'C/C++', 'Robotics'],
    icon: 'fa-solid fa-robot',
    github: 'https://github.com',
    live: '#projects'
  },
  {
    id: 'p3',
    category: 'circuits',
    categoryLabel: 'Basic Circuits & Power Supply',
    title: '5V Regulated DC Power Supply Circuit',
    subtitle: 'Step-Down Linear Power Supply with Bridge Rectifier & 7805 Regulator',
    description: 'Designed, breadboarded, and tested a linear regulated DC power supply circuit. Built a complete step-down and rectification stage using a step-down transformer, full-wave diode bridge, electrolytic filter capacitors for ripple reduction, and an LM7805 IC to supply a smooth 5V DC output with LED indicators.',
    architecture: '230V AC Mains -> Step-Down Transformer (12V AC) -> 1N4007 Bridge Rectifier -> 1000µF Filter -> LM7805 -> Regulated 5V DC',
    specs: [
      'Input Voltage: 230V AC stepped down to 12V AC via 500mA transformer',
      'Rectifier: Full-wave bridge rectifier using 4x 1N4007 silicon diodes',
      'Filter Stage: 1000µF electrolytic capacitor for low ripple factor (< 1%)',
      'Regulator: LM7805 IC delivering constant +5V DC with current limiting & LED power indicator'
    ],
    tags: ['LM7805', 'Bridge Rectifier', 'Filter Capacitors', 'Circuit Analysis', 'Breadboard'],
    icon: 'fa-solid fa-bolt',
    github: 'https://github.com',
    live: '#projects'
  },
  {
    id: 'p4',
    category: 'arduino',
    categoryLabel: 'Arduino & Automation',
    title: 'Smart Automatic Light & Relay Controller',
    subtitle: 'Automated Room Light Switch using Arduino & LDR Sensor Module',
    description: 'Built an automated lighting system using an Arduino microcontroller and a Light Dependent Resistor (LDR). Programmed threshold calibration and debouncing logic to sense ambient lighting and safely switch 230V AC appliances via an opto-isolated relay module.',
    architecture: 'LDR Light Sensor -> Arduino Analog In -> Threshold Logic -> 5V Optocoupler Relay -> AC Lamp',
    specs: [
      'Controller: Arduino Nano / Uno Microcontroller Board',
      'Sensor: Light Dependent Resistor (LDR) with 10kΩ voltage divider resistor',
      'Relay Module: 5V 1-Channel Opto-Isolated Relay (Rated 10A 250V AC)',
      'Firmware: Embedded C++ with hysteresis debouncing to prevent relay chattering'
    ],
    tags: ['Arduino', 'LDR Sensor', 'Relay Module', 'Automation', 'Embedded C'],
    icon: 'fa-solid fa-lightbulb',
    github: 'https://github.com',
    live: '#projects'
  },
  {
    id: 'p5',
    category: 'circuits',
    categoryLabel: 'Basic Circuits & Analog Electronics',
    title: 'Automatic Dark Sensor & Transistor Switch',
    subtitle: 'Autonomous Light-Activated Electronic Switch using BC547 Transistor',
    description: 'Constructed an analog dark-activated automatic switch using a BC547 NPN bipolar junction transistor. Configured a voltage divider with an LDR and potentiometer to accurately trigger the transistor base-emitter junction and illuminate high-brightness LEDs when light drops below a threshold.',
    architecture: 'LDR + Potentiometer Divider -> BC547 Transistor Base -> Collector Current Switch -> LED Output',
    specs: [
      'Transistor: BC547 NPN Bipolar Junction Transistor (BJT)',
      'Sensitivity Control: 10kΩ Potentiometer for variable threshold tuning',
      'Power: 9V DC Battery supply with reverse polarity protection diode',
      'Testing: Verified base-emitter switching voltage (0.7V) with digital multimeter'
    ],
    tags: ['BC547', 'LDR', 'Transistor Switch', 'Analog Circuit', 'Soldering'],
    icon: 'fa-solid fa-microchip',
    github: 'https://github.com',
    live: '#projects'
  }
];

