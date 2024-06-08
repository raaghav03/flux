
import PromotionHeader from "../../src/components/PromotionHeader"
import Navbar from "../../src/components/Navbar"
import Hero from "../../src/components/Hero"
export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <PromotionHeader />
        <Navbar />
        <Hero />

      </div>
    </>);
}
