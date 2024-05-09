import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "../api/axios";

function Branding() {
  const [categoryBanner, setCategoryBanner] = useState([]);

  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      console.log("Fetching data...");
      const response = await axios.request({
        url: "/category",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategoryBanner(response.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setCategoryBanner([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <div className="bg-white pt-10">
          <div className="text-center pb-10">
            <h1 className="font-bold text-4xl pb-4">Favorites Brand</h1>
          </div>
          {/* animate-loop-scroll */}
          <div className="flex space-x-4 md:space-x-20 overflow-hidden group pt-10 lg:pt-0 lg:m-16">
            <div className="flex space-x-10 md:space-x-20 animate-loop-scroll  group-hover:paused">
              {categoryBanner.map((item, index) => (
                <div key={index} className="flex justify-center items-center">
                  <Link to={item.link}>
                    <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110">
                      <div className="w-full h-full hover:scale-110">
                        <img src={item.category_icon} alt={item.alt} />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Branding;
