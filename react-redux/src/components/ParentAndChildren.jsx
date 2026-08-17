import React from "react";

class ParentAndChildern extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <hr />
        <h4>Children demo:</h4>
        <b>
          <p>As is:</p>
        </b>
        {children}

        <b>
          <span>Counted:</span>
          {React.Children.count(children)}
        </b>

        <b>
          <p>Mapped:</p>
        </b>
        {React.Children.map(children, (child, i) => {
          return (
            <div>
              Number #{i}:{child}
            </div>
          );
        })}

        <b>
          <p>Cloned:</p>
        </b>
        {React.Children.map(children, (child, i) => {
          const newProps = {
            className: "text-success"
          };
          const cloned = React.cloneElement(child, newProps);
          return <div>{cloned}</div>;
        })}
      </div>
    );
  }
}

export default ParentAndChildern;
