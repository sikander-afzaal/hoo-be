"use client";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useWindowSize } from "usehooks-ts";
import React, { useState, useRef } from "react";
import InputField from "src/components/home/InputField";
import SelectMenu from "src/components/home/SelectMenu";
import ToggleSwitch from "src/components/home/ToggleSwitch";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [paused, setPaused] = useState(true);
  const { width } = useWindowSize();
  const [formData, setFormData] = useState({
    handle: "",
    email: "",
    type: "creator",
    recieve: false,
  });
  const toggleVideo = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
      setPaused(false);
    } else {
      setPaused(true);
      videoRef.current?.pause();
    }
  };
  return (
    <div className="w-full my-20 flex justify-start items-center flex-col">
      <div className="flex justify-start items-center flex-col w-[90%] max-w-[900px]">
        <section className="lg:flex-row flex-col flex w-full items-center justify-between gap-8 ">
          <div className="relative isolate w-full max-w-[372px]  overflow-hidden group rounded-[2rem]">
            <video
              ref={videoRef}
              onClick={toggleVideo}
              src="/video.mp4"
              playsInline
              className="cursor-pointer"
            ></video>
            <button
              onClick={toggleVideo}
              className={`absolute left-1/2 top-1/2 z-20 grid h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2  place-items-center rounded-full border border-solid border-white bg-primary ${
                !paused
                  ? "opacity-0 group-hover:opacity-100 transition-all duration-500"
                  : ""
              }`}
            >
              {paused ? (
                <Image width={30} height={30} src="/play-ico.svg" alt="ico" />
              ) : (
                <Image width={30} height={30} src="/pause-ico.svg" alt="ico" />
              )}
            </button>
          </div>
          <div className="flex justify-start items-center flex-col w-full max-w-[430px] border border-solid border-paleGray rounded-[32px] px-3 sm:px-6">
            <div className="flex justify-center text-center py-4 border-b border-solid border-paleGray items-center flex-col gap-2">
              <p className="text-xl sm:text-[28px]">🚀</p>
              <h3 className="text-black leading-[1.3] font-bold text-xl sm:text-[28px]">
                become a member & <br /> launch your creator hub.
              </h3>
            </div>
            <div className="flex py-4 justify-start items-center flex-col text-center gap-2">
              <p className="text-sm font-bold text-black">- build your hub -</p>
              <p className="text-sm font-semibold text-black">
                sign up for one month free
              </p>
            </div>
            <form className="pb-4 flex justify-start flex-col items-start w-full gap-4 ">
              <InputField
                value={formData.handle}
                handler={(e) => {
                  setFormData((prev) => {
                    if (prev.handle.includes("@")) {
                      return {
                        ...prev,
                        handle: `${e.target.value}`,
                      };
                    } else {
                      return {
                        ...prev,
                        handle: `@${e.target.value}`,
                      };
                    }
                  });
                }}
                ico="/insta.svg"
                label="your instagram handle"
              />
              <InputField
                value={formData.email}
                handler={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                }}
                note="email is private and used to verify new users"
                label="add email"
              />
              <SelectMenu
                value={formData.type}
                label="user type"
                handler={(value) =>
                  setFormData((prev) => ({ ...prev, type: value }))
                }
                options={["creator", "brand", "agency/manager"]}
              />
              <ToggleSwitch
                handler={() =>
                  setFormData((prev) => ({ ...prev, recieve: !prev.recieve }))
                }
                label="i want to receive exclusive updates and content from hoo.be"
                value={formData.recieve}
              />
              <p className="text-[#aaa] font-semibold text-center self-center text-xs">
                working with an agency or group of talent? <br /> email us at{" "}
                <a
                  href="mailto:talent@hoo.be"
                  target="blank"
                  className="text-primary underline"
                >
                  talent@hoo.be
                </a>
              </p>
              <button
                type="submit"
                onSubmit={(e) => e.preventDefault()}
                className="bg-primary px-8 h-[50px] transition-all duration-100 border-0 text-base font-bold hover:bg-[#1096a5] text-white w-full rounded-full flex justify-center items-center gap-3"
              >
                <Image
                  src="/thunder.svg"
                  width={24}
                  height={24}
                  alt="thunder-ico"
                />{" "}
                apply now
              </button>
            </form>
          </div>
        </section>
        {width > 1024 ? (
          <section className="flex mt-20 border-t border-solid border-paleGray pt-20 justify-center items-center gap-10">
            <Image src="/img1.webp" width={277} height={400} alt="img1" />
            <Image src="/img2.webp" width={277} height={400} alt="img2" />
            <Image src="/img3.webp" width={277} height={400} alt="img3" />
          </section>
        ) : (
          <section className="w-full mt-10 border-t border-solid border-paleGray pt-10">
            <Splide
              options={{
                width: "100%",
                perPage: 1,
                perMove: 1,
                drag: true,
                arrows: false,
                pagination: true,
              }}
            >
              <SplideSlide>
                <Image src="/img1.webp" width={477} height={400} alt="img1" />
              </SplideSlide>
              <SplideSlide>
                <Image src="/img2.webp" width={477} height={400} alt="img2" />
              </SplideSlide>
              <SplideSlide>
                <Image src="/img3.webp" width={477} height={400} alt="img3" />
              </SplideSlide>
            </Splide>
          </section>
        )}
      </div>
    </div>
  );
}
