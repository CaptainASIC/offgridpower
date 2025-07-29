# Off-Grid Energy System Component Specifications

## Solar Array Configuration
- 2 arrays of 4 panels each (8 total panels)
- SolarEver 450W bifacial panels (up to 562W with bifacial gain)
- Panel Specifications:
  - Wattage: 450W (up to 562W bifacial)
  - VOC (Open Circuit Voltage): 35.03V
  - ISC (Short Circuit Current): 16.05A
  - Dimensions: 69.73 x 44.64 x 1.18 inches
- Total solar capacity: 8 × 450W = 3,600W (3.6kW)
- Maximum bifacial capacity: 8 × 562W = 4,496W (4.5kW)

## EG4 12000XP Inverter Specifications
- Model: EG4 12000XP Off-Grid Inverter
- Rated Output Power: 12,000W (12kW)
- Max Charging Current: 250A
- Number of MPPTs: 2 (12,000W per MPPT)
- Max PV Input: 24kW total
- Input Voltage: Up to 480VDC
- Split Phase Output: 120V/240V
- Paralleling: Up to 16 units for 192kW

## EG4 Wall Mount Battery Specifications
- Model: EG4-WallMount Indoor Battery
- Voltage: 48V
- Capacity: 280Ah (14.3kWh per battery)
- Quantity: 2 batteries
- Total Battery Capacity: 2 × 14.3kWh = 28.6kWh
- Cycle Life: >8000 cycles at 80% DOD
- Weight: 282.2 lbs (128 kg) each
- Integrated 600A busbars
- Built-in heating for cold weather operation
- Safety Certifications: UL1973, UL9540A

## System Layout Requirements
- 50ft run from arrays to powershed
- 10ft run from inverter to AC distribution
- 60ft run to garage (200A service)
- 180ft total run to house (200A service)
- SPDs (Surge Protection Devices) at multiple points
- EMP Shields on both DC and AC sides
- Future windmill connection provision

## Protection Components
- Midnight SPDs at arrays
- Cutoff switches at arrays
- SPD at powershed DC input
- EMP Shield (DC) before inverter
- AC SPD after inverter
- AC EMP Shield before subpanel
- SPDs before each building run
- SPDs at each building entry point



## Specific Protection Device Specifications

### Midnite Solar SPDs
- **DC SPD**: MNSPD-300-DC
  - Nominal Voltage: 0 to 300 VDC
  - Type 1 SPD for indoor/outdoor use
  - Model: MNSPD-300-DC
  - SKU: 1529012

- **AC SPD**: MNSPD-300-AC
  - Nominal Voltage: 0 to 250 VAC
  - Type 1 SPD for indoor/outdoor use
  - Model: MNSPD-300-AC
  - SKU: 1529011

### EMP Shield Protection Devices
- **Home EMP Shield**: EMP Shield Home (Concealed Model)
  - EMP Protection: E1, E2, & E3 phases
  - Solar Flare Protection: >228,000A
  - Lightning Protection: 100%
  - Response Time: <1 billionth of a second
  - Standards: MIL-STD-188-125-1, MIL-STD-464C, MIL-STD-461G
  - Warranty: 10 Years
  - SKU: 1512005

- **DC EMP Shield**: EMP Shield Dual 220-300V DC (Solar/Wind)
  - Voltage Range: 220-300V DC
  - EMP Protection: E1, E2, & E3 phases
  - Solar Flare Protection: 228,000A
  - Lightning Protection: 100%
  - Response Time: <1 billionth of a second
  - Standards: MIL-STD-188-125-1, MIL-STD-464C, MIL-STD-461G
  - Warranty: 10 Years
  - SKU: 1512012


## Future Expansion Components

### Raptor G5 Wind Turbine
- **Model**: Raptor G5 5-Blade Freedom Wind Turbine Generator
- **Power Output**: 2000W (2kW)
- **Voltage**: 48V (matches system voltage)
- **Rotor Diameter**: 70 inches
- **Weight**: 66 pounds (29.9 kg)
- **Blade Material**: Carbon Fiber Composite (F-22 Raptor technology)
- **Blade Length**: 33 inches each
- **Rotation**: Clockwise
- **SKU**: G5-2000W-5B-48-96V
- **Distance from Solar Arrays**: ~20ft
- **Installation**: Requires wind charge controller and protection devices

### Generac Standby Generator
- **Model**: Generac Guardian Series 10kW WiFi Enabled
- **Model Number**: G0071710 (Base: G007171_)
- **Power Output**: 10,000W (10kW) running watts
- **Fuel Type**: Liquid Propane or Natural Gas
- **Engine**: G-Force 400 (purpose-built, pressure-lubricated)
- **Weight**: 338 lbs
- **Features**:
  - WiFi enabled with MobileLink remote monitoring
  - True Power Technology (<5% THD)
  - Quiet-Test self-test mode
  - Evolution Controller with LCD display
  - RhinoCoat powder-coated aluminum enclosure
- **Warranty**: 5 Year Limited
- **Battery**: 12V (Group 26R 540 CCA or Group 35AGM 650 CCA)
- **Oil Capacity**: 1.1 quarts
- **Installation**: Requires automatic transfer switch and fuel connection

