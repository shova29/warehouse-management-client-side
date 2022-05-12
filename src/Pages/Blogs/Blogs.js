import React from "react";
import blog1 from "../../Assets/Images/blogs/blog-1.png";
import blog2 from "../../Assets/Images/blogs/blog-2.png";
import blog3 from "../../Assets/Images/blogs/blog-3.png";

const Blogs = () => {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Latest <span className="text-rose-600">Articles</span>
        </h2>

        <div className="flex flex-wrap mb-6">
          <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img src={blog1} className="w-full" alt={blog1} />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </div>
          </div>

          <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
            <h5 className="text-lg font-bold mb-3">
              Difference between javascript and nodejs
            </h5>

            <p className="text-gray-500 text-justify">
              Javascript is such a programing language that's used for writing
              scripts on the web site. On the opposite hand, NodeJS is a runtime
              environment of Javascript. Javascript will solely be run within
              the browsers. On the contrary, Javascript can run outside the
              browser with the assistance of NodeJS. Javascript is fundamentally
              used on the client-side. On the other hand, NodeJS is generally
              used on the server-side. Javascript is competent adequate to
              feature markup language and play with the DOM. On the opposite
              hand, Nodejs doesn't have competence to feature markup language
              tags. A number of the JS frameworks ars RamdaJS, TypedJS, etc. A
              number of the NodeJS modules are Lodash, express etc. These
              modules are to be imported from npm.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap mb-6">
          <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img src={blog2} className="w-full" alt={blog2} />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </div>
          </div>

          <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
            <h5 className="text-lg font-bold mb-3">
              When should you use nodejs and when should you use mongodb
            </h5>
            <p className="text-black-500 text-justify">
              API Application:{" "}
              <span className="text-gray-500">
                NodeJs is additionally a good alternative for creating an API
                application with each relative and non-relational databases.
              </span>
            </p>
            <p className="mt-2 text-black-500 text-justify">
              Real-Time Applications:{" "}
              <span className="text-gray-500">
                Due to the event-driven and asynchronous nature, NodeJs is nice
                at building applications like electronic messaging,
                notifications delivery, live streaming and collaboration tools
                which known as real-time applications.
              </span>
            </p>
            <p className="mt-2 text-black-500 text-justify">
              Micro-Services:{" "}
              <span className="text-gray-500">
                Node may also be accustomed build micro-services as an
                architectural approach supported building an application as a
                set of tiny services. Every micro-service has its individual
                data model and manages its individual data.
              </span>
            </p>
            <span></span>
          </div>
        </div>

        <div className="flex flex-wrap mb-6">
          <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img src={blog3} className="w-full" alt={blog3} />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </div>
          </div>

          <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
            <h5 className="text-lg font-bold mb-3">
              Differences between sql and nosql databases.
            </h5>
            <p className="mt-2 text-gray-500 text-justify">
              Databases are categorized as Relational Database Management
              System. On the opposite hand, NoSQL databases are categorized as
              distribute or non-relational database system.
            </p>
            <p className="mt-2 text-gray-500 text-justify">
              SQL databases have static or fixed or predefined schema. But,
              NoSQL databases have dynamic schema.
            </p>
            <p className="mt-2 text-gray-500 text-justify">
              SQL databases show data in sort of tables therefore it's referred
              to as table-based info. However in NoSQL databases show data as
              collection of key-value pair, documents, graph databases or as
              wide-column stores.
            </p>
            <p className="mt-2 text-gray-500 text-justify">
              SQL databases are vertically scalable; whereas NoSQL databases are
              horizontally scalable.
            </p>
            <p className="mt-2 text-gray-500 text-justify">
              SQL databases are best fitted to complicated queries. On the
              opposite hand, NoSQL databases aren't therefore sensible for
              complicated queries as a result of these aren't as powerful as SQL
              queries.
            </p>
            <p className="mt-2 text-gray-500 text-justify">
              SQL databases aren't best fitted to hierarchical data storage. On
              the opposite hand, NoSQL databases are best fitted to databases
              data storage.
            </p>
            <p className="text-gray-500"></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
