import React from "react";
import "./styles.css";

interface TabsProps {
  count: number;
  currentStep: number;
  onTabClick: (step: number) => void;
}

const Tabs = ({ count, currentStep, onTabClick }: TabsProps) => {
  return (
    <div className="tabs">
      {[...Array(count)].map((_tab, index) => (
        <React.Fragment key={index}>
          <button
            onClick={() => onTabClick(index)}
            className={`circle ${index < currentStep ? "active" : ""}`}
          >
            {index + 1}
          </button>
          {index !== count - 1 && (
            <div className={`line ${index < currentStep ? "active" : ""}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Tabs;
