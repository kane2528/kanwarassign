
import Navbar from "../components/Navbar";
import Perks from "../components/Perks";
import Section2 from "../components/sec2";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto py-6 px-4">
        <Navbar />
        <Section2 />
        <Perks />
      </div>
    </div>
  );
}
