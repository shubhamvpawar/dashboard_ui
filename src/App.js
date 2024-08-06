import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl">Dashboard</h1>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
