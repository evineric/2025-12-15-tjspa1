import { MemeSVGViewer } from "orsys-tjs-meme";
import { useSelector } from "react-redux";
import type { StoreState } from "../../../store/store";

interface IMemeSvgViewerProps {
  basePath?: "/" | "";
}
const MemeSvgViewer: React.FC<IMemeSvgViewerProps> = ({ basePath }) => {
  const images = useSelector((s: StoreState) => s.ressources.images);
  const current = useSelector((s: StoreState) => s.current.meme);
  return (
    <MemeSVGViewer
      meme={current}
      image={images.find((i) => i.id === current.imageId)}
      basePath={basePath}
    />
  );
};

export default MemeSvgViewer;
