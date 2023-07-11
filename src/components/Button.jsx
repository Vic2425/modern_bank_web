import React from "react";

const Button = ({ styles }) => {
  return (
    <buton
      type="button"
      className={`py-4 px-6 bg-b;ue-gradient font-poppins font-mediumtext-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} cursor-pointer`}
    >
      Get Started
    </buton>
  );
};

export default Button;
