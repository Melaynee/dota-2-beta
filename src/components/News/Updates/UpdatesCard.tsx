import React from "react";

interface UpdatesCardProps {
  date: string;
  title: string;
  summary: string;
  description?: string;
  updates: string[];
  clarification?: string;
  gifts?: string[];
}

const UpdatesCard = ({
  date,
  title,
  description,
  summary,
  updates,
  clarification,
  gifts,
}: UpdatesCardProps) => {
  return (
    <div className="py-10">
      <div className="text-white/70 sm:w-[620px] md:w-[740px] lg:w-[1020px] p-5 mx-auto bg-[#0B0B0B] border-l-2 border-[#1F3242]">
        <div className="sm:ml-5 tracking-wide pb-5 text-ellipsis">
          <h6 className="uppercase tracking-widest text-xs sm:text-sm">
            {date}
          </h6>
          <h3 className="capitalize my-2 text-white text-lg sm:text-2xl font-semibold">
            {title}
          </h3>
          <p className="my-2 text-sm sm:text-base">{description}</p>
          <p className="mt-6 mb-2 text-sm sm:text-base ">{summary}</p>
          {updates.map((update, index) => {
            return (
              <li key={index} className="sm:ml-4 my-2 text-sm sm:text-base">
                {update}
              </li>
            );
          })}
          {clarification && (
            <p className="mt-6 mb-2 text-sm sm:text-base ">{clarification}</p>
          )}
          {gifts !== undefined &&
            gifts.map((gift, index) => {
              return (
                <li key={index} className="sm:ml-4 my-2 text-sm sm:text-base">
                  {gift}
                </li>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default UpdatesCard;
