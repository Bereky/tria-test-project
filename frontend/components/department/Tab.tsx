"use client";

import React, { useState, ReactElement } from "react";

interface TabProps {
  label: string;
  children: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ label, children }) => {
  return (
    <div className="hidden" data-label={label}>
      {children}
    </div>
  );
};

interface TabsProps {
  children: ReactElement<TabProps>[];
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    newActiveTab: string
  ) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="w-full relative grow bg-zinc-00 text-sm">
      <div className="md:w-1/2 w-full h-auto flex flex-row  border-b- border-sky-500 text-lime-50 rounded-sm gap-2">
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label
                ? "border-lime-0 text-gra-800  text-sky-50 border-b bg-sky-600 hover:bg-sky-500 font-medium"
                : "text-sky-500 border-b border-sky-500 hover:bg-sky-100"
            } flex-1 p-1 w-32 md:h-10  rounded-sm bg-sky-50 text-center`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="h-auto py-5 my-0 overflow-auto w-full bg-blac px-1 bg-sky-50 min-h-36">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export { Tabs, Tab };
