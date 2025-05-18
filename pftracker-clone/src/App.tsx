import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";

const Dashboard = () => (
  <main className="flex-1 flex flex-row relative bg-[#19232c]">
    {/* LEFT: Most Tracked Flights */}
    <section className="hidden md:flex flex-col min-w-[300px] max-w-xs p-4 pt-6">
      <div className="bg-neutral-900 rounded-lg border border-white/10 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">Most Tracked Flights</span>
          <span className="bg-blue-500 text-xs px-2 py-0.5 rounded text-white font-semibold">LIVE</span>
        </div>
        <div className="space-y-3">
          {/* Flight cards */}
          {[{
            callsign: 'UNITED 1214', type: '787', users: 3
          }, {
            callsign: 'EASY 8132', type: 'A320', users: 2
          }, {
            callsign: 'AEROFLOT 6974', type: 'A350', users: 2
          }].map(f => (
            <div key={f.callsign} className="bg-neutral-800 rounded p-3 hover:bg-neutral-700 focus:outline focus:outline-blue-500 cursor-pointer transition-colors">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-xs">{f.callsign}</span>
                  <span className="bg-blue-500 text-white text-2xs px-1 rounded">{f.type}</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <span>{f.users}</span>
                  <span role="img" aria-label="users">👥</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-2xs text-gray-300"><span>N/A</span><span className="w-12 border-t border-white/20 mx-1" /><span>N/A</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* CENTER: Map and TopBar */}
    <section className="relative flex-1 flex flex-col items-stretch">
      {/* Map TopBar */}
      <div className="flex items-center justify-between w-full p-4">
        <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold px-4 py-2 rounded shadow">Public ATC Server</button>
        <div className="flex gap-2 items-center">
          <input className="bg-neutral-900 rounded px-4 py-2 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 w-64" placeholder="Search..." />
          <select className="bg-neutral-900 rounded px-4 py-2 border border-white/10 text-white focus:outline-blue-500 focus:ring-1">
            <option>All</option>
            <option>Roblox Username</option>
            <option>Callsign</option>
            <option>Server ID</option>
            <option>Airframe</option>
          </select>
        </div>
      </div>
      <div className="relative flex-1">
        {/* Map area (static for now) */}
        <div className="absolute inset-0 z-0 text-gray-300 text-sm select-none" aria-hidden>{"PIXES  LIMA  ANEX ... (map words would go here)"}</div>
        <div className="absolute bottom-4 left-4 bg-white/15 backdrop-blur-md text-xs p-2 rounded text-white shadow">
          <div>Latitude: ???</div>
          <div>Longitude: ???</div>
        </div>
      </div>
    </section>
  </main>
);

const PagePlaceholder = ({ title }: { title: string }) => (
  <div className="flex-1 flex flex-col items-center justify-center bg-[#19232c] text-white text-3xl font-bold">
    {title} (Placeholder)
  </div>
);

function AppLayout({ children }: { children: React.ReactNode }) {
  const nav = useNavigate();
  const location = useLocation();
  // For nav and sidebar active
  const isActive = (path: string) => location.pathname === path;
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 h-16 bg-neutral-900 border-b border-white/15">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 font-black text-2xl focus:outline focus:outline-blue-500">
            <span className="text-white">PF</span><span className="text-blue-500">TRACKER</span>
          </Link>
          <div className="h-8 w-px bg-white/20 mx-1" />
          <Link
            to="/support"
            className={`text-sm font-bold hover:underline hover:cursor-pointer text-white ${isActive("/support") ? "underline" : ""} focus:outline focus:outline-blue-500`}
          >
            Support PFTracker
          </Link>
        </div>
        <button className="transition-colors hover:bg-blue-600 bg-blue-500 rounded-md px-5 py-2 font-semibold text-white text-base select-none">
          Log in
        </button>
      </header>
      <div className="flex flex-row grow">
        {/* Sidebar */}
        <aside className="flex flex-col w-20 bg-neutral-900 border-r border-white/10 divide-y divide-white/10 z-10">
          <button
            className={`flex items-center justify-center w-full h-20 bg-neutral-800 transition-colors focus:outline focus:outline-blue-500 ${isActive("/") ? "bg-neutral-700" : "hover:bg-neutral-700"}`}
            title="My Flight"
            onClick={() => nav("/")}
          >
            <img src="https://ext.same-assets.com/3607954958/2292465190.svg" alt="Plane icon" className="h-8 w-8" />
          </button>
          <button
            className={`flex items-center justify-center w-full h-20 bg-neutral-800 transition-colors focus:outline focus:outline-blue-500 ${isActive("/flight") ? "bg-neutral-700" : "hover:bg-neutral-700"}`}
            title="Flight Plan"
            onClick={() => nav("/flight")}
          >
            <img src="https://ext.same-assets.com/3607954958/2563901416.svg" alt="Globe icon" className="h-8 w-8" />
          </button>
        </aside>
        <div className="flex-1 min-w-0 flex flex-col">{children}</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/flight" element={<PagePlaceholder title="Flight Plan" />} />
          <Route path="/my-flight" element={<PagePlaceholder title="My Flight" />} />
          <Route path="/support" element={<PagePlaceholder title="Support PFTracker" />} />
          {/* fallback route */}
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
