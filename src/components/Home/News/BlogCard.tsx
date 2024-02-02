import Link from "next/link";
import React from "react";

interface BlogCardProps {
  title: string;
  description: string;
  img: string;
  link: string;
  date: string;
  className: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  img,
  link,
  date,
  className,
}) => {
  return (
    <Link prefetch={false} href={link} className={className}>
      <div className="border-gray-500 min-w-full sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[370px] border-b-[4px] hover:border-red-500 rounded-none group-hover:scale-[1.02] duration-200 overflow-hidden">
        <div
          className="min-h-52 relative bg-cover bg-center flex flex-col justify-end rounded-none pl-4"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="group-hover:bg-black/50 transition-all duration-700 absolute h-full top-0 left-0 z-[1] ">
            <div className="px-4 pt-4 translate-y-24 group-hover:translate-y-[-36] transition-all ease-in-out duration-500">
              <p className="uppercase text-white/50 tracking-widest">{date}</p>
              <h3 className="text-[1.45rem] h-[70px] flex-wrap font-bold mb-2">
                {title}
              </h3>
              <div className="overflow-hidden line-clamp-4">
                <p className="text-white/75 w-[90%] text-sm font-semibold mb-4">
                  {description}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-slate-800 to-transparent"></div>
        </div>
      </div>
    </Link>
  );
};
export default BlogCard;
