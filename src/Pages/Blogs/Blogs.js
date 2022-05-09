import React from "react";

const Blogs = () => {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Latest articles
        </h2>

        <div className="flex flex-wrap mb-6">
          <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img src="" className="w-full" alt="" />
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

            <p className="text-gray-500">
              Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
              vulputate. Ut vulputate est non quam dignissim elementum. Donec a
              ullamcorper diam.
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
              <img src="" className="w-full" alt="" />
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
            <p className="text-gray-500">
              Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
              orci, nec ornare metus semper sed. Integer volutpat ornare erat
              sit amet rutrum.
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
              <img src="" className="w-full" alt="" />
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
            <p className="text-gray-500">
              Curabitur tristique, mi a mollis sagittis, metus felis mattis
              arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa
              volutpat feugiat. Donec.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
