import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { Link } from "react-router";
import MemeThumbnail from "../../components/layout/MemeThumbnail/MemeThumbnail.tsx";
import { MemeSVGViewer } from "orsys-tjs-meme";

const Thumbnail = () => {
  const res = useSelector((s: RootState) => s.ressources);
  return (
    <MemeThumbnail>
      {res.memes.map((m) => (
        <Link to={`/editor/${m.id}`} key={m.id}>
          <MemeSVGViewer
            meme={m}
            image={res.images.find((i) => i.id === m.imageId)}
            basePath=""
          />
          {m.titre}
        </Link>
      ))}
    </MemeThumbnail>
  );
};

export default Thumbnail;
