import React, { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import _ from "lodash";
import { Tabs } from "./Tabs";

export const Examples = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleDataChange = (event) => {
    setActiveTab(event);
  };

  const renderButtons = () => {
    return (
      <>
        <TabButton
          onClick={() => handleDataChange("Components")}
          isselected={activeTab === "Components"}
        >
          Components
        </TabButton>
        <TabButton
          onClick={() => handleDataChange("JSX")}
          isselected={activeTab === "JSX"}
        >
          JSX
        </TabButton>
        <TabButton
          onClick={() => handleDataChange("Props")}
          isselected={activeTab === "Props"}
        >
          Props
        </TabButton>
        <TabButton
          onClick={() => handleDataChange("State")}
          isselected={activeTab === "State"}
        >
          State
        </TabButton>
      </>
    );
  };
  return (
    <>
      <section id="examples">
        <h2>Examples</h2>
        <Tabs buttons={renderButtons()}>
        {_.isEmpty(activeTab) ? (
          <p>Click on any tab to see the example</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[activeTab]?.title}</h3>
            <p>{EXAMPLES[activeTab]?.description}</p>
            <pre>
              <code>{EXAMPLES[activeTab]?.code}</code>
            </pre>
          </div>
        )}
        </Tabs>
      </section>
    </>
  );
};
