import { AssetPanel } from "Components";
import * as Icons from "Icons";
import useStore from "Store";
import { useState } from "react";
import { Link } from "react-router-dom";

const Collaborator = (props: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className="ml-[-16px] avatar bg border-2 border-white h-7 w-7 bg-orange-200 rounded-full "
    ></div>
  );
};

interface HeaderProps {
  title: string;
}

export function Header(props: Readonly<HeaderProps>) {
  const {
    isCommentSectionToggeled,
    setCommentSectionToToggled,
    collaborators,
  } = useStore();
  const [showAssets, setShowAssets] = useState(false);
  const visibility = showAssets ? "left-0" : "left-[-325px]";

  const toggleComments = () => {
    setCommentSectionToToggled(!isCommentSectionToggeled);
  };

  return (
    <div className="border-b z-50 box-border shadow-sm flex-grow border-b-gray-200 top-0 flex flex-row items-center justify-between left-0 h-11 bg-white">
      <div className="flex-row-center ropa-sans-regular gap-2">
        <span
          onMouseEnter={() => setShowAssets(true)}
          className="flex-row-center px-1 text-[#293845] border-r-2 h-11 w-11 flex-row-center justify-center"
        >
          <AssetPanel
            className={`${visibility} w-[325px] border-r-2`}
            onMouseLeave={() => setShowAssets(false)}
          />
          <Icons.Assets />
        </span>
        <Link to="/whiteboards" className="w-fit h-fit">
          <span className="font-bold text-[#788896] px-2 hover:bg-[#edf1f5] hover:cursor-pointer rounded-sm">
            MY FILES
          </span>
        </Link>
        <span className="text-[#c3cfd9]">/</span>
        <Icons.DrawingBoard className="text-violet-500 h-11" />
        <span className="text-[#293845] font-medium">{props.title}</span>
      </div>
      <div className="flex-row-center">
        <div className="flex-row-center">
          {collaborators.map(({ userId }) => (
            <Collaborator key={userId} title={userId} />
          ))}
        </div>

        <div
          onClick={toggleComments}
          className="flex-row-center border-l-2 h-11 w-11 text-gray-600 justify-center hover:cursor-pointer hover:bg-gray-100"
        >
          <Icons.Messages />
        </div>

        <div className="flex-row-center text-[#293845] border-l-2 h-11 px-2">
          <div className="flex-row-center rounded-full bg-[#edf1f5] hover:cursor-pointer gap-2 py-1 px-2">
            <Icons.Share />
            <span className="ropa-sans-regular-italic">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
}
