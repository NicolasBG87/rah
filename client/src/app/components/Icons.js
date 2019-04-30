import React from "react";

export const arrowLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#e5e0f5" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

export const arrowRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="#e5e0f5" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

export const arrowDoubleLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
        fill="#e5e0f5"
      />
      <path fill="none" d="M24 24H0V0h24v24z" />
    </svg>
  );
};

export const arrowDoubleRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
        fill="#e5e0f5"
      />
      <path fill="none" d="M0 0h24v24H0V0z" />
    </svg>
  );
};
