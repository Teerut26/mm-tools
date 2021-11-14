import React, { useEffect } from "react";
import WildObject from "./components/WildObject.js";
import "./App.css";
import data from "./data.json";
import { connect } from "react-redux";
import BoxData from "./components/BoxData.js";

function App(props) {
  useEffect(() => {
    console.log(props.SetPage);
  }, [props]);

  return (
    <div>
      <div className="flex flex-row p-3 gap-2 overflow-x-auto">
        <div
          onClick={() =>
            props.dispatch({ type: "SET_PAGE", playload: "box_data" })
          }
          className={
            `btn btn-primary btn-sm` +
            (props.SetPage === "box_data" ? " active" : "")
          }
        >
          box_data
        </div>
        <div
          onClick={() =>
            props.dispatch({ type: "SET_PAGE", playload: "buff_type" })
          }
          className={
            `btn btn-primary btn-sm` +
            (props.SetPage === "buff_type" ? " active" : "")
          }
        >
          buff_type
        </div>
        <div
          onClick={() =>
            props.dispatch({ type: "SET_PAGE", playload: "class" })
          }
          className={
            `btn btn-primary btn-sm` +
            (props.SetPage === "class" ? " active" : "")
          }
        >
          class
        </div>
        <div
          onClick={() =>
            props.dispatch({ type: "SET_PAGE", playload: "effect_list" })
          }
          className={
            `btn btn-primary btn-sm` +
            (props.SetPage === "effect_list" ? " active" : "")
          }
        >
          effect_list
        </div>
        <div
          onClick={() =>
            props.dispatch({ type: "SET_PAGE", playload: "modifier_list" })
          }
          className={
            `btn btn-primary btn-sm` +
            (props.SetPage === "modifier_list" ? " active" : "")
          }
        >
          modifier_list
        </div>
        <div
          onClick={() =>
            props.dispatch({ type: "SET_PAGE", playload: "nft_list" })
          }
          className={
            `btn btn-primary btn-sm` +
            (props.SetPage === "nft_list" ? " active" : "")
          }
        >
          nft_list
        </div>
        <div
          onClick={() =>
            props.dispatch({ type: "SET_PAGE", playload: "wild_object" })
          }
          className={
            `btn btn-primary btn-sm` +
            (props.SetPage === "wild_object" ? " active" : "")
          }
        >
          wild_object
        </div>
      </div>
      {props.SetPage === "box_data" ? (
        <BoxData />
      ) : props.SetPage === "wild_object" ? (
        <WildObject />
      ) : (
        ""
      )}
    </div>
  );
}

export default connect((state) => {
  return state;
})(App);
