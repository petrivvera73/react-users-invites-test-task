import { FC, SVGProps } from "react";

export const ArrowIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_124)">
        <path
          d="M6.9675 5.03255C6.675 5.32505 6.675 5.79755 6.9675 6.09005L9.8775 9.00005L6.9675 11.91C6.675 12.2025 6.675 12.675 6.9675 12.9675C7.26 13.26 7.7325 13.26 8.025 12.9675L11.4675 9.52505C11.76 9.23255 11.76 8.76005 11.4675 8.46755L8.025 5.02505C7.74 4.74005 7.26 4.74005 6.9675 5.03255Z"
          fill="#3E4959"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_124">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
