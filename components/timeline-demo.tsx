import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {

  const jobs = [
    {
      company_name: "Neway",
      subtitle:
        "Sou responsável por corrigir bugs, implementar novas funcionalidades e prestar suporte aos sistemas da empresa. Destaco algumas das minhas contribuições:",
      company_time: "Set/2022 - atual",
      list_items: [
        {
          item: "Implementação de um sistema de gestão de acessos no portal administrativo.",
        },
        {
          item: "Criação de editor WYSIWYG com TinyMCE para o portal administrativo.",
        },
        { item: "Suporte N2, tratando chamados complexos e Hotfixes no Jira." },
        { item: "Monitorar as aplicações em produção utilizando New Relic." },
      ],
    },
    {
      company_name: "Split Risk",
      subtitle:
        "Na Split Risk eu corrijo bugs, implemento novas funcionalidades e presto suporte nos principais sistemas da empresa. Destaco algumas das minhas realizações:",
      company_time: "Set/2022 - Jan/2024",
      list_items: [
        {
          item: "Suporte na prototipagem de projetos web utilizando Figma.",
        },
        {
          item: "Desenvolvimento de landing pages de vendas para diversas empresas dentro do grupo, utilizando React, TypeScript, Material UI e CSS-in-JS (Styled-components)",
        },
        { item: "Criação de quadros Scrum no Trello para monitorar e organizar as atividades diárias." },
      ],
    },
    {
      company_name: "Online Shopping",
      subtitle:
        "Na Split Risk eu corrijo bugs, implemento novas funcionalidades e presto suporte nos principais sistemas da empresa. Destaco algumas das minhas realizações:",
      company_time: "Set/2021 - Ago/2022",
      list_items: [
        {
          item: "Prestava assistência técnica aos usuários e colaboradores da empresa, utilizando o sistema operacional Linux Mint",
        },
        {
          item: "Realizava a manutenção preventiva e corretiva dos equipamentos de hardware e redes",
        },
        { item: " Registrava e acompanhava solicitações de suporte, além de gerenciar os processos de garantia por meio do sistema TOTVS Protheus" },
      ],
      
    },
  ];

  return (
    <div className="w-full">
      <Timeline jobs={jobs} />
    </div>
  );
}
