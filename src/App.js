import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Header />
      <Sidebar />
      <Dashboard />
    </div>

    // <div className="min-h-screen bg-gray-900 text-white">
    //   <header className="bg-gray-800 p-4 shadow-md">
    //     {/* <div className="container mx-auto">
    //       <h1 className="text-2xl">Dashboard</h1>
    //     </div> */}
    //     <Header />
    //   </header>
    //   <main>
    //     <Sidebar />
    //     <Dashboard />
    //   </main>
    // </div>

    // <div className="flex h-screen">
    //   <Sidebar />
    //   <div className="flex-1 flex flex-col">
    //     <Header />
    //     <main className="flex-1 p-4">
    //       <Dashboard />S
    //     </main>
    //   </div>
    // </div>

    // <div className="min-h-screen flex flex-col">
    //   <Header />
    //   <div className="flex flex-1">
    //     <Sidebar />
    //     <main className="flex-1 p-4">
    //       <Dashboard />
    //     </main>
    //   </div>
    // </div>
  );
}

export default App;
