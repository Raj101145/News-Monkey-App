import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string
  };

  render() {
    const { title, description, urlToImage, url } = this.props;

    return (
      <div className="card h-100" style={{ width: "18rem" }}>
        <img
          src={
            urlToImage
              ? urlToImage
              : "https://via.placeholder.com/400x200?text=No+Image"
          }
          className="card-img-top"
          alt="news"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/400x200?text=No+Image";
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            href={url}
            className="btn btn-sm btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
