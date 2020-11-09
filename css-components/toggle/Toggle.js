import React from "react";

import "./Toggle.scss";

function Toggle({
  isToggled,
  parentFirstColor,
  parentSecondColor,
  toggleColor,
}) {
  const parentClasses = `parent ${isToggled ? "newClass" : null}`;

  const childClasses = `children ${isToggled ? "newClass" : null}`;

  return (
    <>
      <div
        style={{
          backgroundColor: isToggled ? parentSecondColor : parentFirstColor,
        }}
        className={parentClasses}
      >
        <div
          style={{ backgroundColor: toggleColor }}
          className={childClasses}
        ></div>
      </div>
    </>
  );
}

export default Toggle;
