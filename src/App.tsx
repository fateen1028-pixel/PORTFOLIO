import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { OtherProjects } from "@/components/sections/OtherProjects";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { siteConfig } from "@/data/portfolio";

function App() {
  return (
    <>
      <Helmet>
        <title>Fateen · Backend Developer & AI Systems Builder</title>
        <meta name="description" content={siteConfig.tagline} />
        <meta
          property="og:title"
          content={`${siteConfig.name} | Backend Developer & AI Systems Builder`}
        />
        <meta property="og:description" content={siteConfig.tagline} />
        <meta property="og:image" content={siteConfig.ogImage} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <main className="w-full min-w-0 max-lg:overflow-x-clip">
        <Hero />
        <FeaturedProject />
        <OtherProjects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
