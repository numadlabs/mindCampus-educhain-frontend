import React from "react";

interface IconProps {
  size: number;
  className?: string;
}

const ThreadIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className} 
  >
    <path
      d="M0.385509 0.0273438L8.62207 11.0404L0.333496 19.9945H2.19892L9.45555 12.1551L15.3187 19.9945H21.6668L12.9668 8.36196L20.6818 0.0273438H18.8164L12.1334 7.24731L6.73362 0.0273438H0.385509ZM3.12876 1.40142H6.04509L18.9232 18.6202H16.0068L3.12876 1.40142Z"
      fill="#F8F9FA"
      className="fill-white hover:fill-brand transition-colors duration-200"
    />
  </svg>
  // <svg
  //   width={size}
  //   height={size}
  //   viewBox="0 0 22 18"
  //   xmlns="http://www.w3.org/2000/svg"
  //   className={"hover"} // Add className to SVG element
  // >
  //   <path
  //     d="M18.4049 2.11743C17.0239 1.47132 15.5473 1.00175 14.0036 0.734375C13.814 1.07714 13.5925 1.53817 13.4398 1.90491C11.7988 1.65812 10.1729 1.65812 8.56208 1.90491C8.4094 1.53817 8.18288 1.07714 7.9916 0.734375C6.44621 1.00175 4.96795 1.47304 3.587 2.12085C0.801623 6.32992 0.0465528 10.4344 0.424089 14.4807C2.2715 15.8603 4.06186 16.6983 5.82201 17.2468C6.2566 16.6486 6.64419 16.0128 6.9781 15.3427C6.34216 15.1011 5.73308 14.8029 5.15756 14.4567C5.31024 14.3436 5.45959 14.2253 5.60388 14.1036C9.11411 15.7455 12.9281 15.7455 16.3964 14.1036C16.5424 14.2253 16.6917 14.3436 16.8427 14.4567C16.2655 14.8046 15.6547 15.1028 15.0188 15.3445C15.3527 16.0128 15.7386 16.6504 16.1749 17.2485C17.9367 16.7 19.7287 15.862 21.5762 14.4807C22.0191 9.79006 20.8194 5.72323 18.4049 2.11743ZM7.45632 11.9923C6.40258 11.9923 5.53843 11.0086 5.53843 9.81062C5.53843 8.61268 6.38413 7.62725 7.45632 7.62725C8.52854 7.62725 9.39266 8.61095 9.37421 9.81062C9.37587 11.0086 8.52854 11.9923 7.45632 11.9923ZM14.5439 11.9923C13.4902 11.9923 12.626 11.0086 12.626 9.81062C12.626 8.61268 13.4717 7.62725 14.5439 7.62725C15.6161 7.62725 16.4803 8.61095 16.4618 9.81062C16.4618 11.0086 15.6161 11.9923 14.5439 11.9923Z"
  //     fill={"#ffffff"}
  //     className="iconHover"
  //   />
  // </svg>
);

export default ThreadIcon;
