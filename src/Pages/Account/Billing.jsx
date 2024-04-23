import React from "react";
import card2 from "../../asset/All card.png";
import card1 from "../../asset/debit card.png";
function Billing() {
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
                    alt="profile"
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
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
                  Billing & Payments
                </h1>
                <p className="pt-5 text-md text-gray-500">
                  Securely manage your payments and invoices with our
                  user-friendly platform.
                </p>
                <div className="w-full mx-auto pt-10 text-gray-700">
                  <div className="w-full pt-1 pb-5">
                    <div className="mb-3 flex -mx-2">
                      <div className="px-2">
                        <label
                          for="type1"
                          className="flex items-center cursor-pointer"
                        >
                          <input
                            type="radio"
                            className="form-radio h-5 w-5 text-pink-500"
                            name="type"
                            id="type1"
                            checked
                          />
                          <img src={card2} className="h-8 ml-3" />
                        </label>
                      </div>
                      <div className="px-2">
                        <label
                          for="type2"
                          className="flex items-center cursor-pointer"
                        >
                          <input
                            type="radio"
                            className="form-radio h-5 w-5 text-pink-500"
                            name="type"
                            id="type2"
                          />
                          <img src={card1} className="h-8 ml-3" />
                        </label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="font-bold text-sm mb-2 ml-1">
                        Name on card
                      </label>
                      <div>
                        <input
                          className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-pink-500 transition-colors"
                          placeholder="Park Jimin"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="font-bold text-sm mb-2 ml-1">
                        Card number
                      </label>
                      <div>
                        <input
                          className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-pink-500 transition-colors"
                          placeholder="0000 0000 0000 0000"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="mb-3 -mx-2 flex items-end">
                      <div className="px-2 w-1/2">
                        <label className="font-bold text-sm mb-2 ml-1">
                          Expiration date
                        </label>
                        <div>
                          <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-pink-500 transition-colors cursor-pointer">
                            <option value="01"> January</option>
                            <option value="02"> February</option>
                            <option value="03"> March</option>
                            <option value="04"> April</option>
                            <option value="05"> May</option>
                            <option value="06"> June</option>
                            <option value="07"> July</option>
                            <option value="08"> August</option>
                            <option value="09"> September</option>
                            <option value="10"> October</option>
                            <option value="11"> November</option>
                            <option value="12"> December</option>
                          </select>
                        </div>
                      </div>
                      <div className="px-2 w-1/2">
                        <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-pink-500 transition-colors cursor-pointer">
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                          <option value="2028">2028</option>
                          <option value="2029">2029</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-10">
                      <label className="font-bold text-sm mb-2 ml-1">
                        Security code
                      </label>
                      <div>
                        <input
                          className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-pink-500 transition-colors"
                          placeholder="000"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <button className="block w-full bg-pink-500 hover:bg-pink-700 focus:bg-pink-700 text-white rounded-lg px-3 py-3 font-semibold">
                        <div className="mdi mdi-lock-outline mr-1"></div> Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Billing;
