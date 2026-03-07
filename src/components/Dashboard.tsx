import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { atlasData } from '../data/atlasData';
import { Card } from './ui/Card';
import { CheckCircle2 } from 'lucide-react';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[var(--color-atlas-card)] border border-[var(--color-atlas-border)] p-2 rounded shadow-lg">
        <p className="text-[var(--color-atlas-copper)] font-medium">{`${label}: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

export function Dashboard() {
  return (
    <section id="dashboard" className="py-24 bg-[var(--color-atlas-bg)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Painel de Transparência</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Acompanhe em tempo real a alocação de recursos e o status das atividades.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Financial Card */}
          <Card className="col-span-1 lg:col-span-2 min-h-[400px]">
            <h3 className="text-xl font-serif font-semibold text-white mb-6 border-b border-[var(--color-atlas-border)] pb-4">
              Range de Investimento
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={atlasData.dashboard.financial}
                  margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                >
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="category" 
                    type="category" 
                    tick={{ fill: '#9CA3AF', fontSize: 12 }} 
                    width={120}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
                  <Bar dataKey="percentage" radius={[0, 4, 4, 0]} barSize={20}>
                    {atlasData.dashboard.financial.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill="#C59477" fillOpacity={0.8 + (index * 0.05)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Legal Card (Moved here) */}
          <Card className="col-span-1 min-h-[400px] group hover:bg-[var(--color-atlas-card)]/80 transition-all flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[var(--color-atlas-copper)]/10 rounded-lg text-[var(--color-atlas-copper)] group-hover:bg-[var(--color-atlas-copper)] group-hover:text-black transition-colors">
                {(() => {
                  const Icon = atlasData.dashboard.legal.icon;
                  return <Icon size={24} />;
                })()}
              </div>
              <h3 className="text-lg font-serif font-semibold text-white">{atlasData.dashboard.legal.title}</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed text-justify">
              {atlasData.dashboard.legal.description}
            </p>
          </Card>
        </div>

        {/* Roadmap Card (Full width below top row) */}
        <div className="mb-16">
          <Card className="w-full min-h-[300px] overflow-x-auto custom-scrollbar p-8">
            <h3 className="text-xl font-serif font-semibold text-white mb-12 border-b border-[var(--color-atlas-border)] pb-4">
              Roadmap de Produção
            </h3>
            <div className="relative flex items-start justify-between min-w-[800px] px-4">
              {/* Horizontal Line */}
              <div className="absolute top-[5px] left-0 right-0 h-[2px] bg-[var(--color-atlas-copper)]/30" />
              
              {atlasData.dashboard.roadmap.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center text-center w-48 group">
                  {/* Dot */}
                  <div className="w-3 h-3 bg-[var(--color-atlas-copper)] rounded-full mb-4 relative z-10 ring-4 ring-[var(--color-atlas-card)] group-hover:scale-125 transition-transform" />
                  
                  {/* Content */}
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-medium text-[var(--color-atlas-copper)] uppercase tracking-wider mb-2 bg-[var(--color-atlas-card)] px-2 py-1 rounded border border-[var(--color-atlas-border)]">
                      {item.date}
                    </span>
                    <p className="text-sm font-medium text-gray-200 mb-1">{item.task}</p>
                    <span className="text-xs text-gray-500">{item.phase}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Concept Section (Mirrored About Us Layout) */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           {/* Image Content (Left) */}
           <div className="relative">
              <div className="absolute inset-0 bg-[var(--color-atlas-copper)]/10 rounded-2xl transform -translate-x-4 translate-y-4" />
              <Card className="relative overflow-hidden aspect-[4/3] p-0 border-none">
                <img 
                  src={atlasData.dashboard.concept.imageUrl} 
                  alt="Concept" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </Card>
           </div>

           {/* Text Content (Right) */}
           <div className="space-y-6">
              <h3 className="text-4xl font-serif font-bold text-white mb-4">{atlasData.dashboard.concept.title}</h3>
              <p className="text-lg text-gray-400 leading-relaxed font-light whitespace-pre-wrap text-justify">
                {atlasData.dashboard.concept.description}
              </p>
              <div className="w-24 h-1 bg-[var(--color-atlas-copper)] mt-8" />
           </div>
        </div>
      </div>
    </section>
  );
}
