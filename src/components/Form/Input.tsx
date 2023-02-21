import React from "react";
import Label from "./label";
interface Form {
  name: string;
  title: string;
  classNameLabel?: any;
  classNameInput?: any;
  placeholder?: string;
}
//"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
export default function index(props: Form) {
  const { name, classNameLabel, classNameInput, title } = props;
  return (
    <div>
      <Label title={title} classNameLabel={classNameLabel} />
      <input type="email" name={name} className={classNameInput} placeholder="name@company.com" />
    </div>
  );
}
