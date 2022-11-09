import React from 'react';

const Question3 = () => {
    return (
      <div className="my-10">
        <h1 className="mx-auto container text-2xl font-bold">
          3.What is the difference between javascript and NodeJS?
        </h1>
        <h1 className="mx-auto container text-xl font-semibold">Ans:</h1>
        <div className="flex flex-col container mx-auto">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-xl font-bold text-white px-6 py-4"
                      >
                        Javascript
                      </th>
                      <th
                        scope="col"
                        className="text-xl font-bold text-white px-6 py-4"
                      >
                        NodeJS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-[16px] font-semibold text-black">
                        Javascript is a programming language that is used for
                        writing scripts on the website.
                      </td>
                      <td className="text-[16px] text-black font-semibold px-6 py-4 whitespace-nowrap">
                        NodeJS is a Javascript runtime environment.
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-[16px] font-semibold text-black">
                        Javascript can only be run in the browsers.
                      </td>
                      <td className="text-[16px] text-black font-semibold px-6 py-4 whitespace-nowrap">
                        We can run Javascript outside the browser with the help
                        of NodeJS.
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-[16px] font-semibold text-black">
                        It is basically used on the client-side.
                      </td>
                      <td
                        colSpan="2"
                        className="text-[16px] text-black font-semibold px-6 py-4 whitespace-nowrap text-center"
                      >
                        It is mostly used on the server-side.
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-[16px] font-semibold text-black">
                        Javascript is capable enough to add HTML and play with
                        the DOM.
                      </td>
                      <td
                        colSpan="2"
                        className="text-[16px] text-black font-semibold px-6 py-4 whitespace-nowrap text-center"
                      >
                        Nodejs does not have capability to add HTML tags.
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-[16px] font-semibold text-black">
                        Javascript can run in any browser engine as like JS core
                        in safari and Spidermonkey in Firefox.
                      </td>
                      <td
                        colSpan="2"
                        className="text-[16px] text-black font-semibold px-6 py-4 whitespace-nowrap text-center"
                      >
                        V8 is the Javascript engine inside of node.js that
                        parses and runs Javascript.
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-[16px] font-semibold text-black">
                        Javascript is used in frontend development.
                      </td>
                      <td
                        colSpan="2"
                        className="text-[16px] text-black font-semibold px-6 py-4 whitespace-nowrap text-center"
                      >
                        Nodejs is used in server-side development.
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-[16px] font-semibold text-black">
                        Some of the javascript frameworks are RamdaJS, TypedJS,
                        etc.
                      </td>
                      <td
                        colSpan="2"
                        className="text-[16px] text-black font-semibold px-6 py-4 whitespace-nowrap text-center"
                      >
                        Some of the Nodejs modules are Lodash, express etc.
                        These modules are to be imported from npm.
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-[16px] font-semibold text-black">
                        It is the upgraded version of ECMA script that uses
                        Chrome’s V8 engine written in C++.
                      </td>
                      <td
                        colSpan="2"
                        className="text-[16px] text-black font-semibold px-6 py-4 whitespace-nowrap text-center"
                      >
                        Nodejs is written in C, C++ and Javascript.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Question3;