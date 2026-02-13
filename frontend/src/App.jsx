
import './App.css'
import Button from './components/Button';
import Card from './components/Card';
import Chart from './components/Chart';
import Input from './components/Input';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Table from './components/Table';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <Navbar />

      <div className="flex">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <Card title="Component Test">
            <Button>Test Button</Button>
            <Input placeholder="Test input..." />
            <Chart />
            <Table />
          </Card>
        </div>
      </div>
    </div>
  );
}


export default App;

