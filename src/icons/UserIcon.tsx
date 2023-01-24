import { FC, SVGProps } from "react";

export const UserIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_197)">
        <path
          d="M8 7.99999C9.47333 7.99999 10.6667 6.80666 10.6667 5.33332C10.6667 3.85999 9.47333 2.66666 8 2.66666C6.52666 2.66666 5.33333 3.85999 5.33333 5.33332C5.33333 6.80666 6.52666 7.99999 8 7.99999ZM8 9.33332C6.22 9.33332 2.66666 10.2267 2.66666 12V12.6667C2.66666 13.0333 2.96666 13.3333 3.33333 13.3333H12.6667C13.0333 13.3333 13.3333 13.0333 13.3333 12.6667V12C13.3333 10.2267 9.78 9.33332 8 9.33332Z"
          fill="#828B97"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_197">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
