# Off-Grid Energy System Design

A comprehensive web application showcasing a complete off-grid energy system with solar generation, battery storage, and maximum EMP protection. This project provides detailed system documentation, interactive diagrams, and component specifications for a robust 48V off-grid energy solution.

**Created by Captain ASIC**

![Off-Grid Energy System](./src/assets/enhanced_off_grid_system_diagram.png)

## 🌟 Features

### 🔋 System Overview
- **3.6kW Solar Capacity** (4.5kW with bifacial gain)
- **28.6kWh Battery Storage** (LiFePO4 chemistry)
- **12kW Inverter Output** (Split phase 120V/240V)
- **48V System Voltage** (Low voltage safety)

### 🛡️ Maximum EMP Protection
- **5x EMP Shield Units** strategically placed throughout the system
- **Military-grade protection** against solar flares, EMPs, and lightning
- **Comprehensive surge protection** at every critical junction
- **Future-ready protection** for wind turbine and generator expansion

### 📊 Interactive Documentation
- **System Diagram**: Detailed electrical layout with all components
- **Component Specifications**: Complete technical details for all equipment
- **Protection Network**: Comprehensive overview of EMP and surge protection
- **Future Expansion**: Planned additions with dedicated protection

### 🎨 Modern Web Interface
- **Dark Mode Design**: Professional, easy-on-the-eyes interface
- **Responsive Layout**: Works perfectly on desktop and mobile devices
- **Interactive Tabs**: Easy navigation between different system aspects
- **Downloadable Diagrams**: High-resolution system diagrams for reference

## 🚀 Quick Start

### Railway Deployment (Recommended)

1. **Fork this repository** to your GitHub account

2. **Connect to Railway**:
   - Visit [Railway.app](https://railway.app)
   - Sign in with your GitHub account
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your forked repository

3. **Automatic Deployment**:
   - Railway will automatically detect the React app
   - Build and deployment will start immediately
   - Your app will be live at a Railway-provided URL

### Local Development

#### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

#### Installation

```bash
# Clone the repository
git clone https://github.com/CaptainASIC/offgridpower.git
cd offgridpower

# Install dependencies
pnpm install
# or
npm install

# Start development server
pnpm dev
# or
npm run dev

# Open http://localhost:5173 in your browser
```

#### Build for Production

```bash
# Build the application
pnpm build
# or
npm run build

# Preview the production build
pnpm preview
# or
npm run preview
```

## 🏗️ System Architecture

### Solar Generation
- **2 Arrays**: 4 panels each (dual MPPT configuration)
- **Panel Type**: SolarEver 450W Bifacial (SE-182-105-450M-96-BD)
- **Array Output**: 1.8kW per array (3.6kW total, 4.5kW with bifacial gain)
- **Distance**: 50ft DC run to powershed

### Energy Storage
- **Battery Bank**: 2x EG4 WallMount 48V 280Ah (14.3kWh each)
- **Total Capacity**: 28.6kWh usable storage
- **Chemistry**: LiFePO4 (8000+ cycles @ 80% DOD)
- **Integrated Features**: 600A busbars, heating, UL certifications

### Power Conversion
- **Inverter**: EG4 12000XP (SKU: 1511036)
- **Output**: 12kW continuous, split phase 120V/240V
- **PV Input**: 24kW total capacity, dual MPPT design
- **Charge Rate**: 250A maximum battery charging

### Distribution Network
- **Main Subpanel**: Split phase distribution with EMP protection
- **Garage Service**: 200A @ 60ft (4/0 AWG cable) + dedicated EMP Shield
- **House Service**: 200A @ 180ft (4/0 AWG cable) + dedicated EMP Shield

## 🛡️ Protection Systems

### EMP Shield Network (5 Units Total)
1. **Powershed DC Protection**: 2x EMP Shield Dual 220-300V DC (MPPT inputs)
2. **Powershed AC Protection**: 1x EMP Shield Home Concealed (main output)
3. **Garage Panel Protection**: 1x EMP Shield Home Concealed
4. **House Panel Protection**: 1x EMP Shield Home Concealed

### Surge Protection Devices
- **Midnite Solar MNSPD-300-DC**: Array protection, MPPT inputs, wind system
- **Midnite Solar MNSPD-300-AC**: AC output, building entries, generator
- **DC Cutoff Switches**: Manual disconnect capability at each array

## 🔮 Future Expansion

### Wind Turbine Addition
- **Model**: Raptor G5 5-Blade Wind Turbine (2kW @ 48V)
- **Features**: Carbon fiber blades, 70" rotor diameter
- **Location**: 20ft from solar arrays
- **Protection**: Dedicated EMP Shield DC protection

### Generator Backup
- **Model**: Generac Guardian 10kW Standby (Model: G0071710)
- **Fuel**: Natural gas or propane options
- **Features**: WiFi enabled, automatic transfer switch
- **Protection**: Dedicated EMP Shield AC protection

## 🛠️ Technology Stack

### Frontend
- **React 19**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React component library
- **Lucide React**: Beautiful icon library

### Deployment
- **Railway**: Primary deployment platform
- **Docker**: Containerized deployment option
- **Nixpacks**: Automatic build detection and optimization

## 📁 Project Structure

```
offgridpower/
├── src/
│   ├── components/          # Reusable UI components
│   │   └── ui/             # shadcn/ui components
│   ├── assets/             # Images and static files
│   │   └── enhanced_off_grid_system_diagram.png
│   ├── App.jsx             # Main application component
│   └── main.jsx            # Application entry point
├── public/                 # Static public assets
├── dist/                   # Production build output
├── railway.json            # Railway deployment configuration
├── Dockerfile              # Docker containerization
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── components.json         # shadcn/ui configuration
└── README.md              # This file
```

## 🔧 Configuration Files

### Railway Deployment (`railway.json`)
```json
{
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm run build"
  },
  "deploy": {
    "startCommand": "npm run preview",
    "healthcheckPath": "/",
    "restartPolicyType": "ON_FAILURE"
  }
}
```

### Docker Deployment (`Dockerfile`)
- Multi-stage build for optimized production image
- Node.js 20 Alpine base for minimal size
- Serves static files with `serve` package

## 📊 Component Specifications

### Solar Panels (8x SolarEver 450W Bifacial)
- **Model**: SE-182-105-450M-96-BD
- **Power**: 450W nominal (up to 562W with bifacial gain)
- **Voltage**: 35.03V VOC, 16.05A ISC
- **Technology**: Monocrystalline silicon with bifacial design

### Batteries (2x EG4 WallMount)
- **Model**: EG4-WM-48V-280AH (SKU: 1511092)
- **Capacity**: 280Ah (14.3kWh) each
- **Voltage**: 48V nominal
- **Cycle Life**: 8000+ cycles @ 80% DOD
- **Features**: Indoor heated, UL1973/UL9540A certified

### Inverter (EG4 12000XP)
- **Model**: EG4-12000XP (SKU: 1511036)
- **Output**: 12kW continuous, 24kW surge
- **Input**: 24kW PV capacity, dual MPPT
- **Voltage**: 48V DC, split phase 120V/240V AC
- **Efficiency**: >97% peak efficiency

## 🔒 Security & Protection

### EMP Protection Strategy
- **Layered Defense**: Protection at every critical electrical junction
- **Military Standards**: E1/E2/E3 protection against all EMP types
- **Lightning Protection**: >228,000A solar flare protection
- **Surge Suppression**: Coordinated SPD network throughout system

### System Redundancy
- **Dual MPPT**: Independent solar array processing
- **Multiple Protection Points**: Redundant surge protection
- **Future Backup**: Generator integration for extended outages
- **Scalable Design**: Easy expansion without system redesign

## 📈 Performance Metrics

### Energy Production
- **Daily Generation**: 14-22 kWh (depending on season/weather)
- **Peak Power**: 4.5kW with bifacial gain
- **Annual Production**: ~6,500-8,000 kWh estimated

### Storage Capacity
- **Usable Storage**: 28.6kWh (80% DOD recommended)
- **Backup Duration**: 1-3 days typical household usage
- **Cycle Life**: 20+ year expected battery life

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Captain ASIC**
- GitHub: [@CaptainASIC](https://github.com/CaptainASIC)
- Project Repository: [offgridpower](https://github.com/CaptainASIC/offgridpower)

## 🙏 Acknowledgments

- **Component Manufacturers**: EG4, SolarEver, Midnite Solar, EMP Shield, Generac
- **Technology Stack**: React, Vite, Tailwind CSS, shadcn/ui
- **Deployment Platform**: Railway for seamless hosting
- **Design Inspiration**: Modern dark mode interfaces and technical documentation

## 📞 Support

For questions about the system design or technical implementation:

1. **System Design**: Consult with certified solar installers
2. **Code Issues**: Open an issue in this [repository](https://github.com/CaptainASIC/offgridpower/issues)
3. **Component Questions**: Contact respective manufacturers
4. **Deployment Help**: Check Railway documentation

## 🔗 Links

- **Live Demo**: [Deploy your own on Railway](https://railway.app)
- **Repository**: [https://github.com/CaptainASIC/offgridpower](https://github.com/CaptainASIC/offgridpower)
- **Issues**: [Report bugs or request features](https://github.com/CaptainASIC/offgridpower/issues)

---

**⚡ Built for resilience, designed for the future, protected against everything.**

*Created with ❤️ by Captain ASIC*

