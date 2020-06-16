import React, { Fragment } from "react";
import Search from "../../components/users/search";
import Users from "../../components/users/Users";

export const Home = () => {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};
