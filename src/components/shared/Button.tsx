import React, { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <div>
      <button className="btn btn-1 text-white px-5 py-3 text-lg rounded-full text-center font-semibold border-2 border-white mt-6 hover:shadow-lg transition hover:-translate-y-1 duration-300  '">
        {text}
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          className="inline-flex ml-2  "
        >
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
      </button>
    </div>
  );
};

export default Button;
