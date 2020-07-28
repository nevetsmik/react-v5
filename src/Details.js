import React from "react";

const Details = (props) => {
  return (
    <pre>
      <code>{JSON.stringify(props, "", 4)}</code>
    </pre>
  );
};

export default Details;
