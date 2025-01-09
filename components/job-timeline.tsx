import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function JobTimeline() {
  const steps = [
    {
      type: "Experiência",
      jobs: [
        {
          company_name: "Neway",
          company_time: "set/2022 - atual",
          position: "Desenvolvedor Full Stack",
          activities:
            "Corrijo bugs, implemento novas funcionalidades e presto suporte aos sistemas da empresa.",
        },
        {
          company_name: "Split Risk",
          company_time: "Set/2022 - Jan/2024",
          position: "Estágio em Desenvolvimento",
          activities:
            "Auxiliava outros desenvolvedores na criação de landing pages e prestava suporte na prototipagem de projetos web utilizando Figma.",
        },
        {
          company_name: "Online Shopping",
          company_time: "Set/2021 - Ago/2022",
          position: "Assistente de Manutenção",
          activities:
            "Fornecia assistência técnica aos clientes e colaboradores da empresa.",
        },
      ],
    },
  ];

  return <Timeline steps={steps} />;
}
