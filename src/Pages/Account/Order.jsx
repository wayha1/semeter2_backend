import React from "react";

function Order() {
  return (
    <>
      <div className="bg-[#F7EFF2] h-auto w-full">
        <div className="px-15 py-8 flex justify-center">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4 bg-white shadow-lg rounded-xl ">
            <div className="col-span-4 sm:col-span-3">
              <div className=" p-6">
                <div className="flex flex-col items-center pt-10">
                  <img
                    src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                    alt="profile"
                  ></img>
                  <h1 className="text-xl font-bold">Mateo</h1>
                  <p className="text-gray-700">General User</p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <a
                      href="/login"
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                    >
                      Sign Out
                    </a>
                    <a
                      href="/"
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                    >
                      Edit Profile
                    </a>
                  </div>
                </div>
                <hr className="my-6" />
                <div className="flex flex-col">
                  <span className="text-gray-800 uppercase font-bold tracking-wider mb-2 text-center hover:text-pink-400">
                    <a href="/profile">General Profile</a>
                  </span>
                  <span className="text-gray-800 uppercase font-bold tracking-wider mb-2 text-center hover:text-pink-400">
                    <a href="/billing">Billing & Payment</a>
                  </span>
                  <span className="text-gray-800 uppercase font-bold tracking-wider mb-2 text-center hover:text-pink-400">
                    <a href="/order">Order History</a>
                  </span>
                </div>
                <vt className="my-6" />
              </div>
            </div>
            <div className="pl-10 col-span-4 sm:col-span-9">
              <div className="px-4 py-10 sm:px-6"></div>
              <div className="pb-5">
                {/* Column Box */}
                <h1 className=" pt-5 text-4xl font-bold text-gray-900">
                  Order history
                </h1>
                <p className="pt-5 text-md text-gray-500">
                  Check the status of recent orders, manage returns, and
                  discover similar products.
                </p>
              </div>
              <div>
                <div className="border rounded-lg p-5">
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="flex flex-col">
                        <div className="font-bold"> Order number</div>
                        <div> WU9247358259</div>
                      </div>
                      <div className="flex flex-col pl-8">
                        <div className="font-bold "> Date placed</div>
                        <div> Jul 6, 2023</div>
                      </div>
                      <div className="flex flex-col pl-8">
                        <div className="font-bold"> Total amount</div>
                        <div> $80.00</div>
                      </div>
                    </div>
                    <div className="flex justify-center space-x-2 ">
                      <button className="bg-white border hover:bg-pink-500 py-2 px-4 rounded">
                        View order
                      </button>
                      <button className=" bg-white border hover:bg-gray-500 py-2 px-4 rounded">
                        {" "}
                        View invoice
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Product Part */}
              <div className="border rounded-lg p-5 flex">
                <div className="flex flex-col">
                  <div className="flex justify-center p-5">
                    <img
                      className="w-26 h-20"
                      src="https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/sunscreen/hydrating-sheer-sunscreen-broad-spectrum-spf-30-for-face-body/2022/2022-10/hydrating-sheer-sunscreen-front-3floz_700x875-v1.jpg?rev=152f66edae8a44a3a159a80aa7621cea&w=500&hash=36DDEAC8D9EA2D683BA733BA9D6E4E79"
                    ></img>
                  </div>
                  <div className="flex space-x-2 items-center pt-10">
                    <div>
                      <svg
                        className="w-5 h-5 flex justify-center"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0,0,256,256"
                      >
                        <g
                          fill="/29d800"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                        >
                          <g transform="scale(8.53333,8.53333)">
                            <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM21.707,12.707l-7.56,7.56c-0.188,0.188 -0.442,0.293 -0.707,0.293c-0.265,0 -0.52,-0.105 -0.707,-0.293l-3.453,-3.453c-0.391,-0.391 -0.391,-1.023 0,-1.414c0.391,-0.391 1.023,-0.391 1.414,0l2.746,2.746l6.853,-6.853c0.391,-0.391 1.023,-0.391 1.414,0c0.391,0.391 0.391,1.023 0,1.414z"></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <p className="items-center text-sm">
                      Delivered on July 12, 2023
                    </p>
                  </div>
                </div>
                <div className="flex flex-col pl-8">
                  <div>
                    <div className="pt-5 font-bold text-lg">
                      Hydrating Sunscreen SPF 30
                    </div>
                    <div className="pt-6">
                      <p>Developed with dermatologists, CeraVe Hydrating</p>
                      <p>
                        Sheer Sunscreen BroadSpectrum SPF 30 combines mineral
                      </p>
                      <p>and chemical sun filters to help effectively</p>
                      <p>
                        effectively reflect and absorb the sun's damaging rays.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-5 pl-10">$20.00</div>
              </div>
              {/* Product Part */}
              <div className="border rounded-lg p-5 flex">
                <div className="flex flex-col">
                  <div className="flex justify-center p-5">
                    <img
                      className="w-26 h-20"
                      src="https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/sunscreen/hydrating-sheer-sunscreen-broad-spectrum-spf-30-for-face-body/2022/2022-10/hydrating-sheer-sunscreen-front-3floz_700x875-v1.jpg?rev=152f66edae8a44a3a159a80aa7621cea&w=500&hash=36DDEAC8D9EA2D683BA733BA9D6E4E79"
                    ></img>
                  </div>
                  <div className="flex space-x-2 items-center pt-10">
                    <div>
                      <svg
                        className="w-5 h-5 flex justify-center"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0,0,256,256"
                      >
                        <g
                          fill="/29d800"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                        >
                          <g transform="scale(8.53333,8.53333)">
                            <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM21.707,12.707l-7.56,7.56c-0.188,0.188 -0.442,0.293 -0.707,0.293c-0.265,0 -0.52,-0.105 -0.707,-0.293l-3.453,-3.453c-0.391,-0.391 -0.391,-1.023 0,-1.414c0.391,-0.391 1.023,-0.391 1.414,0l2.746,2.746l6.853,-6.853c0.391,-0.391 1.023,-0.391 1.414,0c0.391,0.391 0.391,1.023 0,1.414z"></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <p className="items-center text-sm">
                      Delivered on July 12, 2023
                    </p>
                  </div>
                </div>
                <div className="flex flex-col pl-8">
                  <div>
                    <div className="pt-5 font-bold text-lg">
                      Hydrating Sunscreen SPF 30
                    </div>
                    <div className="pt-6">
                      <p>Developed with dermatologists, CeraVe Hydrating</p>
                      <p>
                        Sheer Sunscreen BroadSpectrum SPF 30 combines mineral
                      </p>
                      <p>and chemical sun filters to help effectively</p>
                      <p>
                        effectively reflect and absorb the sun's damaging rays.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-5 pl-10">$20.00</div>
              </div>
              {/* Product Part */}
              <div className="border rounded-lg p-5 flex">
                <div className="flex flex-col">
                  <div className="flex justify-center p-5">
                    <img
                      className="w-26 h-20"
                      src="https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/sunscreen/hydrating-sheer-sunscreen-broad-spectrum-spf-30-for-face-body/2022/2022-10/hydrating-sheer-sunscreen-front-3floz_700x875-v1.jpg?rev=152f66edae8a44a3a159a80aa7621cea&w=500&hash=36DDEAC8D9EA2D683BA733BA9D6E4E79"
                    ></img>
                  </div>
                  <div className="flex space-x-2 items-center pt-10">
                    <div>
                      <svg
                        className="w-5 h-5 flex justify-center"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0,0,256,256"
                      >
                        <g
                          fill="/29d800"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                        >
                          <g transform="scale(8.53333,8.53333)">
                            <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM21.707,12.707l-7.56,7.56c-0.188,0.188 -0.442,0.293 -0.707,0.293c-0.265,0 -0.52,-0.105 -0.707,-0.293l-3.453,-3.453c-0.391,-0.391 -0.391,-1.023 0,-1.414c0.391,-0.391 1.023,-0.391 1.414,0l2.746,2.746l6.853,-6.853c0.391,-0.391 1.023,-0.391 1.414,0c0.391,0.391 0.391,1.023 0,1.414z"></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <p className="items-center text-sm">
                      Delivered on July 12, 2023
                    </p>
                  </div>
                </div>
                <div className="flex flex-col pl-8">
                  <div>
                    <div className="pt-5 font-bold text-lg">
                      Hydrating Sunscreen SPF 30
                    </div>
                    <div className="pt-6">
                      <p>Developed with dermatologists, CeraVe Hydrating</p>
                      <p>
                        Sheer Sunscreen BroadSpectrum SPF 30 combines mineral
                      </p>
                      <p>and chemical sun filters to help effectively</p>
                      <p>
                        effectively reflect and absorb the sun's damaging rays.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-5 pl-10">$20.00</div>
              </div>
              {/* Product Part */}
              <div className="border rounded-lg p-5 flex">
                <div className="flex flex-col">
                  <div className="flex justify-center p-5">
                    <img
                      className="w-26 h-20"
                      src="https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/sunscreen/hydrating-sheer-sunscreen-broad-spectrum-spf-30-for-face-body/2022/2022-10/hydrating-sheer-sunscreen-front-3floz_700x875-v1.jpg?rev=152f66edae8a44a3a159a80aa7621cea&w=500&hash=36DDEAC8D9EA2D683BA733BA9D6E4E79"
                    ></img>
                  </div>
                  <div className="flex space-x-2 items-center pt-10">
                    <div>
                      <svg
                        className="w-5 h-5 flex justify-center"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0,0,256,256"
                      >
                        <g
                          fill="/29d800"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                        >
                          <g transform="scale(8.53333,8.53333)">
                            <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM21.707,12.707l-7.56,7.56c-0.188,0.188 -0.442,0.293 -0.707,0.293c-0.265,0 -0.52,-0.105 -0.707,-0.293l-3.453,-3.453c-0.391,-0.391 -0.391,-1.023 0,-1.414c0.391,-0.391 1.023,-0.391 1.414,0l2.746,2.746l6.853,-6.853c0.391,-0.391 1.023,-0.391 1.414,0c0.391,0.391 0.391,1.023 0,1.414z"></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <p className="items-center text-sm">
                      Delivered on July 12, 2023
                    </p>
                  </div>
                </div>
                <div className="flex flex-col pl-8">
                  <div>
                    <div className="pt-5 font-bold text-lg">
                      Hydrating Sunscreen SPF 30
                    </div>
                    <div className="pt-6">
                      <p>Developed with dermatologists, CeraVe Hydrating</p>
                      <p>
                        Sheer Sunscreen BroadSpectrum SPF 30 combines mineral
                      </p>
                      <p>and chemical sun filters to help effectively</p>
                      <p>
                        effectively reflect and absorb the sun's damaging rays.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-5 pl-10">$20.00</div>
              </div>
              <div className="flex justify-center p-5">
                {/* Pagination */}
                <nav class="inline-flex items-center p-1 rounded bg-white space-x-2">
                  <a
                    class="p-1 rounded border text-black bg-white hover:text-white hover:bg-pink-600 hover:border-pink-600"
                    href="/"
                  >
                    <svg
                      class="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                      />
                    </svg>
                  </a>
                  <p class="text-gray-500">Page 1 of 10</p>
                  <a
                    class="p-1 rounded border text-black bg-white hover:text-white hover:bg-pink-600 hover:border-pink-600"
                    href="/"
                  >
                    <svg
                      class="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
