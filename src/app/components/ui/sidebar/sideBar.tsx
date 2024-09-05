import Image from "next/image";
import React from "react";
import Line from "./line/line";
import { siderbaritems } from "@/api/sidebar";
import Link from "next/link";


const SideBar = () => {
  return (
    <div className=" bg-white/5 px-10 rounded-xl py-7">
      <section className="flex gap-5 flex-col items-center">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/profile/pp.png"
            width={100}
            height={100}
            alt="Main Image"
          />
        </div>

        <p className="text-white "> Hi, Mary</p>
      </section>

      <div className="py-6">
        <Line />
      </div>

      <section className="text-white">
        {siderbaritems.map((sidebarheading, index) => {
          return (
            <div className="mt-5">
              <div> {sidebarheading.heading} </div>

              {sidebarheading.sidebaritems.map((sidebaritems, index) => (
                <Link href={sidebaritems.link} key={index}>
                  {" "}
                  <div className="flex items-center gap-3 text-sm my-5 text-white/70 hover:text-white cursor-pointer ">
                    {sidebaritems.icon}
                    {sidebaritems.label}
                  </div>{" "}
                </Link>
              ))}
            </div>
          );
          
        })}

      </section>

      <button className="bg-cream rounded-full px-5 py-2 mt-5">Sign Out</button>
    </div>
  );
};

export default SideBar;
