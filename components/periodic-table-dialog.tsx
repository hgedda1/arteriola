"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface PeriodicTableDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PeriodicTableDialog({ open, onOpenChange }: PeriodicTableDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto dark:bg-slate-800">
        <DialogHeader>
          <DialogTitle className="text-lg font-normal dark:text-white">Periodic Table of Elements</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="w-full overflow-auto">
            <div className="min-w-[900px]">
              {/* Periodic Table Grid */}
              <div className="grid grid-cols-18 gap-1 text-xs">
                {/* Row 1 */}
                <div className="element bg-red-100 dark:bg-red-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">1</div>
                  <div className="text-center font-bold">H</div>
                  <div className="text-center text-[10px]">1.008</div>
                </div>
                <div className="col-span-16"></div>
                <div className="element bg-green-100 dark:bg-green-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">2</div>
                  <div className="text-center font-bold">He</div>
                  <div className="text-center text-[10px]">4.003</div>
                </div>

                {/* Row 2 */}
                <div className="element bg-blue-100 dark:bg-blue-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">3</div>
                  <div className="text-center font-bold">Li</div>
                  <div className="text-center text-[10px]">6.94</div>
                </div>
                <div className="element bg-blue-100 dark:bg-blue-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">4</div>
                  <div className="text-center font-bold">Be</div>
                  <div className="text-center text-[10px]">9.012</div>
                </div>
                <div className="col-span-10"></div>
                <div className="element bg-yellow-100 dark:bg-yellow-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">5</div>
                  <div className="text-center font-bold">B</div>
                  <div className="text-center text-[10px]">10.81</div>
                </div>
                <div className="element bg-red-100 dark:bg-red-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">6</div>
                  <div className="text-center font-bold">C</div>
                  <div className="text-center text-[10px]">12.01</div>
                </div>
                <div className="element bg-red-100 dark:bg-red-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">7</div>
                  <div className="text-center font-bold">N</div>
                  <div className="text-center text-[10px]">14.01</div>
                </div>
                <div className="element bg-red-100 dark:bg-red-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">8</div>
                  <div className="text-center font-bold">O</div>
                  <div className="text-center text-[10px]">16.00</div>
                </div>
                <div className="element bg-green-100 dark:bg-green-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">9</div>
                  <div className="text-center font-bold">F</div>
                  <div className="text-center text-[10px]">19.00</div>
                </div>
                <div className="element bg-green-100 dark:bg-green-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">10</div>
                  <div className="text-center font-bold">Ne</div>
                  <div className="text-center text-[10px]">20.18</div>
                </div>

                {/* Row 3 */}
                <div className="element bg-blue-100 dark:bg-blue-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">11</div>
                  <div className="text-center font-bold">Na</div>
                  <div className="text-center text-[10px]">22.99</div>
                </div>
                <div className="element bg-blue-100 dark:bg-blue-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">12</div>
                  <div className="text-center font-bold">Mg</div>
                  <div className="text-center text-[10px]">24.31</div>
                </div>
                <div className="col-span-10"></div>
                <div className="element bg-yellow-100 dark:bg-yellow-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">13</div>
                  <div className="text-center font-bold">Al</div>
                  <div className="text-center text-[10px]">26.98</div>
                </div>
                <div className="element bg-yellow-100 dark:bg-yellow-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">14</div>
                  <div className="text-center font-bold">Si</div>
                  <div className="text-center text-[10px]">28.09</div>
                </div>
                <div className="element bg-red-100 dark:bg-red-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">15</div>
                  <div className="text-center font-bold">P</div>
                  <div className="text-center text-[10px]">30.97</div>
                </div>
                <div className="element bg-red-100 dark:bg-red-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">16</div>
                  <div className="text-center font-bold">S</div>
                  <div className="text-center text-[10px]">32.07</div>
                </div>
                <div className="element bg-green-100 dark:bg-green-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">17</div>
                  <div className="text-center font-bold">Cl</div>
                  <div className="text-center text-[10px]">35.45</div>
                </div>
                <div className="element bg-green-100 dark:bg-green-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">18</div>
                  <div className="text-center font-bold">Ar</div>
                  <div className="text-center text-[10px]">39.95</div>
                </div>

                {/* Row 4 */}
                <div className="element bg-blue-100 dark:bg-blue-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">19</div>
                  <div className="text-center font-bold">K</div>
                  <div className="text-center text-[10px]">39.10</div>
                </div>
                <div className="element bg-blue-100 dark:bg-blue-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">20</div>
                  <div className="text-center font-bold">Ca</div>
                  <div className="text-center text-[10px]">40.08</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">21</div>
                  <div className="text-center font-bold">Sc</div>
                  <div className="text-center text-[10px]">44.96</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">22</div>
                  <div className="text-center font-bold">Ti</div>
                  <div className="text-center text-[10px]">47.87</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">23</div>
                  <div className="text-center font-bold">V</div>
                  <div className="text-center text-[10px]">50.94</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">24</div>
                  <div className="text-center font-bold">Cr</div>
                  <div className="text-center text-[10px]">52.00</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">25</div>
                  <div className="text-center font-bold">Mn</div>
                  <div className="text-center text-[10px]">54.94</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">26</div>
                  <div className="text-center font-bold">Fe</div>
                  <div className="text-center text-[10px]">55.85</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">27</div>
                  <div className="text-center font-bold">Co</div>
                  <div className="text-center text-[10px]">58.93</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">28</div>
                  <div className="text-center font-bold">Ni</div>
                  <div className="text-center text-[10px]">58.69</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">29</div>
                  <div className="text-center font-bold">Cu</div>
                  <div className="text-center text-[10px]">63.55</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">30</div>
                  <div className="text-center font-bold">Zn</div>
                  <div className="text-center text-[10px]">65.38</div>
                </div>
                <div className="element bg-yellow-100 dark:bg-yellow-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">31</div>
                  <div className="text-center font-bold">Ga</div>
                  <div className="text-center text-[10px]">69.72</div>
                </div>
                <div className="element bg-yellow-100 dark:bg-yellow-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">32</div>
                  <div className="text-center font-bold">Ge</div>
                  <div className="text-center text-[10px]">72.63</div>
                </div>
                <div className="element bg-yellow-100 dark:bg-yellow-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">33</div>
                  <div className="text-center font-bold">As</div>
                  <div className="text-center text-[10px]">74.92</div>
                </div>
                <div className="element bg-red-100 dark:bg-red-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">34</div>
                  <div className="text-center font-bold">Se</div>
                  <div className="text-center text-[10px]">78.97</div>
                </div>
                <div className="element bg-green-100 dark:bg-green-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">35</div>
                  <div className="text-center font-bold">Br</div>
                  <div className="text-center text-[10px]">79.90</div>
                </div>
                <div className="element bg-green-100 dark:bg-green-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">36</div>
                  <div className="text-center font-bold">Kr</div>
                  <div className="text-center text-[10px]">83.80</div>
                </div>

                {/* Row 5 */}
                <div className="element bg-blue-100 dark:bg-blue-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">37</div>
                  <div className="text-center font-bold">Rb</div>
                  <div className="text-center text-[10px]">85.47</div>
                </div>
                <div className="element bg-blue-100 dark:bg-blue-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">38</div>
                  <div className="text-center font-bold">Sr</div>
                  <div className="text-center text-[10px]">87.62</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">39</div>
                  <div className="text-center font-bold">Y</div>
                  <div className="text-center text-[10px]">88.91</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">40</div>
                  <div className="text-center font-bold">Zr</div>
                  <div className="text-center text-[10px]">91.22</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">41</div>
                  <div className="text-center font-bold">Nb</div>
                  <div className="text-center text-[10px]">92.91</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">42</div>
                  <div className="text-center font-bold">Mo</div>
                  <div className="text-center text-[10px]">95.95</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">43</div>
                  <div className="text-center font-bold">Tc</div>
                  <div className="text-center text-[10px]">[98]</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">44</div>
                  <div className="text-center font-bold">Ru</div>
                  <div className="text-center text-[10px]">101.1</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">45</div>
                  <div className="text-center font-bold">Rh</div>
                  <div className="text-center text-[10px]">102.9</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">46</div>
                  <div className="text-center font-bold">Pd</div>
                  <div className="text-center text-[10px]">106.4</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">47</div>
                  <div className="text-center font-bold">Ag</div>
                  <div className="text-center text-[10px]">107.9</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">48</div>
                  <div className="text-center font-bold">Cd</div>
                  <div className="text-center text-[10px]">112.4</div>
                </div>
                <div className="element bg-yellow-100 dark:bg-yellow-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">49</div>
                  <div className="text-center font-bold">In</div>
                  <div className="text-center text-[10px]">114.8</div>
                </div>
                <div className="element bg-yellow-100 dark:bg-yellow-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">50</div>
                  <div className="text-center font-bold">Sn</div>
                  <div className="text-center text-[10px]">118.7</div>
                </div>
                <div className="element bg-yellow-100 dark:bg-yellow-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">51</div>
                  <div className="text-center font-bold">Sb</div>
                  <div className="text-center text-[10px]">121.8</div>
                </div>
                <div className="element bg-yellow-100 dark:bg-yellow-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">52</div>
                  <div className="text-center font-bold">Te</div>
                  <div className="text-center text-[10px]">127.6</div>
                </div>
                <div className="element bg-green-100 dark:bg-green-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">53</div>
                  <div className="text-center font-bold">I</div>
                  <div className="text-center text-[10px]">126.9</div>
                </div>
                <div className="element bg-green-100 dark:bg-green-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">54</div>
                  <div className="text-center font-bold">Xe</div>
                  <div className="text-center text-[10px]">131.3</div>
                </div>

                {/* Row 6 */}
                <div className="element bg-blue-100 dark:bg-blue-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">55</div>
                  <div className="text-center font-bold">Cs</div>
                  <div className="text-center text-[10px]">132.9</div>
                </div>
                <div className="element bg-blue-100 dark:bg-blue-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">56</div>
                  <div className="text-center font-bold">Ba</div>
                  <div className="text-center text-[10px]">137.3</div>
                </div>
                <div className="element bg-orange-100 dark:bg-orange-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">57-71</div>
                  <div className="text-center font-bold">La-Lu</div>
                  <div className="text-center text-[10px]"></div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">72</div>
                  <div className="text-center font-bold">Hf</div>
                  <div className="text-center text-[10px]">178.5</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">73</div>
                  <div className="text-center font-bold">Ta</div>
                  <div className="text-center text-[10px]">180.9</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">74</div>
                  <div className="text-center font-bold">W</div>
                  <div className="text-center text-[10px]">183.8</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">75</div>
                  <div className="text-center font-bold">Re</div>
                  <div className="text-center text-[10px]">186.2</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">76</div>
                  <div className="text-center font-bold">Os</div>
                  <div className="text-center text-[10px]">190.2</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">77</div>
                  <div className="text-center font-bold">Ir</div>
                  <div className="text-center text-[10px]">192.2</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">78</div>
                  <div className="text-center font-bold">Pt</div>
                  <div className="text-center text-[10px]">195.1</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">79</div>
                  <div className="text-center font-bold">Au</div>
                  <div className="text-center text-[10px]">197.0</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">80</div>
                  <div className="text-center font-bold">Hg</div>
                  <div className="text-center text-[10px]">200.6</div>
                </div>
                <div className="element bg-yellow-100 dark:bg-yellow-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">81</div>
                  <div className="text-center font-bold">Tl</div>
                  <div className="text-center text-[10px]">204.4</div>
                </div>
                <div className="element bg-yellow-100 dark:bg-yellow-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">82</div>
                  <div className="text-center font-bold">Pb</div>
                  <div className="text-center text-[10px]">207.2</div>
                </div>
                <div className="element bg-yellow-100 dark:bg-yellow-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">83</div>
                  <div className="text-center font-bold">Bi</div>
                  <div className="text-center text-[10px]">209.0</div>
                </div>
                <div className="element bg-yellow-100 dark:bg-yellow-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">84</div>
                  <div className="text-center font-bold">Po</div>
                  <div className="text-center text-[10px]">[209]</div>
                </div>
                <div className="element bg-yellow-100 dark:bg-yellow-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">85</div>
                  <div className="text-center font-bold">At</div>
                  <div className="text-center text-[10px]">[210]</div>
                </div>
                <div className="element bg-green-100 dark:bg-green-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">86</div>
                  <div className="text-center font-bold">Rn</div>
                  <div className="text-center text-[10px]">[222]</div>
                </div>

                {/* Row 7 */}
                <div className="element bg-blue-100 dark:bg-blue-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">87</div>
                  <div className="text-center font-bold">Fr</div>
                  <div className="text-center text-[10px]">[223]</div>
                </div>
                <div className="element bg-blue-100 dark:bg-blue-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">88</div>
                  <div className="text-center font-bold">Ra</div>
                  <div className="text-center text-[10px]">[226]</div>
                </div>
                <div className="element bg-pink-100 dark:bg-pink-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">89-103</div>
                  <div className="text-center font-bold">Ac-Lr</div>
                  <div className="text-center text-[10px]"></div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">104</div>
                  <div className="text-center font-bold">Rf</div>
                  <div className="text-center text-[10px]">[267]</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">105</div>
                  <div className="text-center font-bold">Db</div>
                  <div className="text-center text-[10px]">[268]</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">106</div>
                  <div className="text-center font-bold">Sg</div>
                  <div className="text-center text-[10px]">[269]</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">107</div>
                  <div className="text-center font-bold">Bh</div>
                  <div className="text-center text-[10px]">[270]</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">108</div>
                  <div className="text-center font-bold">Hs</div>
                  <div className="text-center text-[10px]">[277]</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">109</div>
                  <div className="text-center font-bold">Mt</div>
                  <div className="text-center text-[10px]">[278]</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">110</div>
                  <div className="text-center font-bold">Ds</div>
                  <div className="text-center text-[10px]">[281]</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">111</div>
                  <div className="text-center font-bold">Rg</div>
                  <div className="text-center text-[10px]">[282]</div>
                </div>
                <div className="element bg-purple-100 dark:bg-purple-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">112</div>
                  <div className="text-center font-bold">Cn</div>
                  <div className="text-center text-[10px]">[285]</div>
                </div>
                <div className="element bg-yellow-100 dark:bg-yellow-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">113</div>
                  <div className="text-center font-bold">Nh</div>
                  <div className="text-center text-[10px]">[286]</div>
                </div>
                <div className="element bg-yellow-100 dark:bg-yellow-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">114</div>
                  <div className="text-center font-bold">Fl</div>
                  <div className="text-center text-[10px]">[289]</div>
                </div>
                <div className="element bg-yellow-100 dark:bg-yellow-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">115</div>
                  <div className="text-center font-bold">Mc</div>
                  <div className="text-center text-[10px]">[290]</div>
                </div>
                <div className="element bg-yellow-100 dark:bg-yellow-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">116</div>
                  <div className="text-center font-bold">Lv</div>
                  <div className="text-center text-[10px]">[293]</div>
                </div>
                <div className="element bg-yellow-100 dark:bg-yellow-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">117</div>
                  <div className="text-center font-bold">Ts</div>
                  <div className="text-center text-[10px]">[294]</div>
                </div>
                <div className="element bg-green-100 dark:bg-green-900/30 p-1 border border-gray-300 dark:border-gray-700">
                  <div className="font-bold">118</div>
                  <div className="text-center font-bold">Og</div>
                  <div className="text-center text-[10px]">[294]</div>
                </div>
              </div>

              {/* Lanthanides and Actinides */}
              <div className="mt-4">
                <div className="grid grid-cols-15 gap-1 text-xs">
                  {/* Lanthanides */}
                  <div className="col-span-3 flex items-center justify-center">
                    <span className="text-sm font-medium">Lanthanides</span>
                  </div>
                  <div className="element bg-orange-100 dark:bg-orange-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">57</div>
                    <div className="text-center font-bold">La</div>
                    <div className="text-center text-[10px]">138.9</div>
                  </div>
                  <div className="element bg-orange-100 dark:bg-orange-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">58</div>
                    <div className="text-center font-bold">Ce</div>
                    <div className="text-center text-[10px]">140.1</div>
                  </div>
                  <div className="element bg-orange-100 dark:bg-orange-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">59</div>
                    <div className="text-center font-bold">Pr</div>
                    <div className="text-center text-[10px]">140.9</div>
                  </div>
                  <div className="element bg-orange-100 dark:bg-orange-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">60</div>
                    <div className="text-center font-bold">Nd</div>
                    <div className="text-center text-[10px]">144.2</div>
                  </div>
                  <div className="element bg-orange-100 dark:bg-orange-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">61</div>
                    <div className="text-center font-bold">Pm</div>
                    <div className="text-center text-[10px]">[145]</div>
                  </div>
                  <div className="element bg-orange-100 dark:bg-orange-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">62</div>
                    <div className="text-center font-bold">Sm</div>
                    <div className="text-center text-[10px]">150.4</div>
                  </div>
                  <div className="element bg-orange-100 dark:bg-orange-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">63</div>
                    <div className="text-center font-bold">Eu</div>
                    <div className="text-center text-[10px]">152.0</div>
                  </div>
                  <div className="element bg-orange-100 dark:bg-orange-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">64</div>
                    <div className="text-center font-bold">Gd</div>
                    <div className="text-center text-[10px]">157.3</div>
                  </div>
                  <div className="element bg-orange-100 dark:bg-orange-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">65</div>
                    <div className="text-center font-bold">Tb</div>
                    <div className="text-center text-[10px]">158.9</div>
                  </div>
                  <div className="element bg-orange-100 dark:bg-orange-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">66</div>
                    <div className="text-center font-bold">Dy</div>
                    <div className="text-center text-[10px]">162.5</div>
                  </div>
                  <div className="element bg-orange-100 dark:bg-orange-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">67</div>
                    <div className="text-center font-bold">Ho</div>
                    <div className="text-center text-[10px]">164.9</div>
                  </div>
                  <div className="element bg-orange-100 dark:bg-orange-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">68</div>
                    <div className="text-center font-bold">Er</div>
                    <div className="text-center text-[10px]">167.3</div>
                  </div>
                  <div className="element bg-orange-100 dark:bg-orange-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">69</div>
                    <div className="text-center font-bold">Tm</div>
                    <div className="text-center text-[10px]">168.9</div>
                  </div>
                  <div className="element bg-orange-100 dark:bg-orange-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">70</div>
                    <div className="text-center font-bold">Yb</div>
                    <div className="text-center text-[10px]">173.0</div>
                  </div>
                  <div className="element bg-orange-100 dark:bg-orange-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">71</div>
                    <div className="text-center font-bold">Lu</div>
                    <div className="text-center text-[10px]">175.0</div>
                  </div>

                  {/* Actinides */}
                  <div className="col-span-3 flex items-center justify-center">
                    <span className="text-sm font-medium">Actinides</span>
                  </div>
                  <div className="element bg-pink-100 dark:bg-pink-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">89</div>
                    <div className="text-center font-bold">Ac</div>
                    <div className="text-center text-[10px]">[227]</div>
                  </div>
                  <div className="element bg-pink-100 dark:bg-pink-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">90</div>
                    <div className="text-center font-bold">Th</div>
                    <div className="text-center text-[10px]">232.0</div>
                  </div>
                  <div className="element bg-pink-100 dark:bg-pink-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">91</div>
                    <div className="text-center font-bold">Pa</div>
                    <div className="text-center text-[10px]">231.0</div>
                  </div>
                  <div className="element bg-pink-100 dark:bg-pink-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">92</div>
                    <div className="text-center font-bold">U</div>
                    <div className="text-center text-[10px]">238.0</div>
                  </div>
                  <div className="element bg-pink-100 dark:bg-pink-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">93</div>
                    <div className="text-center font-bold">Np</div>
                    <div className="text-center text-[10px]">[237]</div>
                  </div>
                  <div className="element bg-pink-100 dark:bg-pink-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">94</div>
                    <div className="text-center font-bold">Pu</div>
                    <div className="text-center text-[10px]">[244]</div>
                  </div>
                  <div className="element bg-pink-100 dark:bg-pink-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">95</div>
                    <div className="text-center font-bold">Am</div>
                    <div className="text-center text-[10px]">[243]</div>
                  </div>
                  <div className="element bg-pink-100 dark:bg-pink-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">96</div>
                    <div className="text-center font-bold">Cm</div>
                    <div className="text-center text-[10px]">[247]</div>
                  </div>
                  <div className="element bg-pink-100 dark:bg-pink-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">97</div>
                    <div className="text-center font-bold">Bk</div>
                    <div className="text-center text-[10px]">[247]</div>
                  </div>
                  <div className="element bg-pink-100 dark:bg-pink-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">98</div>
                    <div className="text-center font-bold">Cf</div>
                    <div className="text-center text-[10px]">[251]</div>
                  </div>
                  <div className="element bg-pink-100 dark:bg-pink-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">99</div>
                    <div className="text-center font-bold">Es</div>
                    <div className="text-center text-[10px]">[252]</div>
                  </div>
                  <div className="element bg-pink-100 dark:bg-pink-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">100</div>
                    <div className="text-center font-bold">Fm</div>
                    <div className="text-center text-[10px]">[257]</div>
                  </div>
                  <div className="element bg-pink-100 dark:bg-pink-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">101</div>
                    <div className="text-center font-bold">Md</div>
                    <div className="text-center text-[10px]">[258]</div>
                  </div>
                  <div className="element bg-pink-100 dark:bg-pink-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">102</div>
                    <div className="text-center font-bold">No</div>
                    <div className="text-center text-[10px]">[259]</div>
                  </div>
                  <div className="element bg-pink-100 dark:bg-pink-900/30 p-1 border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">103</div>
                    <div className="text-center font-bold">Lr</div>
                    <div className="text-center text-[10px]">[266]</div>
                  </div>
                </div>
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
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

