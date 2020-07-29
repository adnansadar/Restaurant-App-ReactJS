import React from "react";

export const Loading = () => {
  return (
    <div className="col-12">
      <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
      {/* pulse is used for spinning it, at 3 times the speed. It is forward spinning. */}
      <p>Loading . . .</p>
    </div>
  );
};
