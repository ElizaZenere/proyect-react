import React, { useState } from "react";
import { PrimerComponente } from './PrimerComponente';
import {News} from './News';

function TabContent(props) {
    return <div>{props.content}</div>;
  }
export const Pestania = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
      {
        label: "Calculadora",
        body:  <TabContent content={<PrimerComponente />}  />
      },
      {
        label: "Noticias de Tesla",
        body: <TabContent content={<News/>} />
      },
    
    ];
  
    return (
      <div className="tabs">
        <div className="tab-buttons">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={activeTab === index ? "active" : ""}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-content">{tabs[activeTab].body}</div>
      </div>
    );
  }
