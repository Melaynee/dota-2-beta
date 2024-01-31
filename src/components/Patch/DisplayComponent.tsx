import React from "react";

const hasHtmlTags = (text: string) => /<\/?[a-z][\s\S]*>/i.test(text);

const DisplayComponent = ({ item }: { item: string }) => {
  const shouldUseInnerHTML = hasHtmlTags(item);

  return (
    <div>
      {shouldUseInnerHTML ? (
        <div dangerouslySetInnerHTML={{ __html: item }} />
      ) : (
        <li className="list-disc text-white/70">{item}</li>
      )}
    </div>
  );
};

export default DisplayComponent;
