import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="qnaContainer">
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
        Semantic tags are meaning full tags. A website holds various type of
        content, to recognize the content more efficiently browsers uses these
        tags. Such as h1, h2,h3, section, p and more. These helps browsers to
        optimize the search engine more accurately. And also helps the user to
        get there desire information more easily.
      </p>
    </div>
  );
};

export default Blogs;
