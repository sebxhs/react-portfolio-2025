import React from "react";

function Section({
  title,
  content,
  image,
  imageAlt,
  className,
  titleClassName,
  contentClassName,
  imageClassName,
}) {
  return (
    <section className={className}>
      {title && <h2 className={titleClassName}>{title}</h2>}
      {content && <p className={contentClassName}>{content}</p>}
      {image && (
        <figure>
          <img
            src={image}
            alt={imageAlt || "Section illustration"}
            className={imageClassName}
          />
        </figure>
      )}
    </section>
  );
}

export default Section;
