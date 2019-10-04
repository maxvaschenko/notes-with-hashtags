import React from "react";
import { __NoteCardWrapper__ } from "./styled";

export const NoteCard = props => {
  const { value } = props;
  return (
    <__NoteCardWrapper__>
      <p>{value}</p>
    </__NoteCardWrapper__>
  );
};
