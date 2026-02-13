import { useState } from "react";
import axios from "axios";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Chart from "./components/Chart";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";

function App() {

  const [generatedCode, setGeneratedCode] = useState("");
  const [explanation, setExplanation] = useState("");

  const handleGenerate = async () => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/generate"
      );

      setGeneratedCode(response.data.code);
      setExplanation(response.data.explanation);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6 space-y-6">
          <Card title="Component Test">

            <Button onClick={handleGenerate}>
              Generate UI
            </Button>

            {explanation && (
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-bold mb-2">Explanation</h3>
                <p>{explanation}</p>
              </div>
            )}

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
