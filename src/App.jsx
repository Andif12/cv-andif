import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
            {/* HERO SECTION */}
            <section className="flex flex-col lg:flex-row items-center gap-20 mb-32 border-b border-white/5 pb-32">
              <div className="flex-1 text-center lg:text-left">
                <p className="text-blue-600 font-bold uppercase tracking-[0.6em] text-[10px] mb-8">Software Engineer & Researcher</p>
                <h1 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter leading-[0.8] mb-12 uppercase">
                  Engineering <br/> 
                  <span className="italic font-serif text-blue-500">Digital</span> <br/>
                  Solutions
                </h1>
                <div className="flex flex-col md:flex-row gap-12 text-[11px] font-black uppercase tracking-[0.4em] text-slate-700">
                   <span className="flex items-center gap-4">PINRANG, SOUTH SULAWESI</span>
                   <span className="flex items-center gap-4 italic text-slate-500 font-serif">Bachelor of Computer Science</span>
                </div>
              </div>

              <div className="relative group w-72 h-72 md:w-[32rem] md:h-[32rem] flex-shrink-0">
                 <div className="absolute -inset-10 bg-blue-600/10 blur-[120px] pointer-events-none group-hover:bg-blue-600/20 transition-all duration-1000"></div>
                 <img 
                   src="src/assets/foto.png" 
                   alt="Andi Magfirah Maqbul" 
                   className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-1000 drop-shadow-2xl"
                   onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<div class="w-full h-full flex items-center justify-center text-white/5 font-black text-9xl uppercase">AM</div>'; }}
                 />
              </div>
            </section>

            {/* EXECUTIVE SUMMARY */}
            <div className="max-w-4xl mb-24">
              <h2 className="text-blue-500 font-bold text-xs uppercase tracking-[0.4em] mb-8">Profile Details</h2>
              <p className="text-white text-2xl md:text-4xl font-light leading-snug">
                Mahasiswa Ilmu Komputer di <span className="font-semibold text-blue-400">ITH</span> dengan <span className="text-white font-bold">IPK 3.90</span>. 
                Berfokus pada pengembangan sistem terintegrasi, analisis data, dan riset AI untuk solusi dunia nyata.
              </p>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-12">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2">Education</p>
                  <p className="text-white font-bold tracking-tight text-sm">BJ Habibie Institute of Technology</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2">Certification</p>
                  <p className="text-white font-bold tracking-tight text-sm">BNSP Network Administrator</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2">Language</p>
                  <p className="text-white font-bold tracking-tight text-sm">TOEFL ITP 587</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="space-y-24 animate-in slide-in-from-right-10 duration-1000 pt-10">
            <h2 className="text-white text-5xl font-black uppercase tracking-tighter mb-16 italic">Work & Experience</h2>
            
            {/* PT ESAPUTLII */}
            <div className="group border-l-2 border-indigo-600 pl-8 md:pl-12 py-4">
              <h3 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">PT Esaputlii Prakarsa Utama</h3>
              <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-6">Data Analysis Intern (Praktek Kerja)</p>
              <p className="text-slate-400 text-lg leading-relaxed font-light mb-6 text-justify">
                Selama masa praktek kerja di PT Esaputlii Prakarsa Utama, saya bertanggung jawab dalam melakukan pembersihan data (*data cleaning*) serta rekonsiliasi dataset perdagangan selama lima tahun. Saya melakukan analisis pola temporal untuk mengidentifikasi penjual dengan performa terbaik, memberikan wawasan berbasis data untuk mendukung strategi bisnis perusahaan.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Data Cleaning', 'Temporal Analysis', 'Data Reconciliation'].map(t => (
                  <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-slate-400">{t}</span>
                ))}
              </div>
            </div>

            {/* PAREPARE DALAM GENGGAMAN (PDG) */}
            <div className="group border-l-2 border-slate-700 pl-8 md:pl-12 py-4 hover:border-blue-500 transition-colors">
              <h3 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">Parepare Dalam Genggaman (PDG)</h3>
              <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-6">Terkait dengan Institut Teknologi BJ Habibie (ITH)</p>
              <p className="text-slate-400 text-lg leading-relaxed font-light mb-6 text-justify">
                Parepare Dalam Genggaman is a digital ecosystem developed to integrate various city services into a single, responsive web platform. I architected the full-stack system to ensure residents could access public information, emergency services, and administrative updates seamlessly across all devices, streamlining the interaction between the government and the community.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Full-Stack Development', 'Responsive Web', 'System Architecture'].map(t => (
                  <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-slate-400">{t}</span>
                ))}
              </div>
            </div>

            {/* SOBAT DAGANG */}
            <div className="group border-l-2 border-blue-600 pl-8 md:pl-12 py-4">
              <h3 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">Sobat Dagang Kota Parepare</h3>
              <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-6">Terkait dengan Institut Teknologi BJ Habibie (ITH)</p>
              <p className="text-slate-400 text-lg leading-relaxed font-light mb-6 text-justify">
                Sobat Dagang is a web platform by the Trade Office of Parepare City that provides information on market prices, official news, halal certification data, and services such as licensing requests, non-licensing applications, calibration (tera/tera ulang), and SME development support. It also showcases local MSME products and allows users to manage their registered measuring instruments. With a user-friendly interface and API integration, Sobat Dagang offers a digital solution for public services and business development in Parepare City.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Laravel', 'AJAX', 'API Integration', 'Full-Stack'].map(t => (
                  <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-slate-400">{t}</span>
                ))}
              </div>
            </div>

            {/* SIMAK */}
            <div className="group border-l-2 border-slate-800 pl-8 md:pl-12 py-4 hover:border-blue-400 transition-colors">
              <h3 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">Sistem Manajemen Kelurahan (SIMAK)</h3>
              <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-6">Terkait dengan Institut Teknologi BJ Habibie (ITH)</p>
              <p className="text-slate-400 text-lg leading-relaxed font-light mb-6 text-justify">
                SIMAK (Village Management System) is a web-based platform that I developed with the ITH KKN team in collaboration with the Parepare City Government to support data management and services in 22 villages. The system provides various information, including population data, MSME potentials, and activity reports, helping village offices manage administration more efficiently while enabling the community to access information quickly, transparently, and in an integrated manner.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Laravel', 'AJAX', 'Responsive Web', 'Database Integration'].map(t => (
                  <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-slate-400">{t}</span>
                ))}
              </div>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 animate-in zoom-in-95 duration-1000 pt-10">
            <div className="col-span-full mb-8">
              <h2 className="text-white text-5xl font-black uppercase tracking-tighter italic">Technical Skills</h2>
            </div>
            {[
              { name: 'Python (AI & Computer Vision)', level: '85%' },
              { name: 'Full-Stack Development (Laravel/React)', level: '90%' },
              { name: 'Data Analysis & Cleaning', level: '85%' },
              { name: 'Network Administration (BNSP)', level: '100%' }
            ].map((skill, i) => (
              <div key={i} className="group">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-2xl font-bold text-white uppercase tracking-tighter group-hover:text-blue-500 transition-colors">{skill.name}</span>
                  <span className="text-[10px] font-mono text-slate-700 italic">{skill.level}</span>
                </div>
                <div className="h-[1px] w-full bg-white/10 group-hover:bg-blue-600 transition-colors"></div>
              </div>
            ))}
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-400 font-sans selection:bg-blue-600/30 overflow-x-hidden">
      
      {/* FIXED HEADER */}
      <nav className="fixed top-0 w-full z-50 px-10 py-10 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-black text-white text-2xl tracking-tighter uppercase italic">
            ANDI MAGFIRAH MAQBUL<span className="text-blue-600">.</span>
          </div>
          <div className="flex gap-12">
            {['home', 'projects', 'skills'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[10px] font-bold uppercase tracking-[0.4em] transition-all relative py-2 ${
                  activeTab === tab ? 'text-white' : 'text-slate-600 hover:text-white'
                }`}
              >
                {tab}
                {activeTab === tab && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600"></span>}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-10 pt-48 pb-32">
        <main className="min-h-[600px]">
          {renderContent()}
        </main>

        <footer className="mt-64 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-800">
            © 2026 Crafted by Andi Magfirah Maqbul.
          </p>
          <div className="flex gap-16 text-[10px] font-black text-slate-600 uppercase tracking-[0.4em]">
             <a href="https://github.com/Andif12" className="hover:text-blue-500 transition-colors">GitHub</a>
             <a href="https://linkedin.com/in/andi-magfirah-maqbul" className="hover:text-blue-500 transition-colors">LinkedIn</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;