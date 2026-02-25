import React from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const index = () => {
  return (
    <section className="flex flex-col items-center min-h-screen bg-gradient-to-r from-black to-blue-900">
      <div className="font-bold text-center text-white">
        <h1 className="pt-20 text-4xl font-bold text-center md:text-5xl">
          Videos
        </h1>
      </div>

      {/* Grilla de videos responsive */}
      <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {/* Video 1 */}
        <div className="flex items-center justify-center">
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
            }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/z1kyd9Y58Dk?si=lkMRsiP1C7o1vGB9"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        {/* Video 2 */}
        <div className="flex items-center justify-center">
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
            }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Ng1RF-jG6Qw?si=svCKOkQ0fOvv3V37"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
