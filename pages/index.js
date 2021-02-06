import React from 'react';
import Header from '../components/ui/Header';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import HomeSection from '../components/composite/Home';
import OverviewSection from '../components/composite/Overview';
import SkillsSection from '../components/composite/Skills';
import ComputerGraphicsSection from '../components/composite/ComputerGraphics';
import WebDevelopmentSection from '../components/composite/WebDevelopment';
import PhotographySection from '../components/composite/Photography';
import AboutMeSection from '../components/composite/AboutMe';
import ContactSection from '../components/composite/Contact';
import OpeningsSection from '../components/composite/Openings';

const HomePage = () => (
  <>
    <Header />
    <Navbar />
    <HomeSection />
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
