import React from "react";
import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";
import en from "javascript-time-ago/locale/en.json";
import "./card.scss";

TimeAgo.addDefaultLocale(en);

const Card = ({
  className,
  data,
  handleCard,
  isCategory,
  isTrending,
  isSearch,
}) => {
  if (isTrending) {
    return (
      <div
        className={`card ${className}`}
        onClick={() => {
          handleCard(data?.newsSearchUrl);
        }}
      >
        <img src={data?.image.url} alt="thumbcard" />
        <div className="meta">
          <span>
            <h6>{data?.image.provider[0].name} -</h6>
          </span>
          <h4>{data?.name}</h4>
        </div>
      </div>
    );
  } else if (isCategory) {
    return (
      <div
        className={`card ${className}`}
        onClick={() => {
          window.open(data?.url)
        }}
      >
        <img
          src={
            data.image
              ? data.image.thumbnail.contentUrl
              : data.provider[0].image
              ? data.provider[0].image.thumbnail.contentUrl
              : ""
          }
          alt="thumbcard"
        />
        <div className="meta">
          <span>
            <h6>
              {data?.provider[0].name} -{" "}
              <ReactTimeAgo
                date={new Date(data?.datePublished)}
                locale="en-US"
                timeStyle="round"
              />
            </h6>
          </span>
          <h4>{data?.name}</h4>
        </div>
      </div>
    );
  } else if (isSearch) {
    return (
      <div
        className={`card ${className}`}
        onClick={() => {
          handleCard(data?.url);
        }}
      >
        <img src={data.image?.contentUrl} alt="thumbcard" />
        <div className="meta">
          <span>
            <h6>
              {data?.provider[0].name} -{" "}
              <ReactTimeAgo
                date={new Date(data?.datePublished)}
                locale="en-US"
                timeStyle="round"
              />
            </h6>
          </span>
          <h4>{data?.name}</h4>
        </div>
      </div>
    );
  }
};

export default Card;
