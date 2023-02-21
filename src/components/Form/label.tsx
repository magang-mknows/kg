import React from "react";
interface label {
  title: string;
  classNameLabel?: any;
}
export default function Label(props: label) {
  const { title, classNameLabel } = props;
  return (
    <div>
      <label htmlFor="email" className={classNameLabel}>
        {title}
      </label>
    </div>
  );
}
