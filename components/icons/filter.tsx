import React from "react";

export function FilterIcon({ className }: { className: string }) {
  return (
    <svg
      {...{ className }}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0467 12.7133C10.0467 13.12 9.77998 13.6533 9.43998 13.86L8.5 14.4667C7.62667 15.0067 6.41333 14.4 6.41333 13.32V9.75334C6.41333 9.28 6.14667 8.67334 5.87333 8.34001L3.31331 5.64667C2.97331 5.30667 2.70667 4.70668 2.70667 4.30001V2.75334C2.70667 1.94667 3.31334 1.34001 4.05334 1.34001H12.9467C13.6867 1.34001 14.2933 1.94667 14.2933 2.68667V4.16667C14.2933 4.70667 13.9533 5.38001 13.62 5.71334"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2133 11.0133C12.3916 11.0133 13.3467 10.0582 13.3467 8.88C13.3467 7.7018 12.3916 6.74666 11.2133 6.74666C10.0351 6.74666 9.08 7.7018 9.08 8.88C9.08 10.0582 10.0351 11.0133 11.2133 11.0133Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7467 11.4133L13.08 10.7467"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
