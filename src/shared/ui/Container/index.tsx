import React from "react";

const Container = (props: { children: React.ReactNode }) => {
  return <div className="container mx-auto">{props.children}</div>;
};

export default Container;
