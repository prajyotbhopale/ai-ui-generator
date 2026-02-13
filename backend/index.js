import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

app.post("/generate", (req, res) => {
  res.json({
    code: `
      <>
        <Navbar />
        <Sidebar />
        <Card title="Demo Card">
          <Button>Generated Button</Button>
        </Card>
      </>
    `,
    explanation: "This is a fake response from backend."
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
