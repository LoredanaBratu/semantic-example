import React from "react";
import { Breadcrumb } from "semantic-ui-react";
import FirstEx from "./FirstEx";
import { Link } from "react-router-dom";

const BreadcrumbEx = () => (
  <Breadcrumb>
    <Breadcrumb.Section as={Link} to="/">
      home
    </Breadcrumb.Section>
    <Breadcrumb.Divider>/</Breadcrumb.Divider>
    <Breadcrumb.Section link>Registration</Breadcrumb.Section>
    <Breadcrumb.Divider>/</Breadcrumb.Divider>
    <Breadcrumb.Section active>Infos</Breadcrumb.Section>
  </Breadcrumb>
);
export default BreadcrumbEx;
