import React from "react";
import Layout from "../../components/layout";

const login = () => {
  return (
    <>
      <Layout>
        <h1 className="text-center">Login</h1>
        <div className="flex justify-center mt-5">
          <div className="w-full max-w-sm">
            <form className="bg-white rounded shadow-md px-8 pb-8 mb-4">
              <div className="mb-4 mt-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="bg-white shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  id="email"
                  type="email"
                  placeholder="Email usuario"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="bg-white shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  id="password"
                  type="password"
                  placeholder="Password usuario"
                />
              </div>

              <input
                type= "submit"
                className="bg-orange-600 w-full mt-5 p-2 text-white uppercase hover:bg-orange-800"
                value="iniciar sesion"
              />
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default login;
