import { string, arrayOf, shape, node } from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = ({ className, items }) => {
  const renderItem = ({ url, label }) => (
    <li key={url}>
      <NavLink to={url} exact>
        {label}
      </NavLink>
    </li>
  );

  return (
    <header className={className}>
      <h3>Browse through:</h3>
      <nav>
        <ul>{items.map(renderItem)}</ul>
      </nav>
    </header>
  );
};

Navigation.propTypes = {
  className: string.isRequired,
  items: arrayOf(
    shape({
      url: string.isRequired,
      label: node.isRequired
    }).isRequired
  )
};

Navigation.defaultProps = {
  items: []
};

const withStyle = component => styled(component)`
  background-color: #374149;
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.25);
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  h3 {
    display: none;
  }

  ul {
    display: flex;
    margin: 0 5rem;
  }

  a {
    color: #fff;
    display: block;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    outline: 0;
    padding: 1rem;
    position: relative;
    text-decoration: none;
    transition: color 0.25s linear;

    &:hover,
    &:focus {
      color: #01a7b5;
    }

    &:after {
      background-color: #01a7b5;
      bottom: 0;
      content: "";
      display: block;
      height: 5px;
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.25s linear;
      width: 0;
    }

    &.active:after {
      width: 100%;
    }
  }
`;

export default withStyle(Navigation);
