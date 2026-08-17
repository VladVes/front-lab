import React from "react";

const Title = props => (
  <div className="badge badge-primary text-wrap">{props.children}</div>
);

const Body = props => (
  <div className="badge badge-secondary text-wrap">{props.children}</div>
);

class Card extends React.Component {
  static Body = Body;
  static Title = Title;

  render() {
    return (
      <div className="card card-block">
        <hr />
        <h4>Name spaces</h4>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
