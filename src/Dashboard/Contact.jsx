// ContactUsDashboard.js

import React from "react";
import DashboardLayout from "./DashboardLayout";

const ContactUsDashboard = () => {
  return (
    <>
      <DashboardLayout>
        <div className="p-4 block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
          <div className="w-full mb-1">
            <div className="mb-4">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                Feedback
              </h1>
            </div>
            <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 ">
              <div className="flex items-center mb-4 sm:mb-0">
                <form className="sm:pr-3" action="/" method="GET">
                  <label for="products-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-48 mt-1 sm:w-64 xl:w-96">
                    <input
                      type="text"
                      name="email"
                      id="contact-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                      placeholder="Search for contact"
                    />
                  </div>
                </form>
                <div className="flex items-center w-full sm:justify-end">
                  <div className="flex pl-2 space-x-1">
                    <a
                      href="/src"
                      className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="/"
                      className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100  "
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="/"
                      className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="/"
                      className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <button
                type="button"
                id="deleteProductButton"
                data-drawer-target="drawer-delete-product-default"
                data-drawer-show="drawer-delete-product-default"
                aria-controls="drawer-delete-product-default"
                data-drawer-placement="right"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-800 "
              >
                Export
                <svg
                  fill="currentcolor"
                  className="w-5 h-5 ml-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.25 15.75C14.84 15.75 14.5 16.09 14.5 16.5V18C14.5 18.69 13.94 19.25 13.25 19.25H5.75C5.06 19.25 4.5 18.69 4.5 18V6C4.5 5.31 5.06 4.75 5.75 4.75H9V9.5C9 9.91 9.34 10.25 9.75 10.25H14.5V11.5C14.5 11.91 14.84 12.25 15.25 12.25C15.66 12.25 16 11.91 16 11.5V9.5C16 9.3 15.92 9.11 15.78 8.97L10.28 3.47C10.14 3.33 9.95 3.25 9.75 3.25H5.75C4.23 3.25 3 4.48 3 6V18C3 19.52 4.23 20.75 5.75 20.75H13.25C14.77 20.75 16 19.52 16 18V16.5C16 16.09 15.66 15.75 15.25 15.75ZM10.5 5.81L13.44 8.75H10.5V5.81ZM20.94 14.29C20.9 14.38 20.85 14.46 20.78 14.53L17.78 17.53C17.63 17.68 17.44 17.75 17.25 17.75C17.06 17.75 16.87 17.68 16.72 17.53C16.43 17.24 16.43 16.76 16.72 16.47L18.44 14.75H9.75C9.34 14.75 9 14.41 9 14C9 13.59 9.34 13.25 9.75 13.25H18.44L16.72 11.53C16.43 11.24 16.43 10.76 16.72 10.47C17.01 10.18 17.49 10.18 17.78 10.47L20.78 13.47C20.85 13.54 20.9 13.62 20.94 13.71C21.02 13.89 21.02 14.1 20.94 14.28V14.29Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow">
                <table className="min-w-full divide-y divide-gray-200 table-fixed ">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th scope="col" className="p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all"
                            aria-describedby="checkbox-1"
                            type="checkbox"
                            className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-pink-300 dark:focus:ring-pink-600 "
                          />
                          <label for="checkbox-all" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-md font-medium text-left text-gray-500 uppercase "
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-md font-medium text-left text-gray-500 uppercase "
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-md font-medium text-left text-gray-500 uppercase "
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-md font-medium text-left text-gray-500 uppercase "
                      >
                        Feedback
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-md font-medium text-left text-gray-500 uppercase "
                      >
                        Sent
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-md font-medium text-left text-gray-500 uppercase "
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            aria-describedby="checkbox-1"
                            type="checkbox"
                            className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-pink-300 "
                            checked={false}
                          />
                          <label className="sr-only">checkbox</label>
                        </div>
                      </td>
                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap ">
                        id
                      </td>
                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap ">
                        email
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        name
                      </td>
                      <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-md ">
                        Feedback
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        sent
                      </td>

                      <td className="p-4 space-x-2 whitespace-nowrap">
                        <button
                          type="button"
                          id="updateProductButton"
                          data-drawer-target="drawer-update-product-default"
                          data-drawer-show="drawer-update-product-default"
                          aria-controls="drawer-update-product-default"
                          data-drawer-placement="right"
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-800 "
                        >
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                            <path
                              fillRule="evenodd"
                              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type="button"
                          id="deleteProductButton"
                          data-drawer-target="drawer-delete-product-default"
                          data-drawer-show="drawer-delete-product-default"
                          aria-controls="drawer-delete-product-default"
                          data-drawer-placement="right"
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 "
                        >
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between ">
          <div className="flex items-center mb-4 sm:mb-0">
            <a
              href="/"
              className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="/"
              className="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <span className="text-sm font-normal text-gray-500 ">
              Showing{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                1-0
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                0
              </span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="/"
              className="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-pink-200 hover:bg-pink-600 "
            >
              <svg
                className="w-5 h-5 mr-1 -ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Previous
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-pink-400 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-400 dark:focus:ring-pink-800"
            >
              Next
              <svg
                className="w-5 h-5 ml-1 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div
          id="drawer-update-product-default"
          className="fixed top-0 right-0 z-40 w-full h-screen max-w-md p-4 overflow-y-auto transition-transform translate-x-full bg-white dark:bg-gray-800"
          tabindex="-1"
          aria-labelledby="drawer-label"
          aria-hidden="true"
        >
          <h5
            id="drawer-label"
            className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase "
          >
            Update Product
          </h5>
          <button
            type="button"
            data-drawer-dismiss="drawer-update-product-default"
            aria-controls="drawer-update-product-default"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <form action="/">
            <div className="space-y-4">
              <div>
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="title"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                  value="Education Dashboard"
                  placeholder="Type product name"
                  required=""
                />
              </div>
              <div>
                <label
                  for="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Technology
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                >
                  <option selected="">Flowbite</option>
                  <option value="RE">React</option>
                  <option value="AN">Angular</option>
                  <option value="VU">Vue JS</option>
                </select>
              </div>
              <div>
                <label
                  for="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                  value="2999"
                  placeholder="$149"
                  required=""
                />
              </div>
              <div>
                <label
                  for="Feedback"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Feedback
                </label>
                <textarea
                  id="Feedback"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                  placeholder="Enter event Feedback here"
                >
                  Start developing with an open-source library of over 450+ UI
                  components, sections, and pages built with the utility
                  classNamees from Tailwind CSS and designed in Figma.
                </textarea>
              </div>
              <div>
                <label
                  for="discount"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Discount
                </label>
                <select
                  id="discount"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                >
                  <option selected="">No</option>
                  <option value="5">5%</option>
                  <option value="10">10%</option>
                  <option value="20">20%</option>
                  <option value="30">30%</option>
                  <option value="40">40%</option>
                  <option value="50">50%</option>
                </select>
              </div>
            </div>
            <div className="bottom-0 left-0 flex justify-center w-full pb-4 mt-4 space-x-4 sm:absolute sm:px-4 sm:mt-0">
              <button
                type="submit"
                className="w-full justify-center text-white bg-pink-400 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-400 dark:focus:ring-pink-800"
              >
                Update
              </button>
              <button
                type="button"
                className="w-full justify-center text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-1 -ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Delete
              </button>
            </div>
          </form>
        </div>

        <div
          id="drawer-delete-product-default"
          className="fixed top-0 right-0 z-40 w-full h-screen max-w-md p-4 overflow-y-auto transition-transform translate-x-full bg-white dark:bg-gray-800"
          tabindex="-1"
          aria-labelledby="drawer-label"
          aria-hidden="true"
        >
          <h5
            id="drawer-label"
            className="inline-flex items-center text-sm font-semibold text-gray-500 uppercase "
          >
            Delete item
          </h5>
          <button
            type="button"
            data-drawer-dismiss="drawer-delete-product-default"
            aria-controls="drawer-delete-product-default"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <svg
            className="w-10 h-10 mt-8 mb-4 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h3 className="mb-6 text-lg text-gray-500 ">
            Are you sure you want to delete this product?
          </h3>
          <a
            href="/"
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2.5 text-center mr-2 dark:focus:ring-red-900"
          >
            Yes, I'm sure
          </a>
          <a
            href="/"
            className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2.5 text-center dark:bg-gray-800  dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            data-drawer-hide="drawer-delete-product-default"
          >
            No, cancel
          </a>
        </div>

        <div
          id="drawer-create-product-default"
          className="fixed top-0 right-0 z-40 w-full h-screen max-w-md p-4 overflow-y-auto transition-transform translate-x-full bg-white dark:bg-gray-800"
          tabindex="-1"
          aria-labelledby="drawer-label"
          aria-hidden="true"
        >
          <h5
            id="drawer-label"
            className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase "
          >
            New Product
          </h5>
          <button
            type="button"
            data-drawer-dismiss="drawer-create-product-default"
            aria-controls="drawer-create-product-default"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <form action="/">
            <div className="space-y-4">
              <div>
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="title"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                  placeholder="Type product name"
                  required=""
                />
              </div>

              <div>
                <label
                  for="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                  placeholder="$2999"
                  required=""
                />
              </div>
              <div>
                <label
                  for="category-create"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Technology
                </label>
                <select
                  id="category-create"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                >
                  <option selected="">Select category</option>
                  <option value="FL">Flowbite</option>
                  <option value="RE">React</option>
                  <option value="AN">Angular</option>
                  <option value="VU">Vue</option>
                </select>
              </div>
              <div>
                <label
                  for="Feedback"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Feedback
                </label>
                <textarea
                  id="Feedback"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                  placeholder="Enter event Feedback here"
                ></textarea>
              </div>
              <div>
                <label
                  for="discount-create"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Discount
                </label>
                <select
                  id="discount-create"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                >
                  <option selected="">No</option>
                  <option value="5">5%</option>
                  <option value="10">10%</option>
                  <option value="20">20%</option>
                  <option value="30">30%</option>
                  <option value="40">40%</option>
                  <option value="50">50%</option>
                </select>
              </div>
              <div className="bottom-0 left-0 flex justify-center w-full pb-4 space-x-4 md:px-4 md:absolute">
                <button
                  type="submit"
                  className="text-white w-full justify-center bg-pink-400 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-400 dark:focus:ring-pink-800"
                >
                  Add product
                </button>
                <button
                  type="button"
                  data-drawer-dismiss="drawer-create-product-default"
                  aria-controls="drawer-create-product-default"
                  className="inline-flex w-full justify-center text-gray-500 items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-pink-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 -ml-1 sm:mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </DashboardLayout>
    </>
  );
};

export default ContactUsDashboard;
