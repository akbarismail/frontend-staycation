import React from "react";

import propTypes from "prop-types";

import "./index.scss";

export default function Numbering({ style, data, current, className }) {
  const KeysOfData = Object.keys(data);

  return (
    <ol className={["stepper", className].join(" ")} style={style}>
      {KeysOfData.map((list, idx) => {
        let isActive = list === current ? "active" : "";
        if (idx + 1 === KeysOfData.length) {
          isActive = "";
          return null;
        }

        return (
          <li key={`list-${idx}`} className={[isActive].join(" ")}>
            {idx + 1}
          </li>
        );
      })}
    </ol>
  );
}

Numbering.propTypes = {
  className: propTypes.string,
  data: propTypes.object,
  current: propTypes.string,
};
