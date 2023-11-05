import {CORE_CONCEPTS,EXAMPLES} from "./data.js"
import Header from "./my components/Header.jsx"
import CoreConcepts from "./my components/CoreConcepts.jsx"
import TabButton from "./my components/TabButton.jsx"
import { useState } from "react"
import _ from "lodash"

function App() {
const[activeTab, setActiveTab] = useState('')

  const handleDataChange = (event) => {
    setActiveTab(event)
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {/* The standard way

          <CoreConcepts title={CORE_CONCEPTS[0].title} image={CORE_CONCEPTS[0].image} description={CORE_CONCEPTS[0].description}/>
          <CoreConcepts title={CORE_CONCEPTS[1].title} image={CORE_CONCEPTS[1].image} description={CORE_CONCEPTS[1].description}/>
          <CoreConcepts title={CORE_CONCEPTS[2].title} image={CORE_CONCEPTS[2].image} description={CORE_CONCEPTS[2].description}/>
          <CoreConcepts title={CORE_CONCEPTS[3].title} image={CORE_CONCEPTS[3].image} description={CORE_CONCEPTS[3].description}/> */}

          {/* // using the spread operator

          <CoreConcepts {...CORE_CONCEPTS[0]}/>
          <CoreConcepts {...CORE_CONCEPTS[1]}/>
          <CoreConcepts {...CORE_CONCEPTS[2]}/>
          <CoreConcepts {...CORE_CONCEPTS[3]}/> */}

          {/* using the map function */}
          {CORE_CONCEPTS.map((concepts) => <CoreConcepts key={concepts.title} {...concepts}/>)}
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() =>handleDataChange('Components')} isselected={activeTab === 'Components'}>Components</TabButton>
            <TabButton onClick={() =>handleDataChange('JSX')} isselected={activeTab === 'JSX'}>JSX</TabButton>
            <TabButton onClick={() =>handleDataChange('Props')} isselected={activeTab=== 'Props'}>Props</TabButton>
            <TabButton onClick={() =>handleDataChange('State')} isselected={activeTab==="State"}>State</TabButton>
          </menu>
          {_.isEmpty(activeTab) ? <p>Click on any tab to see the example</p> : 
          <div id="tab-content">
            <h3>
              {EXAMPLES[activeTab]?.title}
            </h3>
            <p>
              {EXAMPLES[activeTab]?.description}
            </p>
            <pre>
              <code>
                {EXAMPLES[activeTab]?.code}
              </code>
            </pre>
          </div>
          }
        </section>
      </main>
    </div>
  );
}

export default App;