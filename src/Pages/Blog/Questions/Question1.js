import React from 'react';

const Question1 = () => {
    return (
      <div className="my-10">
        <h1 className="mx-auto container text-2xl font-bold">
          1.Difference between SQL and NoSQL.
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
                        SQL
                      </th>
                      <th
                        scope="col"
                        className="text-xl font-bold text-white px-6 py-4"
                      >
                        NoSQL
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-[20px] font-semibold text-black">
                        RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
                      </td>
                      <td className="text-[20px] text-black font-semibold px-6 py-4 whitespace-nowrap">
                        Non-relational or distributed database system.
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-[20px] font-semibold text-black">
                        These databases have fixed or static or predefined
                        schema
                      </td>
                      <td className="text-[20px] text-black font-semibold px-6 py-4 whitespace-nowrap">
                        They have dynamic schema
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-[20px] font-semibold text-black">
                        These databases are not suited for hierarchical data
                        storage.
                      </td>
                      <td
                        colSpan="2"
                        className="text-[20px] text-black font-semibold px-6 py-4 whitespace-nowrap text-center"
                      >
                        These databases are best suited for hierarchical data
                        storage.
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-[20px] font-semibold text-black">
                        These databases are best suited for complex queries
                      </td>
                      <td
                        colSpan="2"
                        className="text-[20px] text-black font-semibold px-6 py-4 whitespace-nowrap text-center"
                      >
                        These databases are not so good for complex queries
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-[20px] font-semibold text-black">
                        Vertically Scalable
                      </td>
                      <td
                        colSpan="2"
                        className="text-[20px] text-black font-semibold px-6 py-4 whitespace-nowrap text-center"
                      >
                        Horizontally scalable
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-[20px] font-semibold text-black">
                        Follows ACID property
                      </td>
                      <td
                        colSpan="2"
                        className="text-[20px] text-black font-semibold px-6 py-4 whitespace-nowrap text-center"
                      >
                        Follows CAP(consistency, availability, partition
                        tolerance)
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-[20px] font-semibold text-black">
                        Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc
                      </td>
                      <td
                        colSpan="2"
                        className="text-[20px] text-black font-semibold px-6 py-4 whitespace-nowrap text-center"
                      >
                        Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc
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

export default Question1;