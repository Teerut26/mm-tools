import { connect } from "react-redux";

import DataTable, { createTheme } from "react-data-table-component";
import { useEffect, useState } from "react";
import data from "../data.json";
var _ = require("lodash");

createTheme(
  "solarized",
  {
    text: {
      primary: "#EEEEEE",
      secondary: "#00ADB5",
    },
    background: {
      default: "#222831",
    },
    context: {
      background: "#222831",
      text: "#FFFFFF",
    },
    divider: {
      default: "#393E46",
    },
    button: {
      default: "#2aa198",
      hover: "rgba(0,0,0,.08)",
      focus: "rgba(255,255,255,.12)",
      disabled: "rgba(255, 255, 255, .34)",
    },
    sortFocus: {
      default: "#2aa198",
    },
  },
  "dark"
);

const mapKeys = (drop) => {
  if (drop == null) return "null";
  let obj = [];
  drop.map((item) => {
    for (let key in item) {
      obj.push(key);
    }
  });
  return obj.join(", ");
};

const columns = [
  {
    name: <div className="text-lg">ID</div>,
    selector: (row) => <div className="text-lg">{row.id}</div>,
    sortable: true,
  },
  {
    name: <div className="text-lg">Name</div>,
    selector: (row) => <div className="text-lg">{row.name}</div>,
    sortable: true,
  },
  {
    name: <div className="text-lg">AssociateAction</div>,
    selector: (row) => <div className="text-lg">{row.associate_action}</div>,
    sortable: true,
  },
  {
    name: <div className="text-lg">Drop</div>,
    selector: (row) => <div className="text-lg">{mapKeys(row.drop)}</div>,
    sortable: true,
  },
  {
    name: <div className="text-lg">HitPoint</div>,
    selector: (row) => <div className="text-lg">{row.hit_point}</div>,
    sortable: true,
  },
];

const MapBoxs = ({onSelect}) => {
  return (
    <div  className="flex flex-row overflow-x-auto gap-2 p-2">
      {data.data.nft.box_data.map((item) => (
        <div onClick={()=>onSelect(item)} className="text-sm btn btn-primary text-light btn-sm">{item.name}</div>
      ))}
    </div>
  );
};

function App(props) {
  const [Data2, setData2] = useState(data.data.nft.wild_object);
  const [Word, setWord] = useState("");
  useEffect(() => {
    SearchHandle();
  }, [Word]);
  const SearchHandle = () => {
    if (Word.length == 0) setData2(data.data.nft.wild_object);
    let result = data.data.nft.wild_object.filter(
      (item) =>
        item.id.toString().match(Word) || item.name.toString().match(Word)
    );
    setData2(result);
  };

  useEffect(() => {
    console.log(data.data.nft.box_data);
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <MapBoxs onSelect={(v)=>console.log(v)} />
      <div className="bg-dark flex flex-row justify-content-between p-3 items-center">
        <div className="text-light text-lg font-bold">Box Data</div>
        <input
          className="form-control sm:w-96 w-32 bg-dark-new text-light border-0 "
          placeholder="Search By ID/Name"
          value={Word}
          onChange={(e) => setWord(e.target.value)}
          type="text"
        />
      </div>
      <DataTable
        theme="solarized"
        fixedHeader
        highlightOnHover
        pointerOnHover
        columns={columns}
        data={Data2}
        // pagination
      />
    </div>
  );
}

export default connect((state) => {
  return state;
})(App);
