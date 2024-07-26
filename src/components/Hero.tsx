import well from "/public/well.png";
import FetchedData from "./FetchedData";

export default function Hero() {
  return (
    <div className="min-h-screen">
      <header className="bg-[#0d3b66] flex justify-around text-white py-4 px-8">
        <h1 className="text-2xl dark:text-stone-200 font-bold">
          Wellness Retreats
        </h1>
      </header>
      <main className="p-8 space-y-8">
        <div className="rounded-lg shadow-lg overflow-hidden">
          <img
            src={well}
            width={400}
            height={300}
            alt="Meditation"
            className="w-full h-[300px] object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold">Discover Your Inner Peace</h2>
            <p className="text-gray-700 dark:text-stone-400">
              Join us for a series of wellness retreats designed to help you
              find tranquility and rejuvenation.
            </p>
          </div>
        </div>

        <div className="flex flex-col col-span-3">
          <FetchedData />
        </div>
      </main>
    </div>
  );
}
