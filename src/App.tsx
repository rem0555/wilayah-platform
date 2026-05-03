import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. Professional Navigation (Right-Side Aligned) */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-tighter text-blue-700">
            WILAYAH<span className="text-blue-400">.</span>
          </div>
          
          {/* Right Aligned Menu */}
          <div className="hidden items-center space-x-8 lg:flex">
            <div className="flex space-x-6 text-[13px] font-semibold text-slate-500 uppercase tracking-widest">
              <a href="#" className="hover:text-blue-600 transition">Dream</a>
              <a href="#" className="hover:text-blue-600 transition">Programs</a>
              <a href="#" className="hover:text-blue-600 transition">Pricing</a>
            </div>
            <div className="h-6 w-px bg-slate-200" />
            <div className="flex items-center space-x-6">
              <a href="#" className="text-[13px] font-semibold text-slate-800 hover:text-blue-600">Log In</a>
              <button className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200">
                Start Learning
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* 2. Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-6 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-slate-900 md:text-7xl">
              Understand the Quran <br />
              <span className="text-blue-600">Like Never Before</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 leading-relaxed">
              Structured learning designed to help you deeply understand the meaning, language, and message of the Quran.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-xl bg-blue-600 px-10 py-4 text-lg font-bold text-white shadow-xl shadow-blue-100 transition hover:bg-blue-700">
                Start My Journey
              </button>
              <button className="rounded-xl border border-slate-200 bg-white px-10 py-4 text-lg font-bold hover:bg-slate-50 transition">
                Explore Courses
              </button>
            </div>
          </div>
        </section>

        {/* 3. Featured Programs */}
        <section className="bg-slate-50 py-20 px-6">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">Featured Programs</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { title: "Quran Foundations", img: "https://images.unsplash.com/photo-1584281723358-7680a3f65d6c?q=80&w=800" },
                { title: "Arabic Deep Dive", img: "https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=800" },
                { title: "Tafsir Intensive", img: "https://images.unsplash.com/photo-1590076247564-9297746f044a?q=80&w=800" }
              ].map((course, i) => (
                <div key={i} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:scale-[1.02]">
                  <img src={course.img} alt={course.title} className="h-48 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-bold text-blue-700">{course.title}</h3>
                    <p className="text-sm text-slate-500 italic">Master the linguistic beauty of the Quranic text.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Video Masterclass */}
        <section className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2 className="mb-8 text-3xl font-bold italic">"Why do we need to study Arabic?"</h2>
          <div className="relative overflow-hidden rounded-3xl bg-black shadow-2xl aspect-video">
            <iframe 
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/Rxa6WcEFPPo" 
              title="Wilayah Masterclass"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* 5. Counter Stats Section */}
        <section className="bg-blue-700 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center md:grid-cols-3">
            <div>
              <div className="text-5xl font-bold">50,000+</div>
              <div className="text-blue-100 text-xs uppercase tracking-[0.3em] mt-2 font-black">Students</div>
            </div>
            <div>
              <div className="text-5xl font-bold">120+</div>
              <div className="text-blue-100 text-xs uppercase tracking-[0.3em] mt-2 font-black">Core Lessons</div>
            </div>
            <div>
              <div className="text-5xl font-bold">30+</div>
              <div className="text-blue-100 text-xs uppercase tracking-[0.3em] mt-2 font-black">Countries</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-24 text-center text-white">
        <h2 className="mb-8 text-4xl font-bold">Start Your Journey Today</h2>
        <button className="rounded-full bg-blue-600 px-12 py-4 text-lg font-bold transition hover:bg-blue-700">Subscribe Now</button>
        <div className="mt-20 border-t border-slate-800 pt-8 text-[10px] uppercase tracking-widest text-slate-500">
          © 2026 Wilayah Learning Studio. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
