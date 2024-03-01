import { SVGProps, memo } from "react";

export const Send = memo((props: Readonly<SVGProps<SVGSVGElement>>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 28 28"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3.79 2.625c-.963-.46-2.021.42-1.746 1.451l2.016 7.533a1 1 0 0 0 .824.732l9.884 1.412c.286.04.286.454 0 .495l-9.883 1.411a1 1 0 0 0-.824.732l-2.017 7.537c-.275 1.03.783 1.91 1.746 1.451L25.288 15.13c.949-.452.949-1.804 0-2.257z"
      ></path>
    </svg>
  );
});
