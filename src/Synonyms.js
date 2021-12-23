import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return "Hello from synonyms";
  } else {
    return null;
  }
}
