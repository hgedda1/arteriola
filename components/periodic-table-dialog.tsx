"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface PeriodicTableDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PeriodicTableDialog({ open, onOpenChange }: PeriodicTableDialogProps) {
  const [selectedElement, setSelectedElement] = useState<{
    symbol: string
    name: string
    mass: string
  } | null>(null)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-auto dark:bg-slate-800">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center dark:text-white">
            Periodic Table of the Elements
          </DialogTitle>
        </DialogHeader>

        {selectedElement && (
          <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-md mb-4 text-center">
            <p className="font-medium text-lg">
              {selectedElement.symbol} - {selectedElement.name}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Atomic Weight: {selectedElement.mass}</p>
          </div>
        )}

        <div className="space-y-4">
          <div className="w-full overflow-auto">
            <div className="min-w-[1100px] p-4">
              {/* Main Periodic Table Grid */}
              <div className="relative">
                {/* Period 1 */}
                <div className="grid grid-cols-[1.5rem_repeat(18,minmax(2rem,1fr))] gap-1 mb-1">
                  <div></div> {/* Period number - hidden */}
                  <Element
                    atomicNumber="1"
                    symbol="H"
                    name="Hydrogen"
                    mass="1.008"
                    bgClass="bg-red-100 dark:bg-red-900/30"
                    onSelect={setSelectedElement}
                  />
                  <div></div> {/* Empty cell */}
                  {/* Empty cells from column 3 to 17 */}
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i}></div>
                  ))}
                  <Element
                    atomicNumber="2"
                    symbol="He"
                    name="Helium"
                    mass="4.003"
                    bgClass="bg-green-100 dark:bg-green-900/30"
                    onSelect={setSelectedElement}
                  />
                </div>

                {/* Period 2 */}
                <div className="grid grid-cols-[1.5rem_repeat(18,minmax(2rem,1fr))] gap-1 mb-1">
                  <div></div> {/* Period number - hidden */}
                  <Element
                    atomicNumber="3"
                    symbol="Li"
                    name="Lithium"
                    mass="6.94"
                    bgClass="bg-blue-100 dark:bg-blue-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="4"
                    symbol="Be"
                    name="Beryllium"
                    mass="9.012"
                    bgClass="bg-blue-100 dark:bg-blue-900/30"
                    onSelect={setSelectedElement}
                  />
                  {/* Empty cells from column 3 to 12 */}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i}></div>
                  ))}
                  <Element
                    atomicNumber="5"
                    symbol="B"
                    name="Boron"
                    mass="10.81"
                    bgClass="bg-yellow-100 dark:bg-yellow-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="6"
                    symbol="C"
                    name="Carbon"
                    mass="12.01"
                    bgClass="bg-red-100 dark:bg-red-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="7"
                    symbol="N"
                    name="Nitrogen"
                    mass="14.01"
                    bgClass="bg-red-100 dark:bg-red-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="8"
                    symbol="O"
                    name="Oxygen"
                    mass="16.00"
                    bgClass="bg-red-100 dark:bg-red-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="9"
                    symbol="F"
                    name="Fluorine"
                    mass="19.00"
                    bgClass="bg-green-100 dark:bg-green-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="10"
                    symbol="Ne"
                    name="Neon"
                    mass="20.18"
                    bgClass="bg-green-100 dark:bg-green-900/30"
                    onSelect={setSelectedElement}
                  />
                </div>

                {/* Period 3 */}
                <div className="grid grid-cols-[1.5rem_repeat(18,minmax(2rem,1fr))] gap-1 mb-1">
                  <div></div> {/* Period number - hidden */}
                  <Element
                    atomicNumber="11"
                    symbol="Na"
                    name="Sodium"
                    mass="22.99"
                    bgClass="bg-blue-100 dark:bg-blue-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="12"
                    symbol="Mg"
                    name="Magnesium"
                    mass="24.31"
                    bgClass="bg-blue-100 dark:bg-blue-900/30"
                    onSelect={setSelectedElement}
                  />
                  {/* Empty cells from column 3 to 12 */}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i}></div>
                  ))}
                  <Element
                    atomicNumber="13"
                    symbol="Al"
                    name="Aluminum"
                    mass="26.98"
                    bgClass="bg-yellow-100 dark:bg-yellow-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="14"
                    symbol="Si"
                    name="Silicon"
                    mass="28.09"
                    bgClass="bg-yellow-100 dark:bg-yellow-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="15"
                    symbol="P"
                    name="Phosphorus"
                    mass="30.97"
                    bgClass="bg-red-100 dark:bg-red-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="16"
                    symbol="S"
                    name="Sulfur"
                    mass="32.07"
                    bgClass="bg-red-100 dark:bg-red-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="17"
                    symbol="Cl"
                    name="Chlorine"
                    mass="35.45"
                    bgClass="bg-green-100 dark:bg-green-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="18"
                    symbol="Ar"
                    name="Argon"
                    mass="39.95"
                    bgClass="bg-green-100 dark:bg-green-900/30"
                    onSelect={setSelectedElement}
                  />
                </div>

                {/* Period 4 - Full row */}
                <div className="grid grid-cols-[1.5rem_repeat(18,minmax(2rem,1fr))] gap-1 mb-1">
                  <div></div> {/* Period number - hidden */}
                  <Element
                    atomicNumber="19"
                    symbol="K"
                    name="Potassium"
                    mass="39.10"
                    bgClass="bg-blue-100 dark:bg-blue-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="20"
                    symbol="Ca"
                    name="Calcium"
                    mass="40.08"
                    bgClass="bg-blue-100 dark:bg-blue-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="21"
                    symbol="Sc"
                    name="Scandium"
                    mass="44.96"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="22"
                    symbol="Ti"
                    name="Titanium"
                    mass="47.87"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="23"
                    symbol="V"
                    name="Vanadium"
                    mass="50.94"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="24"
                    symbol="Cr"
                    name="Chromium"
                    mass="52.00"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="25"
                    symbol="Mn"
                    name="Manganese"
                    mass="54.94"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="26"
                    symbol="Fe"
                    name="Iron"
                    mass="55.85"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="27"
                    symbol="Co"
                    name="Cobalt"
                    mass="58.93"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="28"
                    symbol="Ni"
                    name="Nickel"
                    mass="58.69"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="29"
                    symbol="Cu"
                    name="Copper"
                    mass="63.55"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="30"
                    symbol="Zn"
                    name="Zinc"
                    mass="65.38"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="31"
                    symbol="Ga"
                    name="Gallium"
                    mass="69.72"
                    bgClass="bg-yellow-100 dark:bg-yellow-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="32"
                    symbol="Ge"
                    name="Germanium"
                    mass="72.63"
                    bgClass="bg-yellow-100 dark:bg-yellow-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="33"
                    symbol="As"
                    name="Arsenic"
                    mass="74.92"
                    bgClass="bg-yellow-100 dark:bg-yellow-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="34"
                    symbol="Se"
                    name="Selenium"
                    mass="78.97"
                    bgClass="bg-red-100 dark:bg-red-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="35"
                    symbol="Br"
                    name="Bromine"
                    mass="79.90"
                    bgClass="bg-green-100 dark:bg-green-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="36"
                    symbol="Kr"
                    name="Krypton"
                    mass="83.80"
                    bgClass="bg-green-100 dark:bg-green-900/30"
                    onSelect={setSelectedElement}
                  />
                </div>

                {/* Period 5 - Full row */}
                <div className="grid grid-cols-[1.5rem_repeat(18,minmax(2rem,1fr))] gap-1 mb-1">
                  <div></div> {/* Period number - hidden */}
                  <Element
                    atomicNumber="37"
                    symbol="Rb"
                    name="Rubidium"
                    mass="85.47"
                    bgClass="bg-blue-100 dark:bg-blue-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="38"
                    symbol="Sr"
                    name="Strontium"
                    mass="87.62"
                    bgClass="bg-blue-100 dark:bg-blue-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="39"
                    symbol="Y"
                    name="Yttrium"
                    mass="88.91"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="40"
                    symbol="Zr"
                    name="Zirconium"
                    mass="91.22"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="41"
                    symbol="Nb"
                    name="Niobium"
                    mass="92.91"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="42"
                    symbol="Mo"
                    name="Molybdenum"
                    mass="95.95"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="43"
                    symbol="Tc"
                    name="Technetium"
                    mass="[98]"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="44"
                    symbol="Ru"
                    name="Ruthenium"
                    mass="101.1"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="45"
                    symbol="Rh"
                    name="Rhodium"
                    mass="102.9"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="46"
                    symbol="Pd"
                    name="Palladium"
                    mass="106.4"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="47"
                    symbol="Ag"
                    name="Silver"
                    mass="107.9"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="48"
                    symbol="Cd"
                    name="Cadmium"
                    mass="112.4"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="49"
                    symbol="In"
                    name="Indium"
                    mass="114.8"
                    bgClass="bg-yellow-100 dark:bg-yellow-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="50"
                    symbol="Sn"
                    name="Tin"
                    mass="118.7"
                    bgClass="bg-yellow-100 dark:bg-yellow-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="51"
                    symbol="Sb"
                    name="Antimony"
                    mass="121.8"
                    bgClass="bg-yellow-100 dark:bg-yellow-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="52"
                    symbol="Te"
                    name="Tellurium"
                    mass="127.6"
                    bgClass="bg-yellow-100 dark:bg-yellow-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="53"
                    symbol="I"
                    name="Iodine"
                    mass="126.9"
                    bgClass="bg-green-100 dark:bg-green-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="54"
                    symbol="Xe"
                    name="Xenon"
                    mass="131.3"
                    bgClass="bg-green-100 dark:bg-green-900/30"
                    onSelect={setSelectedElement}
                  />
                </div>

                {/* Period 6 - With Lanthanide placeholder */}
                <div className="grid grid-cols-[1.5rem_repeat(18,minmax(2rem,1fr))] gap-1 mb-1">
                  <div></div> {/* Period number - hidden */}
                  <Element
                    atomicNumber="55"
                    symbol="Cs"
                    name="Cesium"
                    mass="132.9"
                    bgClass="bg-blue-100 dark:bg-blue-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="56"
                    symbol="Ba"
                    name="Barium"
                    mass="137.3"
                    bgClass="bg-blue-100 dark:bg-blue-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="57-71"
                    symbol="La-Lu"
                    name="Lanthanides"
                    mass=""
                    bgClass="bg-orange-100 dark:bg-orange-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="72"
                    symbol="Hf"
                    name="Hafnium"
                    mass="178.5"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="73"
                    symbol="Ta"
                    name="Tantalum"
                    mass="180.9"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="74"
                    symbol="W"
                    name="Tungsten"
                    mass="183.8"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="75"
                    symbol="Re"
                    name="Rhenium"
                    mass="186.2"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="76"
                    symbol="Os"
                    name="Osmium"
                    mass="190.2"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="77"
                    symbol="Ir"
                    name="Iridium"
                    mass="192.2"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="78"
                    symbol="Pt"
                    name="Platinum"
                    mass="195.1"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="79"
                    symbol="Au"
                    name="Gold"
                    mass="197.0"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="80"
                    symbol="Hg"
                    name="Mercury"
                    mass="200.6"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="81"
                    symbol="Tl"
                    name="Thallium"
                    mass="204.4"
                    bgClass="bg-yellow-100 dark:bg-yellow-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="82"
                    symbol="Pb"
                    name="Lead"
                    mass="207.2"
                    bgClass="bg-yellow-100 dark:bg-yellow-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="83"
                    symbol="Bi"
                    name="Bismuth"
                    mass="209.0"
                    bgClass="bg-yellow-100 dark:bg-yellow-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="84"
                    symbol="Po"
                    name="Polonium"
                    mass="[209]"
                    bgClass="bg-yellow-100 dark:bg-yellow-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="85"
                    symbol="At"
                    name="Astatine"
                    mass="[210]"
                    bgClass="bg-green-100 dark:bg-green-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="86"
                    symbol="Rn"
                    name="Radon"
                    mass="[222]"
                    bgClass="bg-green-100 dark:bg-green-900/30"
                    onSelect={setSelectedElement}
                  />
                </div>

                {/* Period 7 - With Actinide placeholder */}
                <div className="grid grid-cols-[1.5rem_repeat(18,minmax(2rem,1fr))] gap-1 mb-1">
                  <div></div> {/* Period number - hidden */}
                  <Element
                    atomicNumber="87"
                    symbol="Fr"
                    name="Francium"
                    mass="[223]"
                    bgClass="bg-blue-100 dark:bg-blue-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="88"
                    symbol="Ra"
                    name="Radium"
                    mass="[226]"
                    bgClass="bg-blue-100 dark:bg-blue-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="89-103"
                    symbol="Ac-Lr"
                    name="Actinides"
                    mass=""
                    bgClass="bg-pink-100 dark:bg-pink-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="104"
                    symbol="Rf"
                    name="Rutherfordium"
                    mass="[267]"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="105"
                    symbol="Db"
                    name="Dubnium"
                    mass="[268]"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="106"
                    symbol="Sg"
                    name="Seaborgium"
                    mass="[269]"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="107"
                    symbol="Bh"
                    name="Bohrium"
                    mass="[270]"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="108"
                    symbol="Hs"
                    name="Hassium"
                    mass="[277]"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="109"
                    symbol="Mt"
                    name="Meitnerium"
                    mass="[278]"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="110"
                    symbol="Ds"
                    name="Darmstadtium"
                    mass="[281]"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="111"
                    symbol="Rg"
                    name="Roentgenium"
                    mass="[282]"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="112"
                    symbol="Cn"
                    name="Copernicium"
                    mass="[285]"
                    bgClass="bg-purple-100 dark:bg-purple-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="113"
                    symbol="Nh"
                    name="Nihonium"
                    mass="[286]"
                    bgClass="bg-yellow-100 dark:bg-yellow-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="114"
                    symbol="Fl"
                    name="Flerovium"
                    mass="[289]"
                    bgClass="bg-yellow-100 dark:bg-yellow-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="115"
                    symbol="Mc"
                    name="Moscovium"
                    mass="[290]"
                    bgClass="bg-yellow-100 dark:bg-yellow-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="116"
                    symbol="Lv"
                    name="Livermorium"
                    mass="[293]"
                    bgClass="bg-yellow-100 dark:bg-yellow-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="117"
                    symbol="Ts"
                    name="Tennessine"
                    mass="[294]"
                    bgClass="bg-green-100 dark:bg-green-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="118"
                    symbol="Og"
                    name="Oganesson"
                    mass="[294]"
                    bgClass="bg-green-100 dark:bg-green-900/30"
                    onSelect={setSelectedElement}
                  />
                </div>

                {/* Lanthanides Series */}
                <div className="mt-16 grid grid-cols-[1.5rem_repeat(15,minmax(2rem,1fr))] gap-1 text-xs">
                  <div className="flex items-center justify-center">
                    <span className="text-[0.45rem]"></span>
                  </div>
                  <Element
                    atomicNumber="57"
                    symbol="La"
                    name="Lanthanum"
                    mass="138.9"
                    bgClass="bg-orange-100 dark:bg-orange-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="58"
                    symbol="Ce"
                    name="Cerium"
                    mass="140.1"
                    bgClass="bg-orange-100 dark:bg-orange-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="59"
                    symbol="Pr"
                    name="Praseodymium"
                    mass="140.9"
                    bgClass="bg-orange-100 dark:bg-orange-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="60"
                    symbol="Nd"
                    name="Neodymium"
                    mass="144.2"
                    bgClass="bg-orange-100 dark:bg-orange-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="61"
                    symbol="Pm"
                    name="Promethium"
                    mass="[145]"
                    bgClass="bg-orange-100 dark:bg-orange-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="62"
                    symbol="Sm"
                    name="Samarium"
                    mass="150.4"
                    bgClass="bg-orange-100 dark:bg-orange-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="63"
                    symbol="Eu"
                    name="Europium"
                    mass="152.0"
                    bgClass="bg-orange-100 dark:bg-orange-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="64"
                    symbol="Gd"
                    name="Gadolinium"
                    mass="157.3"
                    bgClass="bg-orange-100 dark:bg-orange-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="65"
                    symbol="Tb"
                    name="Terbium"
                    mass="158.9"
                    bgClass="bg-orange-100 dark:bg-orange-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="66"
                    symbol="Dy"
                    name="Dysprosium"
                    mass="162.5"
                    bgClass="bg-orange-100 dark:bg-orange-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="67"
                    symbol="Ho"
                    name="Holmium"
                    mass="164.9"
                    bgClass="bg-orange-100 dark:bg-orange-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="68"
                    symbol="Er"
                    name="Erbium"
                    mass="167.3"
                    bgClass="bg-orange-100 dark:bg-orange-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="69"
                    symbol="Tm"
                    name="Thulium"
                    mass="168.9"
                    bgClass="bg-orange-100 dark:bg-orange-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="70"
                    symbol="Yb"
                    name="Ytterbium"
                    mass="173.0"
                    bgClass="bg-orange-100 dark:bg-orange-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="71"
                    symbol="Lu"
                    name="Lutetium"
                    mass="175.0"
                    bgClass="bg-orange-100 dark:bg-orange-900/30"
                    onSelect={setSelectedElement}
                  />
                </div>

                {/* Actinides Series */}
                
                <div className="mt-6 grid grid-cols-[1.5rem_repeat(15,minmax(2rem,1fr))] gap-1 text-xs">
                  <div className="flex items-center justify-center">
                    <span className="text-[0.45rem]"></span>
                  </div>
                  <Element
                    atomicNumber="89"
                    symbol="Ac"
                    name="Actinium"
                    mass="[227]"
                    bgClass="bg-pink-100 dark:bg-pink-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="90"
                    symbol="Th"
                    name="Thorium"
                    mass="232.0"
                    bgClass="bg-pink-100 dark:bg-pink-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="91"
                    symbol="Pa"
                    name="Protactinium"
                    mass="231.0"
                    bgClass="bg-pink-100 dark:bg-pink-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="92"
                    symbol="U"
                    name="Uranium"
                    mass="238.0"
                    bgClass="bg-pink-100 dark:bg-pink-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="93"
                    symbol="Np"
                    name="Neptunium"
                    mass="[237]"
                    bgClass="bg-pink-100 dark:bg-pink-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="94"
                    symbol="Pu"
                    name="Plutonium"
                    mass="[244]"
                    bgClass="bg-pink-100 dark:bg-pink-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="95"
                    symbol="Am"
                    name="Americium"
                    mass="[243]"
                    bgClass="bg-pink-100 dark:bg-pink-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="96"
                    symbol="Cm"
                    name="Curium"
                    mass="[247]"
                    bgClass="bg-pink-100 dark:bg-pink-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="97"
                    symbol="Bk"
                    name="Berkelium"
                    mass="[247]"
                    bgClass="bg-pink-100 dark:bg-pink-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="98"
                    symbol="Cf"
                    name="Californium"
                    mass="[251]"
                    bgClass="bg-pink-100 dark:bg-pink-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="99"
                    symbol="Es"
                    name="Einsteinium"
                    mass="[252]"
                    bgClass="bg-pink-100 dark:bg-pink-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="100"
                    symbol="Fm"
                    name="Fermium"
                    mass="[257]"
                    bgClass="bg-pink-100 dark:bg-pink-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="101"
                    symbol="Md"
                    name="Mendelevium"
                    mass="[258]"
                    bgClass="bg-pink-100 dark:bg-pink-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="102"
                    symbol="No"
                    name="Nobelium"
                    mass="[259]"
                    bgClass="bg-pink-100 dark:bg-pink-900/30"
                    onSelect={setSelectedElement}
                  />
                  <Element
                    atomicNumber="103"
                    symbol="Lr"
                    name="Lawrencium"
                    mass="[266]"
                    bgClass="bg-pink-100 dark:bg-pink-900/30"
                    onSelect={setSelectedElement}
                  />
                </div>

                {/* Legend */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-2">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-100 dark:bg-blue-900/30 border border-gray-300 dark:border-gray-700 mr-2"></div>
                    <span className="text-xs">Alkali Metals</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-purple-100 dark:bg-purple-900/30 border border-gray-300 dark:border-gray-700 mr-2"></div>
                    <span className="text-xs">Transition Metals</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-yellow-100 dark:bg-yellow-900/30 border border-gray-300 dark:border-gray-700 mr-2"></div>
                    <span className="text-xs">Post-Transition Metals</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-100 dark:bg-red-900/30 border border-gray-300 dark:border-gray-700 mr-2"></div>
                    <span className="text-xs">Nonmetals</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-100 dark:bg-green-900/30 border border-gray-300 dark:border-gray-700 mr-2"></div>
                    <span className="text-xs">Halogens</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-orange-100 dark:bg-orange-900/30 border border-gray-300 dark:border-gray-700 mr-2"></div>
                    <span className="text-xs">Lanthanides</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-pink-100 dark:bg-pink-900/30 border border-gray-300 dark:border-gray-700 mr-2"></div>
                    <span className="text-xs">Actinides</span>
                  </div>
                </div>
                <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                  IUPAC Periodic Table
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Element component for reusability
interface ElementProps {
  atomicNumber: string
  symbol: string
  name: string
  mass: string
  bgClass: string
  onSelect: (element: { symbol: string; name: string; mass: string } | null) => void
}

function Element({ atomicNumber, symbol, name, mass, bgClass, onSelect }: ElementProps) {
  return (
    <div
      className={cn("p-0.5 border border-gray-300 dark:border-gray-700", bgClass, "cursor-pointer")}
      onClick={() => onSelect({ symbol, name, mass })}
    >
      <div className="font-bold text-[9px]">{atomicNumber}</div>
      <div className="text-center font-bold text-xs">{symbol}</div>
      <div className="text-center text-[8px]">{mass}</div>
    </div>
  )
}

