
import PromotionHeader from "../../src/components/PromotionHeader"
import Navbar from "../../src/components/Navbar"
import Hero from "../../src/components/Hero"
import SecondaryButton from "../../src/components/SecondaryButton"
import PrimaryButton from "../../src/components/PrimaryButton"
export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <PromotionHeader />
        <Navbar />
        <Hero />
        <div className="flex  flex-col gap-2 font-geist font-medium text-xs text-gray items-center justify-center">
          <div className="flex gap-4 px-4  items-center justify-center">
            <SecondaryButton />
            <PrimaryButton />
          </div>
          Join 100+ builders who are building with Flux-UI 🚀
        </div>
      </div>
    </>);
}
