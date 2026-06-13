import React from 'react';
import { Smartphone, Users, Gift, TrendingUp, ChevronRight, ChevronDown } from 'lucide-react';

export default function StreamingFlow() {
  const steps = [
    { 
      id: 1, 
      label: "Creator starts live", 
      icon: <Smartphone className="h-4.5 w-4.5 text-gold" /> 
    },
    { 
      id: 2, 
      label: "Viewers join", 
      icon: <Users className="h-4.5 w-4.5 text-gold" /> 
    },
    { 
      id: 3, 
      label: "Chat + gifts happen", 
      icon: <Gift className="h-4.5 w-4.5 text-gold" /> 
    },
    { 
      id: 4, 
      label: "Creator grows", 
      icon: <TrendingUp className="h-4.5 w-4.5 text-gold" /> 
    }
  ];

  return (
    <div className="w-full p-5 sm:p-6 rounded-2xl border border-espresso/[0.04] bg-white/45 backdrop-blur-md shadow-depth-sm flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2 select-none">
      
      {steps.map((step, idx) => {
        const isLast = idx === steps.length - 1;

        return (
          <React.Fragment key={step.id}>
            {/* Step Block */}
            <div className="flex items-center gap-3 bg-white/30 border border-espresso/[0.02] hover:border-gold/15 transition-all duration-350 px-4 py-2.5 rounded-xl flex-grow justify-center lg:justify-start">
              <div className="h-8 w-8 rounded-lg bg-gold/5 flex items-center justify-center shadow-premium-sm shrink-0">
                {step.icon}
              </div>
              <span className="text-xs font-extrabold text-espresso tracking-tight">
                {step.label}
              </span>
            </div>

            {/* Connection Arrow */}
            {!isLast && (
              <div className="flex items-center justify-center shrink-0">
                {/* Desktop: Chevron Right */}
                <ChevronRight className="hidden lg:block h-4 w-4 text-gold/30 animate-pulse" />
                {/* Mobile: Chevron Down */}
                <ChevronDown className="lg:hidden h-4 w-4 text-gold/30 animate-pulse" />
              </div>
            )}
          </React.Fragment>
        );
      })}

    </div>
  );
}
