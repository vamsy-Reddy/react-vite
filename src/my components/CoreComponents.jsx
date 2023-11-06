import React from "react";
import { CORE_CONCEPTS } from "../data";
import CoreConcepts from "./CoreConcepts";

export const CoreComponents = () => {
  return (
    <>
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
          {CORE_CONCEPTS.map((concepts) => (
            <CoreConcepts key={concepts.title} {...concepts} />
          ))}
        </ul>
      </section>
    </>
  );
};
