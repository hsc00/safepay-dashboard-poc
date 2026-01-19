import { TransactionTable } from "./components/TransactionTable";

function App() {
  return (
    // bg-black aqui é o teste real. Se isto não ficar preto, o Tailwind está desligado.
    <div className="min-h-screen bg-[#020617] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-2xl font-bold mb-6 italic">
          SAFEPAY TERMINAL
        </h1>
        <TransactionTable />
      </div>
    </div>
  );
}

export default App;
