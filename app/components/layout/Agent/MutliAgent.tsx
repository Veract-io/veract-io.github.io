'use client'
import React, { useEffect, useState } from "react";
import AgentTitle from "./AgentTitle";
import AgentRobot from "./AgentRobot";

export default function MutliAgent() {
  const [loaded, setLoaded] = useState(false);
    const [agentsList , setAgentsList] = useState<any[]>([]);
  useEffect(() => {
    setLoaded(true);
    setAgentsList([
        {
            id: 1,
            name: "Client Request Intake Agent",
            image: "/Images/Agent/agent-1.svg",
            position: "top-[3%] left-[-3%]"
        },
        {
            id: 2,
            name: "Resource Allocation Agent",
            image: "/Images/Agent/agent-2.svg",
            position: "bottom-[35%] left-[-3%]"
        },
        {
            id: 3,  
            name: "Time Tracking & Billing Agent",
            image: "/Images/Agent/agent-3.svg",
            position: "bottom-[59%] left-[23%]"
        },
        {
            id: 4,
            name: "Client Communication Agent",
            image: "/Images/Agent/agent-4.svg",
            position: "top-[6%] right-[35%]"
        },
        {
            id: 5,
            name: "Proposal & Documentation Agent",
            image: "/Images/Agent/agent-5.svg",
            position: "bottom-[17%] left-[43%]"
        },
        {
            id: 6,
            name: "Issue Escalation Agent",
            image: "/Images/Agent/agent-6.svg",
            position: "top-[5%] right-[7%]"
        },
        {
            id: 7,
            name: "Project Health Monitoring Agent",
            image: "/Images/Agent/agent-7.svg",
            position: "top-[43%] right-[12%]"
        },
        {
            id: 8,
            name: "Performance Reporting Agent",
            image: "/Images/Agent/agent-8.svg",
            position: "bottom-[5%] right-[5%]"
        }
    ])
  }, []);
  return (
    loaded && (
      <div className="relative w-full h-max flex flex-col items-center justify-center pb-[22.781rem]">
        <AgentTitle title="Multi Agent" title_description="Optimize Operations Using Intelligent Collaborative Agents" description="By coordinating multiple AI agents, your everyday business tasks become smoother, faster, and more efficient"/>
        <div>
            <div className="relative w-[66.219rem] h-[55.719rem]">
            <img src="/Images/Agent/multi-agent-layer.svg" alt="MultiAgent" className="absolute z-[1000]"/>
            {agentsList.map((agent) => (
                <div key={agent.id} className={`absolute ${agent.position}`}>
                    <AgentRobot agent={agent}/>
                </div>
            ))}
            </div>
        </div>
      </div>
    )
  );
}


