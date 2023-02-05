import React, { useState } from "react";
import cn from "classnames/bind";
import s from "./Checkbox.module.scss";

const Checkbox = ({ name, label, value, className, onChange,...rest }) => {
  return (
    <div
      className={cn(s.checkboxWrapper)}
      onClick={() => onChange({ [name]: !value })}
    >
      <input type="checkbox" name={name} checked={value} />
      <span className={cn(s.checkboxLabel, s.unselectable)}>
        {label}
      </span>
    </div>
  );
};

export default Checkbox;
