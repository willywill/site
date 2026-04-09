import AboutMeSection from "../components/composite/AboutMe";
import ComputerGraphicsSection from "../components/composite/ComputerGraphics";
import ContactSection from "../components/composite/Contact";
import Header from "../components/composite/Header";
import HomeSection from "../components/composite/Home";
import OpeningsSection from "../components/composite/Openings";
import OverviewSection from "../components/composite/Overview";
import PhotographySection from "../components/composite/Photography";
import ScrollIndicator from "../components/composite/ScrollIndicator";
import SkillsSection from "../components/composite/Skills";
import WebDevelopmentSection from "../components/composite/WebDevelopment";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";

const HomePage = () => (
	<>
		<Header />
		<Navbar />
		<HomeSection />
		<ScrollIndicator />
		<OverviewSection />
		<SkillsSection />
		<ComputerGraphicsSection />
		<WebDevelopmentSection />
		<PhotographySection />
		<AboutMeSection />
		<ContactSection />
		<OpeningsSection />
		<Footer />
	</>
);

export default HomePage;
