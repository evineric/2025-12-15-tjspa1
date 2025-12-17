import FlexV1Grow from "../components/layout/FlexV1Grow/FlexV1Grow";
import FlexH3Grow from "../components/layout/FlexH3Grow/FlexH3Grow";
import Header from "../components/ui/Header/Header";
import Footer from "../components/ui/Footer/Footer";
import Navbar from "../components/ui/Navbar/Navbar";
import MemeForm from "../components/functionnal/MemeForm/MemeForm";
import { emptyMeme, type MemeInterface, MemeSVGViewer } from "orsys-tjs-meme";
import { useEffect, useState } from "react";
import { REST_API_RESSOURCES, REST_API_URL } from "../config/constantes";
import { type ImageInterface } from "orsys-tjs-meme";
type TImages=Array<ImageInterface>;

const App: React.FC<undefined> = () => {
  const [images, setImages] = useState<TImages>([]);
  const [current, setCurrent] = useState<MemeInterface>(emptyMeme);

  useEffect(() => {
    fetch(`${REST_API_URL}${REST_API_RESSOURCES.images}`).then(r=>r.json()).then(imgs=>setImages(imgs));
  },[])
  return (
    <>
    <div className="App">
      <FlexH3Grow>
        <Header/>
        <Navbar/>
        <FlexV1Grow>
          <MemeSVGViewer meme={current} image={images.find(i=>i.id === current.imageId)} basePath="" />
          <MemeForm meme={current} images={images} onMemeChange={setCurrent}/>
        </FlexV1Grow>
        <Footer/>
      </FlexH3Grow>
    </div> 
    </>
  );
};

export default App;
