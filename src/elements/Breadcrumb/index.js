import React from "react";
import propTypes from "prop-types";
import Button from "../Button";

export default function Breadcrumb(props) {
  return (
    <nav aria-label="breadcrumb">
      <ol className={[`breadcrumb`, props.outerClassName].join(" ")}>
        {props.data.map((item, idx) => {
          return (
            <li
              key={`breadcrumb-${idx}`}
              className={`breadcrumb-item${
                idx === props.data.length - 1 ? " active" : ""
              }`}
            >
              {idx === props.data.length - 1 ? (
                item.pageTitle
              ) : (
                <Button type="link" href={item.pageHref}>
                  {item.pageTitle}
                </Button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  data: propTypes.array,
  outerClassName: propTypes.string,
};
