function renderizarAssembleias() {
    const proximasContainer = document.getElementById('container-proximas');
    const historicoContainer = document.getElementById('container-historico');

    assembleias.forEach(ass => {
        const pautasHtml = ass.pauta.map(p => `<li>• ${p}</li>`).join('');
        
        if (ass.status === "pendente") {
            proximasContainer.innerHTML += `
                <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                    <div class="flex flex-wrap justify-between items-start gap-4 mb-6">
                        <div>
                            <span class="text-blue-600 font-bold text-sm uppercase tracking-widest text-xs">Convocação #${ass.id}</span>
                            <h3 class="text-2xl font-bold mt-1">${ass.titulo}</h3>
                        </div>
                        <div class="text-right">
                            <div class="text-lg font-bold text-slate-700">${ass.data}</div>
                            <div class="text-slate-500 text-sm italic">${ass.local} - ${ass.hora}</div>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 gap-8 border-t border-slate-100 pt-6">
                        <div>
                            <h4 class="font-bold text-slate-800 mb-2"><i class="fas fa-bullseye text-blue-500 mr-2"></i>Objetivo</h4>
                            <p class="text-slate-600 text-sm leading-relaxed">${ass.objetivo}</p>
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-800 mb-2"><i class="fas fa-list-ul text-blue-500 mr-2"></i>Pauta</h4>
                            <ul class="text-slate-600 text-sm space-y-1">${pautasHtml}</ul>
                        </div>
                    </div>
                </div>
            `;
        } else {
            historicoContainer.innerHTML += `
                <div class="bg-slate-100 rounded-2xl p-6 border border-slate-200">
                    <div class="flex justify-between items-center mb-4">
                        <h4 class="font-bold text-slate-700">#${ass.id} - ${ass.titulo}</h4>
                        <span class="px-4 py-1 bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold">CONCLUÍDO</span>
                    </div>
                    <p class="text-sm text-slate-600 bg-white p-4 rounded-xl border border-slate-200 italic">
                        <strong>Resumo:</strong> ${ass.resumo}
                    </p>
                </div>
            `;
        }
    });
}

function renderizarAgenda() {
    const grid = document.querySelector('.event-grid');
    if (!grid) return;

    grid.innerHTML = mobilizacoes.map(item => {
        // Separa data e mês para o visual de calendário
        const [dia, mes] = item.data.split(' ');

        return `
            <div class="flex snap-center min-w-[300px] md:min-w-[380px]">
                <div class="flex flex-col w-full bg-slate-900/40 p-8 rounded-[3rem] border border-slate-800 hover:border-blue-500/40 transition-all duration-500 group shadow-2xl relative overflow-hidden">
                    
                    <div class="flex justify-between items-start mb-8">
                        <div class="flex flex-col">
                            <span class="text-4xl font-black text-blue-500 leading-none">${dia}</span>
                            <span class="text-xs font-bold uppercase tracking-widest text-slate-500">${mes}</span>
                        </div>
                        <span class="text-[10px] font-black bg-blue-600/10 text-blue-400 border border-blue-400/20 px-3 py-1.5 rounded-full uppercase tracking-widest">
                            ${item.status}
                        </span>
                    </div>
                    
                    <h3 class="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                        ${item.titulo}
                    </h3>
                    <p class="text-slate-500 mb-6 italic text-sm flex items-center gap-2">
                        <i class="fas fa-location-dot text-blue-600/50"></i> ${item.local}
                    </p>

                    <p class="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                        ${item.descricao}
                    </p>

                    <button class="w-full py-4 bg-slate-800 group-hover:bg-blue-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all shadow-lg active:scale-95">
                        ${item.cta || 'Saber mais'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', renderizarAgenda);

document.addEventListener('DOMContentLoaded', renderizarAgenda);

document.addEventListener('DOMContentLoaded', renderizarAssembleias);