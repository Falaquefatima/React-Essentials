import CoreConcept from './CoreConcepts/CoreConcept.jsx'
import { CORE_CONCEPTS } from "../data.js";
import Section from './Section.jsx';
export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title='Core-Concepts'>
      {/* <h2>Core-Concepts</h2> */}

      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
        {/* {CORE_CONCEPTS.map((concept) => (
                  <CoreConcept
                    key={concept.title}
                    title={concept.title}
                    description={concept.description}
                    image={concept.image}
                  />
                ))} */}
        {/* <CoreConcept
                  title={CORE_CONCEPTS[0].title}
                  description={CORE_CONCEPTS[0].description}
                  image={CORE_CONCEPTS[0].image}
                />
                <CoreConcept {...CORE_CONCEPTS[1]} />
                <CoreConcept {...CORE_CONCEPTS[2]} />
                <CoreConcept {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </Section>
  );
}
