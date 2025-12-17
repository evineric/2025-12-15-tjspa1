import { useNavigate, useParams } from "react-router"
import MemeForm from "../../components/functionnal/MemeForm/MemeForm.store"
import FlexV1Grow from "../../components/layout/FlexV1Grow/FlexV1Grow"
import MemeSvgViewer from "../../components/ui/MemeSvgViewer/MemeSvgViewer.store"
import { useEffect } from "react"
import { type AppDispatch, type RootState } from "../../store/store"
import { clear, update } from "../../store/current"
import { useDispatch, useSelector } from "react-redux"

const Editor = () => {
  const param = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const nav = useNavigate();
  const memes = useSelector((s:RootState)=>s.ressources.memes);
  useEffect(()=>{
    if(param.id === undefined){
      dispatch(clear());
    }
    else{
      const pId = Number(param.id);
      if(Number.isNaN(pId)){
        nav("/");
        return;
      }
      const foundMeme = memes.find((i)=>(i.id === pId));
      if(foundMeme === undefined){
        nav("/");
        return
      }
      dispatch(update(foundMeme));
    }
  },[dispatch, memes, nav, param.id]);
  return (
        <FlexV1Grow>
          <MemeSvgViewer basePath="" />
          <MemeForm/>
        </FlexV1Grow>
  )
}

export default Editor