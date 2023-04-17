import React from "react";
import { Card } from "../../allComps";
import "./headline.scss";

const Headline = ({ data }) => {
  const [head1, head2, head3, ...headline] = data;
  const head = [head1, head2, head3];

  const handleCard = (e)=>{
    window.open(e)
  }

  return (
    <section className="headlineField">
      <div className="head">
        {head.map((res, index) => {
          return <Card className={"horizontal"} key={index} data={res} handleCard={handleCard} isTrending={true}/>;
        })}
      </div>
      <div className="headN">
        {headline.map((res, index) => {
          return <Card className={""} key={index} data={res} handleCard={handleCard} isTrending={true}/>;
        })}
      </div>
    </section>
  );
};

export default Headline;
