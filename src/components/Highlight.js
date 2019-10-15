import { string } from "prop-types";
import React, { useMemo } from "react";
import styled from "styled-components";

const Highlight = ({ className, fragment, children }) => {
  const pattern = useMemo(() => new RegExp(fragment, "gi"), [fragment]);
  const __html = useMemo(
    () => children.replace(pattern, match => `<strong>${match}</strong>`),
    [children, pattern]
  );

  return !!fragment ? (
    <span className={className} dangerouslySetInnerHTML={{ __html }} />
  ) : (
    children
  );
};

Highlight.propTypes = {
  className: string.isRequired,
  fragment: string.isRequired,
  children: string.isRequired
};

Highlight.defaultProps = {};

const withStyle = component => styled(component)`
  strong {
    background-color: #ffff02;
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.25);
    color: #000;
  }
`;

export default withStyle(Highlight);
