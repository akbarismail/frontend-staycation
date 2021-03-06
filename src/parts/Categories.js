import React from "react";

import Button from "elements/Button";
import { Fade } from "react-reveal";

export default function Categories(props) {
  return props.data.map((category, idx1) => {
    return (
      <section className="container" key={`category-${idx1}`}>
        <Fade bottom>
          <h4 className="mb-3">{category.name}</h4>
          <div className="container-grid">
            {category.items.length === 0 ? (
              <div className="row">
                <div className="col-auto align-items-center">
                  There is no property at this category
                </div>
              </div>
            ) : (
              category.items.map((item, idx2) => {
                return (
                  <Fade
                    bottom
                    delay={300 * idx2}
                    key={`category-${idx1}-item-${idx2}`}
                  >
                    <div className="item column-3 row-1">
                      <div className="card">
                        {item.isPopular && (
                          <div className="tag">
                            Popular{" "}
                            <span className="font-weight-light">Choice</span>
                          </div>
                        )}
                        <figure className="img-wrapper">
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="img-cover"
                          />
                        </figure>
                        <div className="meta-wrapper">
                          <Button
                            type="link"
                            href={`/details/${item._id}`}
                            className="stretched-link d-block text-gray-900"
                          >
                            <h5>{item.name}</h5>
                          </Button>
                          <span className="text-gray-300 font-weigth-light">
                            {item.city}, {item.country}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Fade>
                );
              })
            )}
          </div>
        </Fade>
      </section>
    );
  });
}
