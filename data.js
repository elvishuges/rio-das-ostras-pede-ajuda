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
        data: "27 MAR",
        diaSemana: "Sexta - 17h",
        status: "CONFIRMADO",
        statusColor: "emerald", // emerald, amber, blue, red
        titulo: "Reunião dos moradores",
        local: "Salão de Festas Hotspot",
        descricao: "Final da rua Aurélio Buarque de Holanda, Q1, Lote 09.",
        icon: "fas fa-map-marker-alt",
        tipo: "PRESENCIAL"
    },
    {
        data: "30 MAR",
        diaSemana: "Segunda - 12h",
        status: "CONFIRMADO",
        statusColor: "emerald", // emerald, amber, blue, red
        titulo: "Protesto Enseada das Gaivotas",
        local: "Porta da Câmara dos Vereadores",
        descricao: "Manifestação para camar a atenção dos vereadores.",
        icon: "fas fa-map-marker-alt",
        tipo: "PRESENCIAL"
    },
    {
        data: "06 ABR",
        diaSemana: "Segunda - 10h",
        status: "PENDENTE",
        statusColor: "amber",
        titulo: "Blitz Digital: Invasão às Redes",
        local: "Online (Instagram Oficial)",
        descricao: "Comentários simultâneos no perfil do Prefeito exigindo respostas.",
        icon: "fas fa-laptop",
    },
    {
        data: "15 ABR",
        diaSemana: "Quarta - 09h",
        status: "ESTRATÉGICO",
        statusColor: "blue",
        titulo: "Entrega de Ofício na Câmara",
        local: "Sede da Câmara Municipal",
        descricao: "Protocolo coletivo do dossiê de fotos e reclamações.",
        icon: "fas fa-building",
    }
];