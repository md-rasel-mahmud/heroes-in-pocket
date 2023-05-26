import React from "react";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <>
    <Helmet>
      <title>Blog | Heroes in pocket</title>
    </Helmet>
      <h2 data-aos="fade-down" className="text-center text-secondary text-4xl bg-black/25 backdrop-blur-md py-4 my-3 rounded-lg font-bold">
        BLOG
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 bg-black/25 backdrop-blur-md p-2 lg:p-10 my-3 rounded-lg ">
        <div data-aos="fade-right" className="card bg-secondary text-secondary-content">
          <div className="card-body">
            <h2 className="card-title text-white">
              Q-1. What is an access token and refresh token? How do they work
              and where should we store them on the client-side?
            </h2>
            <div className="divider"></div>
            <p>
              <b>Ans:</b>
            </p>
            <p>
              Access tokens are like keys that grant access to websites or apps,
              while refresh tokens provide a way to obtain new access tokens
              when the old ones expire.
            </p>
            <b>Here is how access tokens and refresh tokens work:</b>
            <ol className="list-decimal ml-6">
              <li>
                The user logs in to the application. The application requests an
              </li>
              <li>
                access token from the authorization server. The application
              </li>
              <li>
                requests an access token from the authorization server. The
              </li>
              <li>
                application stores the access token in the browser's local
                storage
              </li>
              <li> or cookies. The user can now access protected resources.</li>
            </ol>
          </div>
        </div>
        <div data-aos="fade-left" className="card bg-secondary text-secondary-content">
          <div className="card-body">
            <h2 className="card-title text-white">
              Q-2. Compare SQL and NoSQL databases?
            </h2>
            <div className="divider"></div>
            <p>
              <b>Ans:</b> SQL databases are like organized tables with fixed
              rules, suitable for complex queries and structured data. NoSQL
              databases are flexible and adaptable, perfect for handling diverse
              and rapidly changing data in dynamic applications.
            </p>
          </div>
        </div>
        <div data-aos="fade-left" className="card bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title text-white">
              Q-3. What is express js? What is Nest JS ?
            </h2>
            <div className="divider"></div>
            <p>
              <b>Ans:</b> Express.js is a lightweight web framework for Node.js,
              while Nest.js is a scalable framework built on top of Express.js
              for building server-side applications.
            </p>
          </div>
        </div>
        <div data-aos="fade-right" className="card bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title text-white">
              Q-1. What is MongoDB aggregate and how does it work ?
            </h2>
            <div className="divider"></div>
            <p>
              <b>Ans:</b> MongoDB aggregate is a tool that helps perform complex
              data queries and calculations by combining different operations in
              a streamlined manner. It allows for efficient data processing and
              analysis within the MongoDB database.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
