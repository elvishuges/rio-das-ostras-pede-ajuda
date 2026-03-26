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

function scrollGrid(direcao) {
    const grid = document.querySelector('.event-grid');
    const scrollAmount = 340; // Largura aproximada de um card + gap
    grid.scrollBy({
        left: direcao * scrollAmount,
        behavior: 'smooth'
    });
}

function renderizarAgenda() {
    const grid = document.querySelector('.event-grid');
    if (!grid) return;

    grid.innerHTML = mobilizacoes.map(item => {
    const [dia, mes] = item.data.split(' ');
    
    // Lógica de cores para o Status
    const statusLower = item.status.toLowerCase();
    let statusClasses = "";
    
    if (statusLower.includes('pendente')) {
        statusClasses = "bg-red-600/10 text-red-400 border-red-400/20";
    } else if (statusLower.includes('confirmado')) {
        statusClasses = "bg-emerald-600/10 text-emerald-400 border-emerald-400/20";
    } else {
        // Cor padrão (Azul) caso seja outro status
        statusClasses = "bg-blue-600/10 text-blue-400 border-blue-400/20";
    }

    const isOnline = item.local.toLowerCase().includes('online');
    const btnIcon = isOnline ? 'fa-external-link-alt' : 'fa-location-arrow';
    const btnLabel = isOnline ? 'Acessar Link' : 'Como Chegar';

    return `
    <div class="flex snap-center min-w-[300px] md:min-w-[380px] p-4"> <!-- Adicionado padding para o card não cortar ao subir -->
        <div class="flex flex-col w-full bg-slate-900 p-8 rounded-[3rem] border border-slate-800 
                    hover:border-blue-500/40 transition-all duration-500 group shadow-2xl relative overflow-hidden
                    hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)] transform">
            
            <div class="flex justify-between items-start mb-8">
                <div class="flex flex-col">
                    <span class="text-4xl font-black text-blue-500 leading-none">${dia}</span>
                    <span class="text-xs font-bold uppercase tracking-widest text-slate-500">${mes}</span>
                </div>
                
                <div class="flex flex-col items-end">
                    <!-- Badge com cor dinâmica -->
                    <span class="text-[10px] font-black border px-3 py-1.5 rounded-full uppercase tracking-widest mb-2 ${statusClasses}">
                        ${item.status}
                    </span>
                    <div class="flex items-center gap-1 text-slate-400 font-bold text-sm mr-1">
                        <i class="far fa-clock text-blue-500"></i> ${item.diaSemana || '00:00'}
                    </div>
                </div>
            </div>
            
            <h3 class="text-2xl font-bold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors leading-tight">
                ${item.titulo}
            </h3>

            <div class="space-y-2 mb-6">
                <a href="${item.mapa}" target="_blank" class="text-slate-500 hover:text-blue-400 italic text-sm flex items-center gap-2 transition-colors">
                    <i class="${item.icon || 'fas fa-map-marker-alt'} text-blue-600/50 w-4"></i> 
                    <span class="underline decoration-dotted underline-offset-4">${item.local}</span>
                </a>
            </div>

            <p class="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                ${item.descricao}
            </p>

            <a href="${item.mapa}" target="_blank" class="w-full py-4 bg-slate-800 group-hover:bg-blue-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all shadow-lg active:scale-95 text-center flex items-center justify-center gap-2">
                <i class="fas ${btnIcon}"></i> ${btnLabel}
            </a>
        </div>
    </div>
`;
}).join('');
}

function iniciarContagemRegressiva() {
    const agora = new Date().getTime();
    const DURACAO_EVENTO_MS = 2 * 60 * 60 * 1000; // Define que o evento dura 2 horas

    const proximos = mobilizacoes.map(m => {
        const partesData = m.data.split(' ');
        const dia = parseInt(partesData[0]);
        const mesNome = partesData[1];
        const meses = { "JAN": 0, "FEV": 1, "MAR": 2, "ABR": 3, "MAI": 4, "JUN": 5 };

        const horaMatch = m.diaSemana ? m.diaSemana.match(/\d+/) : null;
        const horaEvento = horaMatch ? parseInt(horaMatch[0]) : 0;

        const dataEvento = new Date(2026, meses[mesNome], dia, horaEvento, 0, 0);
        
        return { 
            ...m, 
            dataObjeto: dataEvento.getTime(), 
            dataFormatada: `${dia} de ${mesNome} às ${horaEvento}h` 
        };
    }).filter(m => {
        // Deixa passar se o evento ainda vai acontecer 
        // OU se ele começou há menos de 2 horas (está acontecendo agora)
        return m.dataObjeto + DURACAO_EVENTO_MS > agora;
    });

    proximos.sort((a, b) => a.dataObjeto - b.dataObjeto);

    if (proximos.length > 0) {
        const proximoEvento = proximos[0];
        const container = document.getElementById('countdown-container');
        container.classList.remove('hidden');

        const interval = setInterval(() => {
            const agoraInterno = new Date().getTime();
            const distancia = proximoEvento.dataObjeto - agoraInterno;

            if (distancia < 0) {
    // Se a distância é negativa, mas o evento passou pelo filtro, ele está ocorrendo
    clearInterval(interval);
    container.innerHTML = `
        <div class="text-center py-4 w-full">
            <div class="mb-3">
                <span class="text-blue-600 font-bold animate-bounce text-lg block">
                   🚀 ${proximoEvento.titulo.toUpperCase()} ESTÁ ACONTECENDO!
                </span>
            </div>
            
            <div class="bg-blue-50 p-3 rounded-lg inline-block text-left w-full max-w-md border border-blue-100">
                <p class="text-sm text-gray-700 mb-2">
                    <strong>📍 Local:</strong> ${proximoEvento.local}
                </p>
                <p class="text-sm text-gray-600 mb-3 italic">
                    ${proximoEvento.descricao}
                </p>
                <a href="${proximoEvento.mapa}" target="_blank" 
                   class="inline-flex items-center justify-center w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                    <i class="fas fa-directions mr-2"></i> Ver no Google Maps
                </a>
            </div>
        </div>
    `;
} else {
                // Lógica normal do cronômetro
                const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
                const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

                document.getElementById('next-event-title').innerHTML = 
                    `${proximoEvento.titulo} <span class="text-blue-600 block text-sm not-italic font-medium mt-1">Agendado para: ${proximoEvento.dataFormatada}</span>`;
                
                document.getElementById('days').innerText = dias.toString().padStart(2, '0');
                document.getElementById('hours').innerText = horas.toString().padStart(2, '0');
                document.getElementById('minutes').innerText = minutos.toString().padStart(2, '0');
            }
        }, 1000);
    }
}


// Chame a função após renderizar a agenda
renderizarAgenda();
iniciarContagemRegressiva();

document.addEventListener('DOMContentLoaded', renderizarAgenda);


document.addEventListener('DOMContentLoaded', renderizarAssembleias);