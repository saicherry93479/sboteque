// @ts-ignore
import { useEffect, useState } from "react";
import Pagination from "../Components/Pagination";

const ProductList = () => {
  const [data, setData] = useState<any>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(8);

  useEffect(() => {
    // axios.get('data.json')
    //     .then(res => {
    //             setData(res.data);
    //             setLoading(false);
    //         })
    //         .catch(() => {
    //             alert('There was an error while retrieving the data')
    //         })
    setData([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,26,27,28,29,30,31,32,33,,34,35
    ]);
  }, []);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <div className=" w-full flex-col lg:flex-row w-full px-6 lg:px-12  xl:px-52   py-[24px]  md:py-[24px] lg:py-[24px] bg-white text-white text-[#392a48] mb-[60px] lg:mb-[80px]">
      <Filter></Filter>
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-6 lg:my-12 gap-y-12">
        {currentRecords.map((d:any) => (
          <a
            href="/product"
            className=" w-auto group relative cursor-pointer   rounded-md  "
          >
            <div className="relative overflow-hidden rounded-t-md">
              <a href="/product">
                <img
                  src="https://images.unsplash.com/photo-1617288991572-9e8755a88209?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxpbmRpYW4lMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Product 1"
                  className="w-full h-[300px] sm:h-[500px] md:h-[430px] lg:h-[300px] transform object-cover transition-transform duration-300 hover:scale-105"
                />
              </a>
              <button
                id="addbutton"
                className="addButton absolute bottom-2 hover:bg-[#3A1E8C] right-2 hidden  rounded-full bg-[#392A48] p-[10px] px-[20px]  text-white transition transition-all duration-300  group-hover:opacity-100 md:block md:opacity-0"
              >
                Quick Add
              </button>
              <button className="absolute bottom-2 right-2 flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-white md:hidden ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#392A48"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </button>
            </div>
            <h3 className="mt-4  text-lg font-semibold text-black">
              Product Name {d}
            </h3>
          </a>
        ))}
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProductList;

const Filter = () => {
  return (
    <>
      <div className="flex gap-8 mr-auto">
        <div className="relative">
          <details className="group w-full [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
              <span className="text-sm font-medium"> Categories </span>
              <span className="transition group-open:-rotate-180">
                <DownArrow></DownArrow>
              </span>
            </summary>
            <div className="z-50  group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
              <div className="w-[50vw] lg:w-96 rounded border border-gray-200 bg-white">
                <header className="flex items-center justify-between p-4">
                  <span className="text-sm  w-fit text-gray-700">
                    {" "}
                    0 Selected{" "}
                  </span>
                  <button
                    type="button"
                    className="text-sm text-gray-900 underline underline-offset-4"
                  >
                    Reset
                  </button>
                </header>
                <ul className="space-y-1 border-t border-gray-200 p-4">
                  <li>
                    <label
                      htmlFor="FilterInStock"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterInStock"
                        className="size-5 rounded border-gray-300"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {" "}
                        In Stock (5+){" "}
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="FilterPreOrder"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterPreOrder"
                        className="size-5 rounded border-gray-300"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {" "}
                        Pre Order (3+){" "}
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="FilterOutOfStock"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterOutOfStock"
                        className="size-5 rounded border-gray-300"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {" "}
                        Out of Stock (10+){" "}
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </div>
      </div>
    </>
  );
};

const DownArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};
