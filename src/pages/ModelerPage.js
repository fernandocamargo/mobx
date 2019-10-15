import { string } from "prop-types";
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import BpmnJS from "bpmn-js/dist/bpmn-modeler.development.js";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

const diagram =
  "https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn";

const viewer = new BpmnJS();

const ModelerPage = ({ className }) => {
  const ref = useRef();

  useEffect(() => {
    window
      .fetch(diagram)
      .then(response => response.text())
      .then(xml =>
        viewer.importXML(xml, () => {
          viewer
            .attachTo(ref.current)
            .get("canvas")
            .zoom("fit-viewport");
        })
      );

    return () => viewer.detach();
  }, []);

  return (
    <section className={className}>
      <h1>Modeler</h1>
      <div ref={ref} />
    </section>
  );
};

ModelerPage.propTypes = {
  className: string.isRequired
};

ModelerPage.defaultProps = {};

const withStyle = component => styled(component)`
  & > div {
    height: 100vh;
    width: calc(100vw - 10rem);
  }
`;

export default withStyle(ModelerPage);
