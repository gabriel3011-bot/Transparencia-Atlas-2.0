import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { atlasData } from '../data/atlasData';
import { Card } from './ui/Card';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[var(--color-atlas-card)] border border-[var(--color-atlas-border)] p-3 rounded-lg shadow-xl backdrop-blur-sm bg-opacity-90">
        <p className="text-[var(--color-atlas-copper)] text-sm font-medium tracking-wide">{`${label}`}</p>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-white text-xs font-mono">{`${payload[0].value}%`}</p>
          {data.number && (
            <p className="text-gray-400 text-xs font-mono font-medium">({data.number})</p>
          )}
        </div>
      </div>
    );
  }
  return null;
};

// Custom layout for labels to persist on the right side of the bars
const renderCustomLabel = (props: any) => {
  const { x, y, width, height, value, index } = props;
  const data = atlasData.dashboard.financial[index];
  return (
    <text 
      x={x + width + 8} 
      y={y + height / 2} 
      fill="#9CA3AF" 
      dy={4} 
      fontSize={10} 
      fontFamily="var(--font-mono)"
    >
      {value}% {data?.number ? `(${data.number})` : ''}
    </text>
  );
};

export function Dashboard() {
  return (
    <section id="dashboard" className="py-20 md:py-32 bg-[var(--color-atlas-bg)] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-24 text-center">
          <span className="text-[var(--color-atlas-copper)] text-xs font-medium tracking-[0.2em] uppercase mb-4 block">Transparência</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-6">Painel de Controle</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Acompanhe em tempo real a alocação de recursos e o status das atividades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Financial Card */}
          <Card className="col-span-1 lg:col-span-2 min-h-[400px] flex flex-col">
            <h3 className="text-lg font-serif font-medium text-white mb-8 border-b border-[var(--color-atlas-border)]/50 pb-4">
              Investimentos
            </h3>
            <div className="flex-grow w-full min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={atlasData.dashboard.financial}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="category" 
                    type="category" 
                    tick={{ fill: '#6B7280', fontSize: 11, fontFamily: 'var(--font-sans)' }} 
                    width={100}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(197,148,119,0.05)'}} />
                  <Bar dataKey="percentage" radius={[0, 4, 4, 0]} barSize={24} isAnimationActive={true}>
                    <LabelList dataKey="percentage" content={renderCustomLabel} />
                    {atlasData.dashboard.financial.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill="#C59477" fillOpacity={0.6 + (index * 0.08)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Legal Card */}
          <Card className="col-span-1 min-h-[400px] group hover:bg-[var(--color-atlas-card)]/80 transition-all flex flex-col justify-center relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                {(() => {
                  const Icon = atlasData.dashboard.legal.icon;
                  return <Icon size={120} className="text-[var(--color-atlas-copper)]" />;
                })()}
             </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[var(--color-atlas-copper)]/5 rounded-full text-[var(--color-atlas-copper)] border border-[var(--color-atlas-copper)]/10">
                  {(() => {
                    const Icon = atlasData.dashboard.legal.icon;
                    return <Icon size={20} />;
                  })()}
                </div>
                <h3 className="text-lg font-serif font-medium text-white">{atlasData.dashboard.legal.title}</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed text-justify font-light">
                {atlasData.dashboard.legal.description}
              </p>
            </div>
          </Card>
        </div>

        {/* Roadmap Card */}
        <div className="mb-24">
          <Card className="w-full overflow-hidden p-0 bg-transparent border-none shadow-none">
            <div className="p-6 md:p-8 bg-[var(--color-atlas-card)] border border-[var(--color-atlas-border)]/60 rounded-xl">
              <h3 className="text-lg font-serif font-medium text-white mb-12 border-b border-[var(--color-atlas-border)]/50 pb-4">
                Roadmap
              </h3>
              
              {/* Scrollable Container */}
              <div className="overflow-x-auto no-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0">
                <div className="relative flex items-start justify-between min-w-[800px] pt-4">
                  {/* Horizontal Line */}
                  <div className="absolute top-[19px] left-0 right-0 h-[1px] bg-[var(--color-atlas-border)]" />
                  <div className="absolute top-[19px] left-0 w-1/3 h-[1px] bg-gradient-to-r from-[var(--color-atlas-copper)] to-transparent opacity-50" />
                  
                  {atlasData.dashboard.roadmap.map((item, index) => (
                    <div key={index} className="relative flex flex-col items-center text-center w-48 group">
                      {/* Dot */}
                      <div className="w-2.5 h-2.5 bg-[var(--color-atlas-card)] border-2 border-[var(--color-atlas-copper)] rounded-full mb-6 relative z-10 group-hover:bg-[var(--color-atlas-copper)] transition-colors duration-300" />
                      
                      {/* Content */}
                      <div className="flex flex-col items-center space-y-2">
                        <span className="text-[10px] font-medium text-[var(--color-atlas-copper)] uppercase tracking-widest px-2 py-1 bg-[var(--color-atlas-copper)]/5 rounded border border-[var(--color-atlas-copper)]/10">
                          {item.date}
                        </span>
                        <p className="text-sm font-medium text-gray-200">{item.task}</p>
                        <span className="text-xs text-gray-500 font-light">{item.phase}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Concept Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
           {/* Image Content (Left) - Order 2 on mobile */}
           <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 bg-[var(--color-atlas-copper)]/5 rounded-2xl transform -translate-x-4 translate-y-4 md:-translate-x-6 md:translate-y-6 transition-transform duration-500" />
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src={atlasData.dashboard.concept.imageUrl} 
                  alt="Concept" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              </div>
           </div>

           {/* Text Content (Right) - Order 1 on mobile */}
           <div className="space-y-8 order-1 md:order-2">
              <div>
                <span className="text-[var(--color-atlas-copper)] text-xs font-medium tracking-[0.2em] uppercase mb-4 block">Conceito</span>
                <h3 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6 leading-tight">
                  {atlasData.dashboard.concept.title}
                </h3>
              </div>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light whitespace-pre-wrap text-justify tracking-wide">
                {atlasData.dashboard.concept.description}
              </p>
              <div className="w-16 h-px bg-[var(--color-atlas-copper)]/50" />
           </div>
        </div>
      </div>
    </section>
  );
}
