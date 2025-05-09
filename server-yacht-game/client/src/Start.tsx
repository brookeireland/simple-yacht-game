import React from "react";
import { writeUsername } from "./api";

export function Start({
  onSetUsername,
}: {
  onSetUsername: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [value, setValue] = React.useState("");
  const handleClick = async () => {
    await writeUsername(value);
    onSetUsername(value);
  };
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={handleClick}>Log in</button>
    </>
  );
}
