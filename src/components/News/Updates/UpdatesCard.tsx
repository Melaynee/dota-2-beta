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
      <div className="text-white/70 w-[1020px] p-5 mx-auto bg-[#0B0B0B] border-l-2 border-[#1F3242]">
        <div className="ml-5 tracking-wide pb-5">
          <h6 className="uppercase tracking-widest text-sm">{date}</h6>
          <h3 className="capitalize my-2 text-white text-2xl font-semibold">
            {title}
          </h3>
          <p className="my-2">{description}</p>
          <p className="mt-6 mb-2 ">{summary}</p>
          {updates.map((update, index) => {
            return (
              <li key={index} className="ml-4 my-2">
                {update}
              </li>
            );
          })}
          {clarification && <p className="mt-6 mb-2 ">{clarification}</p>}
          {gifts !== undefined &&
            gifts.map((gift, index) => {
              return (
                <li key={index} className="ml-4 my-2">
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
