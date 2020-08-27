import React from 'react';
import './Wave.css';

const Wave = () => (
  <span className="wave mb-4 ml-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 485 485"
      width="32"
      height="32"
    >
      <path d="M382.5 69.429c-7.441 0-14.5 1.646-20.852 4.573-4.309-23.218-24.7-40.859-49.148-40.859a49.685 49.685 0 00-21.467 4.852C285.641 16.205 265.932 0 242.5 0c-23.432 0-43.141 16.206-48.533 37.995a49.696 49.696 0 00-21.467-4.852c-27.57 0-50 22.43-50 50v122.222a49.702 49.702 0 00-20-4.187c-27.57 0-50 22.43-50 50V354c0 72.233 58.766 131 131 131h118c72.233 0 131-58.767 131-131V119.429c0-27.571-22.43-50-50-50zM402.5 354c0 55.691-45.309 101-101 101h-118c-55.691 0-101-45.309-101-101V251.178c0-11.028 8.972-20 20-20s20 8.972 20 20v80h30V83.143c0-11.028 8.972-20 20-20s20 8.972 20 20v158.035h30V50c0-11.028 8.972-20 20-20s20 8.972 20 20v191.178h30V83.143c0-11.028 8.972-20 20-20s20 8.972 20 20v158.035h30v-121.75c0-11.028 8.972-20 20-20s20 8.972 20 20V354z" />
    </svg>
  </span>
);

export default Wave;