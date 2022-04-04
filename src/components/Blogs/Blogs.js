import React from "react";

const Blogs = () => {
  return (
    <div>
      <p className="question">What is CONTEXT API?</p>
      <p className="answer">
        In react we pass data from the parent component to a child component.
        And it's sometime creates a lot of problem to drill through all the
        child component to get a specific child. Here the context API kicks in.
        This context API allows us to create a communication network between two
        or more components. We basically make the desire data available for the
        child component by wrapping all the child components by the context
        provider.
      </p>

      <p className="question">What are SEMANTIC TAGS?</p>
      <p className="answer">
        In react we pass data from the parent component to a child component.
        And it's sometime creates a lot of problem to drill through all the
        child component to get a specific child. Here the context API kicks in.
        This context API allows us to create a communication network between two
        or more components. We basically make the desire data available for the
        child component by wrapping all the child components by the context
        provider.
      </p>
    </div>
  );
};

export default Blogs;
