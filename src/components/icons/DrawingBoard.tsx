import { SVGProps, memo } from "react";

const DrawingBoard = memo((props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
        <path
          fill="currentColor"
          d="M12 3a1 1 0 0 1 1 1v1h8a1 1 0 1 1 0 2v9a1 1 0 1 1 0 2h-4.586l1.293 1.293a1 1 0 0 1-1.414 1.414L13.586 18h-3.172l-2.707 2.707a1 1 0 0 1-1.414-1.414L7.586 18H3a1 1 0 1 1 0-2V7a1 1 0 0 1 0-2h8V4a1 1 0 0 1 1-1m7 13V7H5v9z"
        ></path>
      </g>
    </svg>
  );
});

export default DrawingBoard;
