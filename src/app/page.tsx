import Actors from "@/app/actores/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="grid grid-cols-1 gap-8 w-full">
        <Actors/>
      </div>
    </main>
  );
}