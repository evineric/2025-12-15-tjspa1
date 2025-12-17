import React from "react";
import StandalonMemeForm from "./MemeForm";
import type { IMemeFormStored } from "./MemeForm.interface";
import { useDispatch, useSelector } from "react-redux";
import { type StoreDispatch, type StoreState } from "../../../store/store";
import { update } from "../../../store/current";

const MemeForm: React.FC<IMemeFormStored> = (props) => {
  const images = useSelector((s: StoreState) => s.ressources.images);
  const current = useSelector((s: StoreState) => s.current.meme);
  const dispatch = useDispatch<StoreDispatch>();
  return (
    <StandalonMemeForm
      {...props}
      images={images}
      meme={current}
      onMemeChange={(meme) => {
        dispatch(update(meme));
      }}
    />
  );
};

export default MemeForm;
