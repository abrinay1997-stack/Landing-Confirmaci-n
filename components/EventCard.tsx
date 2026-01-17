import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';

const EventCard: React.FC = () => {
  const details = [
    {
      icon: <Calendar className="text-cyan-400 w-5 h-5" />,
      label: "Fecha",
      value: "6 de Febrero, 2026"
    },
    {
      icon: <Clock className="text-cyan-400 w-5 h-5" />,
      label: "Horario",
      value: "6:00 PM - 9:00 PM"
    },
    {
      icon: <MapPin className="text-cyan-400 w-5 h-5" />,
      label: "Ubicación",
      value: "Audio Concept, Plaza 61, Obarrio",
      link: "https://maps.app.goo.gl/EL4tc2LmF97RDK9J9"
    }
  ];

  return (
    <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 card-shadow relative overflow-hidden group">
      {/* Glow superior */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
      
      {/* Content */}
      <div className="space-y-6">
        <div className="pb-4 border-b border-white/5">
          <h3 className="text-white text-xl font-bold mb-1">Detalles del Evento</h3>
          <p className="text-slate-500 text-xs uppercase tracking-widest">Confirma tu asistencia en agenda</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {details.map((detail, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-bg-primary p-2.5 rounded-lg border border-white/5 group-hover:border-cyan-500/20 transition-colors">
                {detail.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">
                  {detail.label}
                </span>
                {detail.link ? (
                  <a 
                    href={detail.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white text-lg font-medium hover:text-cyan-400 transition-colors flex items-center gap-2 group/link"
                  >
                    {detail.value}
                    <ExternalLink className="w-3 h-3 opacity-40 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <span className="text-white text-lg font-medium">
                    {detail.value}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-8 -right-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
        <Calendar className="w-32 h-32 text-white" />
      </div>
    </div>
  );
};

export default EventCard;