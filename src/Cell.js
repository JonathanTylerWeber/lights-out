import React from "react";
import "./Cell.css";

/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/



function Cell({ flipCellsAround, isLit }) {
  const classes = `Cell ${isLit ? "Cell-lit" : ""}`;
  const handleClick = () => {
    flipCellsAround();
  };
  return <td className={classes} onClick={handleClick} />;
}

export default Cell;
