import React from 'react'
import Header from '../layouts/Header'
import WhoWeAre from '../layouts/WhoWeAre'
import Services from '../layouts/Services'
import Footer from '../layouts/Footer'
import Galeries from '../layouts/Galeries'

export default function MainPage() {
  return (
    <div className="min-h-screen flex flex-col ">
      <header className="w-full">
        <Header />
      </header>
      <main className="flex-grow container mx-auto py-12 px-12 space-y-12">
      <section id="whoWeAre">
          <WhoWeAre />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="galery">
          <Galeries />
        </section>
      </main>
      <footer id="contact" className="w-full">
        <Footer />
      </footer>
    </div>
  )
}
