import React from "react";
import OurTeam from "./OurTeam";

function AboutUs() {
  return (
    <div className="min-h-screen bg-pink-100 w-full">
      <div class="sm:flex items-center max-w-screen-xl">
        <div class="sm:w-1/2 p-10">
          <div class="image object-center text-center">
            <img src="https://akcdn.detik.net.id/visual/2022/05/20/wajah-wajah-duta-merek-skincare-lokal-yang-memikat-foto-kolase-twitter-dan-instagram_11.jpeg?w=480&q=90" />
          </div>
        </div>
        <div class="sm:w-1/2 p-5">
          <div class="text">
            <span class="text-gray-500 border-b-2 border-pink-400 uppercase">
              About us
            </span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span class="text-pink-400">Our Website</span>
            </h2>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              commodi doloremque, fugiat illum magni minus nisi nulla numquam
              obcaecati placeat quia, repellat tempore voluptatum.
            </p>
          </div>
        </div>
      </div>
      {/* why choose us */}
      <section class="">
        <div class="py-12 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
              <h2 class="font-heading mb-4 bg-pink-100 text-pink-600 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                Why choose us?
              </h2>
              <p class="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Discover Our Trusted Skincare Products for Radiant Results.
                <br />
                Your Beauty, Our Commitment.
              </p>
              <p class="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                We Master the Art of Seamless Tax Solutions Across Borders. Your
                Financial Health is Our Priority - Elevating Prosperity with
                Precision and Personalized Care.
              </p>
            </div>

            <div class="pt-16">
              <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">
                      <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Global Tax Expertise
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    Our team excels in navigating the complexities of taxation
                    across various countries, ensuring your financial compliance
                    is seamless and hassle-free.
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">
                      <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Customer-Centric Approach
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    We prioritize your financial health and well-being. Our
                    dedicated team is committed to providing personalized care,
                    assisting you in managing cashflows effectively and
                    fostering a long-lasting partnership built on trust.
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">
                      <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Precision and Accuracy
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    With a meticulous attention to detail, we guarantee
                    precision in handling your taxation needs. Our expertise
                    ensures that every financial aspect is managed accurately,
                    minimizing risks and optimizing your financial outcomes.
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">
                      <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Reliable Support
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    Choose us for the reliable support you deserve. Our
                    commitment goes beyond just managing taxes; we stand by you
                    as a trustworthy partner, offering guidance and support to
                    enhance your financial journey.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
      <OurTeam/>
    </div>
  );
}

export default AboutUs;
