import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  Zap, 
  Battery, 
  Sun, 
  Shield, 
  Home, 
  Building, 
  Wind,
  Fuel,
  Info,
  FileText,
  Image as ImageIcon,
  Download,
  ShieldCheck
} from 'lucide-react'
import systemDiagram from './assets/enhanced_off_grid_system_diagram.png'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  const systemStats = [
    { label: 'Total Solar Capacity', value: '3.6kW', detail: '(4.5kW with bifacial gain)', icon: Sun },
    { label: 'Battery Storage', value: '28.6kWh', detail: 'LiFePO4 Chemistry', icon: Battery },
    { label: 'Inverter Output', value: '12kW', detail: 'Split Phase 120V/240V', icon: Zap },
    { label: 'EMP Shield Units', value: '5 Total', detail: 'Maximum Protection', icon: ShieldCheck },
  ]

  const protectionDevices = [
    { name: 'Midnite Solar MNSPD-300-DC', type: 'DC Surge Protection', locations: 'Arrays, Powershed, MPPT Inputs, Wind System' },
    { name: 'Midnite Solar MNSPD-300-AC', type: 'AC Surge Protection', locations: 'AC Output, Building Entries, Generator' },
    { name: 'EMP Shield Home (Concealed) - Powershed', type: 'AC EMP Protection', locations: 'Main Subpanel Protection' },
    { name: 'EMP Shield Home (Concealed) - Garage', type: 'AC EMP Protection', locations: 'Garage Main Panel Protection' },
    { name: 'EMP Shield Home (Concealed) - House', type: 'AC EMP Protection', locations: 'House Main Panel Protection' },
    { name: 'EMP Shield Dual 220-300V DC', type: 'DC EMP Protection', locations: 'Solar/Wind MPPT Systems' },
  ]

  const futureExpansions = [
    {
      name: 'Raptor G5 Wind Turbine',
      capacity: '2kW @ 48V',
      details: '5-Blade Carbon Fiber, 70" Rotor',
      distance: '20ft from Solar Arrays',
      protection: 'Dedicated EMP Shield DC Protection',
      icon: Wind
    },
    {
      name: 'Generac Guardian Generator',
      capacity: '10kW Standby',
      details: 'Natural Gas/Propane, WiFi Enabled',
      distance: 'Essential Circuits Backup',
      protection: 'Dedicated EMP Shield AC Protection',
      icon: Fuel
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Off-Grid Energy System</h1>
                <p className="text-gray-300">Solar, Battery & Maximum EMP Protection</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="secondary" className="text-lg px-4 py-2 bg-red-700 text-red-100 border-red-600">
                <ShieldCheck className="h-4 w-4 mr-2" />
                5x EMP Shields
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2 bg-gray-700 text-gray-200 border-gray-600">
                48V System
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800 border-gray-700">
            <TabsTrigger value="overview" className="flex items-center space-x-2 data-[state=active]:bg-gray-700 data-[state=active]:text-white text-gray-300">
              <Info className="h-4 w-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="diagram" className="flex items-center space-x-2 data-[state=active]:bg-gray-700 data-[state=active]:text-white text-gray-300">
              <ImageIcon className="h-4 w-4" />
              <span>System Diagram</span>
            </TabsTrigger>
            <TabsTrigger value="components" className="flex items-center space-x-2 data-[state=active]:bg-gray-700 data-[state=active]:text-white text-gray-300">
              <FileText className="h-4 w-4" />
              <span>Components</span>
            </TabsTrigger>
            <TabsTrigger value="future" className="flex items-center space-x-2 data-[state=active]:bg-gray-700 data-[state=active]:text-white text-gray-300">
              <Wind className="h-4 w-4" />
              <span>Future Expansion</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <ShieldCheck className="h-5 w-5" />
                  <span>Maximum Protection System Overview</span>
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Complete off-grid energy solution with solar generation, battery storage, and comprehensive EMP protection at every critical point
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {systemStats.map((stat, index) => {
                    const IconComponent = stat.icon
                    return (
                      <div key={index} className="p-4 bg-gray-700 rounded-lg border border-gray-600">
                        <div className="flex items-center space-x-2 mb-2">
                          <IconComponent className="h-5 w-5 text-blue-400" />
                          <span className="font-medium text-gray-200">{stat.label}</span>
                        </div>
                        <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.detail}</div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Sun className="h-5 w-5" />
                    <span>Solar Array Configuration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Panel Type</span>
                    <Badge className="bg-yellow-600 text-yellow-100 border-yellow-500">SolarEver 450W Bifacial</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Array Layout</span>
                    <span className="text-gray-200">2 arrays × 4 panels each</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Total Panels</span>
                    <span className="text-gray-200">8 panels</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">MPPT Configuration</span>
                    <span className="text-gray-200">Dual independent circuits</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Distance to Powershed</span>
                    <span className="text-gray-200">50ft DC run</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <ShieldCheck className="h-5 w-5" />
                    <span>Maximum EMP Protection Network</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Powershed Protection</span>
                    <Badge className="bg-red-600 text-red-100 border-red-500">DC + AC EMP Shields</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Garage Panel Protection</span>
                    <Badge className="bg-red-600 text-red-100 border-red-500">EMP Shield Home</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">House Panel Protection</span>
                    <Badge className="bg-red-600 text-red-100 border-red-500">EMP Shield Home</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Total EMP Shield Units</span>
                    <span className="text-red-300 font-bold">5 Units</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Protection Level</span>
                    <span className="text-red-300 font-bold">Military Grade</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Home className="h-5 w-5" />
                  <span>Distribution Network with Enhanced Protection</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
                    <h4 className="font-semibold text-white mb-2">Main Subpanel</h4>
                    <p className="text-sm text-gray-300">Split Phase 120V/240V</p>
                    <p className="text-xs text-red-300">EMP Shield Protected</p>
                  </div>
                  <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
                    <h4 className="font-semibold text-white mb-2">Garage Service</h4>
                    <p className="text-sm text-gray-300">200A @ 60ft (4/0 AWG)</p>
                    <p className="text-xs text-red-300">Dedicated EMP Shield</p>
                  </div>
                  <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
                    <h4 className="font-semibold text-white mb-2">House Service</h4>
                    <p className="text-sm text-gray-300">200A @ 180ft (4/0 AWG)</p>
                    <p className="text-xs text-red-300">Dedicated EMP Shield</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* System Diagram Tab */}
          <TabsContent value="diagram" className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <ImageIcon className="h-5 w-5" />
                  <span>Enhanced System Diagram - Maximum EMP Protection</span>
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Detailed electrical layout showing all components, connections, and comprehensive EMP protection at every critical point
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-600">
                  <img 
                    src={systemDiagram} 
                    alt="Enhanced Off-Grid Energy System Diagram with Maximum EMP Protection" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <Button 
                    onClick={() => {
                      const link = document.createElement('a')
                      link.href = systemDiagram
                      link.download = 'enhanced-off-grid-energy-system-diagram.png'
                      link.click()
                    }}
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Enhanced Diagram</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Components Tab */}
          <TabsContent value="components" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Battery className="h-5 w-5" />
                    <span>Main Components</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4 bg-gray-700 p-3 rounded-r-lg">
                    <h4 className="font-semibold text-white">EG4 12000XP Inverter</h4>
                    <p className="text-sm text-gray-300">12kW output, dual MPPT, 250A charge</p>
                    <p className="text-xs text-gray-400">SKU: 1511036</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4 bg-gray-700 p-3 rounded-r-lg">
                    <h4 className="font-semibold text-white">EG4 WallMount Batteries (2x)</h4>
                    <p className="text-sm text-gray-300">48V 280Ah, 14.3kWh each, LiFePO4</p>
                    <p className="text-xs text-gray-400">SKU: 1511092</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4 bg-gray-700 p-3 rounded-r-lg">
                    <h4 className="font-semibold text-white">SolarEver Solar Panels (8x)</h4>
                    <p className="text-sm text-gray-300">450W bifacial, 35.03V VOC, 16.05A ISC</p>
                    <p className="text-xs text-gray-400">Model: SE-182-105-450M-96-BD</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <ShieldCheck className="h-5 w-5" />
                    <span>Enhanced Protection Devices</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {protectionDevices.map((device, index) => (
                    <div key={index} className="p-3 bg-red-900/30 rounded-lg border border-red-700">
                      <h4 className="font-semibold text-red-200">{device.name}</h4>
                      <p className="text-sm text-red-300">{device.type}</p>
                      <p className="text-xs text-red-400">Locations: {device.locations}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Shield className="h-5 w-5" />
                  <span>EMP Protection Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-red-900/20 rounded-lg border border-red-700">
                    <h4 className="font-bold text-red-200 mb-2">Powershed Protection</h4>
                    <ul className="text-sm text-red-300 space-y-1">
                      <li>• 2x EMP Shield DC (MPPT inputs)</li>
                      <li>• 1x EMP Shield AC (main output)</li>
                      <li>• Complete surge protection</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-900/20 rounded-lg border border-red-700">
                    <h4 className="font-bold text-red-200 mb-2">Building Protection</h4>
                    <ul className="text-sm text-red-300 space-y-1">
                      <li>• Garage: Dedicated EMP Shield</li>
                      <li>• House: Dedicated EMP Shield</li>
                      <li>• Full surge protection chain</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-900/20 rounded-lg border border-red-700">
                    <h4 className="font-bold text-red-200 mb-2">Future Expansion</h4>
                    <ul className="text-sm text-red-300 space-y-1">
                      <li>• Wind: EMP Shield DC ready</li>
                      <li>• Generator: EMP Shield AC ready</li>
                      <li>• Scalable protection design</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Future Expansion Tab */}
          <TabsContent value="future" className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Wind className="h-5 w-5" />
                  <span>Planned Expansions with EMP Protection</span>
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Future additions to enhance system capacity and reliability, each with dedicated EMP protection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {futureExpansions.map((expansion, index) => {
                    const IconComponent = expansion.icon
                    return (
                      <div key={index} className="p-6 bg-purple-900/30 rounded-lg border border-purple-700">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-2 bg-purple-600 rounded-lg">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-purple-200">{expansion.name}</h3>
                            <Badge variant="outline" className="text-purple-300 border-purple-500 bg-purple-900/50">
                              {expansion.capacity}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-purple-300 mb-2">{expansion.details}</p>
                        <p className="text-sm text-purple-400 mb-2">{expansion.distance}</p>
                        <div className="flex items-center space-x-2">
                          <ShieldCheck className="h-4 w-4 text-red-400" />
                          <p className="text-sm text-red-300 font-semibold">{expansion.protection}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Off-Grid Energy System Design</h3>
            <p className="text-gray-400">
              Complete solar, battery, and maximum EMP protection solution with future expansion capability
            </p>
            <div className="mt-4 flex justify-center space-x-6 text-sm text-gray-400">
              <span>Total Capacity: 3.6kW Solar + 28.6kWh Battery</span>
              <span>•</span>
              <span>5x EMP Shield Units</span>
              <span>•</span>
              <span>Maximum Protection</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

