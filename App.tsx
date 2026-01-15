
import React from 'react';
import { CheckCircle2, Mail, MessageCircle } from 'lucide-react';
import Logo from './components/Logo';
import EventCard from './components/EventCard';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center p-4 py-12 md:py-20">
      {/* Background Decorative Glows */}
      <div className="glow-bg-cyan w-96 h-96 -top-24 -left-24 rounded-full"></div>
      <div className="glow-bg-cyan w-96 h-96 -bottom-24 -right-24 rounded-full" style={{ background: 'rgb(168 85 247)', opacity: 0.1 }}></div>

      <main className="w-full max-w-2xl z-10 space-y-12 flex flex-col items-center">
        
        {/* Header Logo Section */}
        <div className="animate-fade-in">
          <Logo />
        </div>

        {/* Success Message Section */}
        <div className="flex flex-col items-center text-center space-y-6 animate-slide-up">
          <div className="relative">
             <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-30 animate-pulse"></div>
             <CheckCircle2 className="relative text-emerald-500 w-20 h-20" strokeWidth={1.5} />
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              ✅ ¡Registro Exitoso!
            </h2>
            <p className="text-slate-400 text-lg md:text-2xl font-light">
              Tu lugar está reservado para el <span className="text-cyan-400 font-medium">LAB for FOH</span>
            </p>
          </div>
        </div>

        {/* Main Info Card */}
        <div className="w-full animate-slide-up" style={{ animationDelay: '200ms' }}>
          <EventCard />
        </div>

        {/* Next Steps Section */}
        <div className="w-full bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-10 animate-slide-up space-y-8" style={{ animationDelay: '400ms' }}>
          <div className="flex items-center gap-3">
            <Mail className="text-cyan-400 w-6 h-6" />
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Próximos Pasos</h3>
          </div>
          
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Recibirás un email de confirmación con la siguiente información clave para tu asistencia al evento:
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { text: 'Acceso al evento', icon: '🎫' },
              { text: 'Agenda detallada', icon: '📅' },
              { text: 'Mapa de ubicación', icon: '🗺️' }
            ].map((item, idx) => (
              <li key={idx} className="bg-bg-card border border-white/5 p-4 rounded-xl flex flex-col items-center text-center gap-2 group hover:border-cyan-500/30 transition-all duration-300">
                <span className="text-2xl mb-1">{item.icon}</span>
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest leading-tight">{item.text}</span>
              </li>
            ))}
          </ul>

          <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-8">
            <p className="text-white text-xl font-medium italic">¡Nos vemos pronto!</p>
            
            <a 
              href="https://chat.whatsapp.com/BNEgUEowrn344xbGoHUCGx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto flex items-center justify-center gap-4 bg-whatsapp hover:bg-whatsapp-dark text-white px-10 py-5 rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-whatsapp/20 text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Únete al Grupo de WhatsApp
            </a>
          </div>
        </div>

        {/* Footer info */}
        <footer className="text-[#666] text-[10px] uppercase tracking-[0.3em] pb-8 animate-fade-in" style={{ animationDelay: '600ms' }}>
          LiveSync Pro &copy; 2025 • Panamá City
        </footer>
      </main>
    </div>
  );
};

export default App;
