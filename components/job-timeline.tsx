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
          activities: "Sou responsável por corrigir bugs, implementar novas funcionalidades e prestar suporte aos sistemas da empresa."
        },
        { 
          company_name: "Split Risk",
          company_time: "Set/2022 - Jan/2024",
          position: "Desenvolvedor Full Stack",
          activities: "Sou responsável por corrigir bugs, implementar novas funcionalidades e prestar suporte aos sistemas da empresa."
        },
        { 
          company_name: "Online Shopping",
          company_time: "Set/2021 - Ago/2022",
          position: "Assitente de Manutenção de Hardware",
          activities: "Sou responsável por corrigir bugs, implementar novas funcionalidades e prestar suporte aos sistemas da empresa."
        },
      ],
    },
  ];

  return <Timeline steps={steps} />;
}
