import { Button } from './components/Button';

export function App() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-zinc-950 text-zinc-50">
      <h1 className="font-black text-[72px] tracking-tighter">
        Hello Vite + React
      </h1>

      <Button>Button</Button>
    </main>
  );
}
