import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Advantages />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
