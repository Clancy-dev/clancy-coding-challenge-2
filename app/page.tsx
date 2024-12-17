'use client'

import { Blog } from '@/components/Blog';
import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { Team } from '@/components/Team';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'


export default function Home() {
  const [heroRef, isHeroVisible] = useIntersectionObserver();
  const [servicesRef, isServicesVisible] = useIntersectionObserver();
  const [projectsRef, isProjectsVisible] = useIntersectionObserver();
  const [teamRef, isTeamVisible] = useIntersectionObserver();
  const [blogRef, isBlogVisible] = useIntersectionObserver();
  const [contactRef, isContactVisible] = useIntersectionObserver();

  return (
    <main className="min-h-screen pt-20">
      <div id="home" ref={heroRef}>
        {isHeroVisible && <Hero />}
      </div>
      <div id="services" ref={servicesRef}>
        {isServicesVisible && <Services />}
      </div>
      <div id="project" ref={projectsRef}>
        {isProjectsVisible && <Projects />}
      </div>
      <div id="team" ref={teamRef}>
        {isTeamVisible && <Team />}
      </div>
      <div id="blog" ref={blogRef}>
        {isBlogVisible && <Blog />}
      </div>
      <div id="contact" ref={contactRef}>
        {isContactVisible && <Contact />}
      </div>
    </main>
  )
}

