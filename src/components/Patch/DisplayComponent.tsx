import React from "react";

const hasHtmlTags = (text: string) => /<\/?[a-z][\s\S]*>/i.test(text);

const DisplayComponent = ({ item }: { item: string }) => {
  const shouldUseInnerHTML = hasHtmlTags(item);

  return (
    <>
      {shouldUseInnerHTML ? (
        <div
          dangerouslySetInnerHTML={{ __html: item }}
          className="html-input"
        />
      ) : (
        <li className="list-disc text-lg text-white/70">{item}</li>
      )}
    </>
  );
};

export default DisplayComponent;
