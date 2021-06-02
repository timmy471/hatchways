import React from "react";
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: rgb(17, 122, 243);
`;
const Spinner = ({ size, height }) => {
  return (
    <div
      style={{
        display: "flex",
        height: height,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PulseLoader
        css={override}
        size={size}
        color={"rgb(17, 122, 243)"}
        loading={true}
      />
    </div>
  );
};

Spinner.defaultProps = {
  height: "100%",
};

export default Spinner;
