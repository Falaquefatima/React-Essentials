import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import { useState } from "react";
import Section from "./Section";


export default function Examples() {
  const [changeText, setChangeText] = useState("");

  function handleClick(selectedButton) {
    setChangeText(selectedButton);
  }

  return (
    <Section id="examples" title="Examples">
      {/* <h2>Examples</h2> */}
      <menu>
        <TabButton
          onSelect={() => handleClick("components")}
          isSelected={changeText === "components"}
        >
          Components
        </TabButton>
        <TabButton
          onSelect={() => handleClick("jsx")}
          isSelected={changeText === "jsx"}
        >
          JSX
        </TabButton>
        <TabButton
          onSelect={() => handleClick("props")}
          isSelected={changeText === "props"}
        >
          Props
        </TabButton>
        <TabButton
          onSelect={() => handleClick("state")}
          isSelected={changeText === "state"}
        >
          State
        </TabButton>
      </menu>

      {!changeText ? (
        <p>Plz select the topic</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[changeText].title}</h3>
          <p>{EXAMPLES[changeText].description}</p>
          <pre>
            <code>{EXAMPLES[changeText].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}
