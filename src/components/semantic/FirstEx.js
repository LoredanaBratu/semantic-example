import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const FirstButton = () => (
  <div className="button">
    <Button as={Link} to="/breadcrumb" style={{ marginBottom: "10px" }}>
      Click here
    </Button>

    <br />
    <Button as={Link} to="/accordion" style={{ marginBottom: "10px" }}>
      Accordion
    </Button>

    <div>
      {" "}
      <button className="ui button">Div button</button>
    </div>
  </div>
);

export default FirstButton;
