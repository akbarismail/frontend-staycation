import React from "react";

import { Fade } from "react-reveal";

export default function FeaturedImage(props) {
  return (
    <section className="container">
      <div className="container-grid sm">
        {props.data.map((item, idx) => {
          return (
            <div
              key={`FeaturedImage-${idx + 1}`}
              className={`item ${idx > 0 ? "column-5" : "column-7"} ${
                idx > 0 ? "row-1" : "row-2"
              }`}
            >
              <Fade bottom delay={300 * idx}>
                <div className="card h-100">
                  <figure className="img-wrapper">
                    <img className="img-cover" src={item.url} alt={item._id} />
                  </figure>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
