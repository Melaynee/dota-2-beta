import BackgroundVideo from "@/components/BackgroundVideo";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex pt-[76.41px] min-h-screen flex-col justify-between text-white ">
      <div className="bg-black -z-[20] h-screen"></div>
      <div className="">
        <BackgroundVideo />
        <Hero />
      </div>
      <div className="text-white">
        <h3>Latest News</h3>
        <Link href={"#"}>View All</Link>
      </div>
    </main>
  );
}
