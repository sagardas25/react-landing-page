import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tomorrow from "./components/Tomorrow";
import Progress from "./components/Progress";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-[#111] font-body">
      <Navbar />
      <Hero />
      <Tomorrow />
      <Progress />

      <Services />

      <Testimonial />

      <Newsletter />

      <Footer />
    </div>
  );
}
