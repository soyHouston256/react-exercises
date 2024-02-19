import { useState } from "react";
import './tabs.css'


interface TabContent {
    title: string;
    label: string;
    content: JSX.Element;
    description: string;
}

export default function Tabs({tabContent}:{tabContent: TabContent[]}){
    
    const [currentItem, setCurrentItem] = useState(0);

    function handleTabChange(index: number){
        setCurrentItem(index);
    }

   

    return (
        <div className="wrapper-tabs">
            <div className="headding">
                { 
                    tabContent.map((tab: TabContent, index: number) => (
                        <div 
                        onClick={()=> handleTabChange(index)} 
                        key={tab.label} 
                        className={`tab-item ${currentItem === index ? 'active': ''}`}>
                            <span>{tab.title}</span>
                        </div>
                    ))
                }
            </div>
            <div className="content">
                <h3>
                    {
                        tabContent[currentItem] && tabContent[currentItem].content
                    }
                </h3>
                
                <p>
                    {tabContent[currentItem] && tabContent[currentItem].description}
                </p>
            </div>
        </div>
    )
}