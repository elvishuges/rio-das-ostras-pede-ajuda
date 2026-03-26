const assembleias = [
    {
        id: "004",
        titulo: "Definição da Comissão de Obras",
        data: "28 de Março, 2026",
        hora: "19:30h",
        local: "Quadra de Esportes",
        objetivo: "Eleger 5 moradores para representar a rua em audiência com o Secretário de Obras.",
        pauta: [
            "Leitura da resposta da prefeitura",
            "Votação dos representantes",
            "Planejamento da Blitz Digital"
        ],
        status: "pendente", // pendente ou concluido
        resumo: ""
    },
    {
        id: "003",
        titulo: "Aprovação do Texto do Abaixo-Assinado",
        data: "10 de Março, 2026",
        hora: "19:00h",
        local: "Esquina da Rua Principal",
        objetivo: "Validar juridicamente o texto da petição popular.",
        pauta: [
            "Apresentação da minuta jurídica",
            "Coleta de assinaturas iniciais"
        ],
        status: "concluido",
        resumo: "Com a presença de 42 moradores, o texto foi aprovado por unanimidade. Já temos 100 assinaturas coletadas."
    }
];

const mobilizacoes = [
    
    {
        data: "28 MAR",
        diaSemana: "Sexta - 10h",
        status: "CONFIRMADO",
        statusColor: "emerald",
        titulo: "Reunião dos moradores",
        local: "Salão de Festas Hotspot",
        mapa: "https://www.google.com/maps/search/?api=1&query=Salão+de+Festas+Hotspot+Rio+das+Ostras", // Link do Maps
        descricao: "Final da rua Aurélio Buarque de Holanda, Q1, Lote 09.",
        icon: "fas fa-map-marker-alt",
        tipo: "PRESENCIAL"
    },
    {
        data: "30 MAR",
        diaSemana: "Segunda - 12h",
        status: "CONFIRMADO",
        statusColor: "emerald",
        titulo: "Manifestação Enseada das Gaivotas",
        local: "Câmara Municipal de Rio das Ostras",
        mapa: "https://www.google.com/maps/search/?api=1&query=Câmara+Municipal+Rio+das+Ostras",
        descricao: "Manifestação para chamar a atenção dos vereadores.",
        icon: "fas fa-map-marker-alt",
        tipo: "PRESENCIAL"
    },
    {
        data: "06 ABR",
        diaSemana: "Segunda - 10h",
        status: "PENDENTE",
        statusColor: "amber",
        titulo: "Blitz Digital",
        local: "Online (Instagram)",
        mapa: "https://www.instagram.com/carlosaugustobalthazar/", // Link da rede social
        descricao: "Comentários simultâneos no perfil do instagram do prefeito exigindo respostas.",
        icon: "fas fa-laptop",
    },
    {
        data: "15 ABR",
        diaSemana: "Quarta - 09h",
        status: "ESTRATÉGICO",
        statusColor: "blue",
        titulo: "Entrega de Ofício",
        local: "Sede da Câmara Municipal",
        mapa: "https://www.google.com/maps/search/?api=1&query=Câmara+Municipal+Rio+das+Ostras",
        descricao: "Protocolo coletivo do dossiê de fotos.",
        icon: "fas fa-building",
    }
];