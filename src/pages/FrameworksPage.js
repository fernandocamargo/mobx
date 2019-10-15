import { string } from "prop-types";
import { observer, useObservable } from "mobx-react-lite";
import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import { Highlight } from "../components";

import items from "./items";

const FrameworksPage = ({ className }) => {
  const ref = useRef();
  const store = useObservable({
    keywords: "",
    items,
    setKeywords(keywords) {
      store.keywords = keywords;
    },
    getItems() {
      const { keywords, items } = store;
      const pattern = new RegExp(keywords, "gi");

      return items.filter(
        ({ title, description }) =>
          !keywords || (title.match(pattern) || description.match(pattern))
      );
    }
  });
  const frameworks = store.getItems();
  const onSubmit = event => event.preventDefault();
  const onChange = ({ target: { value } }) => store.setKeywords(value);
  const renderItem = ({ title, description }) => (
    <dl key={title}>
      <dt>
        <Highlight fragment={store.keywords}>{title}</Highlight>
      </dt>
      <dd>
        <Highlight fragment={store.keywords}>{description}</Highlight>
      </dd>
    </dl>
  );

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <section className={className}>
      <h1>Frameworks</h1>
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Search by keywords</legend>
          <dl>
            <dt>
              <label htmlFor="keywords">Keywords</label>
            </dt>
            <dd>
              <input
                type="text"
                id="keywords"
                value={store.keywords}
                onChange={onChange}
                placeholder="Type your keywords here"
                ref={ref}
              />
            </dd>
          </dl>
        </fieldset>
      </form>
      {!!store.keywords && !frameworks.length && (
        <p>
          <span>No results found for the keyword(s): "</span>
          <strong>{store.keywords}</strong>
          <span>".</span>
        </p>
      )}
      {frameworks.map(renderItem)}
    </section>
  );
};

FrameworksPage.propTypes = {
  className: string.isRequired
};

FrameworksPage.defaultProps = {};

const withStyle = component => styled(component)`
  legend,
  label {
    display: none;
  }

  input[type="text"] {
    background-color: #efe9f4;
    color: #1f2d3d;
    border: none;
    font-family: "Archivo", sans-serif;
    outline: 0;
    padding: 1rem;
    transition: background-color 0.15s linear;
    width: calc(100% - 2rem);

    &:hover,
    &:focus {
      background-color: #eadeda;
    }
  }

  form {
    & ~ * {
      margin-top: 2rem;
    }

    & ~ p {
      font-family: "Vollkorn", serif;
      font-size: 1.5rem;
      text-align: center;

      strong {
        border-bottom: dotted 1px #c3423f;
        color: #c3423f;
        display: inline-block;
        font-weight: bold;
      }
    }

    & ~ dl {
      dt {
        color: #91aec1;
        font-family: "Archivo", sans-serif;
        font-size: 1.5rem;
      }

      dd {
        color: #998888;
        font-family: "Source Code Pro", monospace;
        text-align: justify;
      }
    }
  }
`;

export default withStyle(observer(FrameworksPage));
