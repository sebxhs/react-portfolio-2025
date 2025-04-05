import React from "react";

function TwoColumnLayout({
  leftContent,
  rightContent,
  containerClassName,
  leftClassName,
  rightClassName,
}) {
  return (
    <div className={containerClassName}>
      <div className={leftClassName}>{leftContent}</div>
      <div className={rightClassName}>{rightContent}</div>
    </div>
  );
}

export default TwoColumnLayout;
