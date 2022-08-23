import Gallery from "react-photo-gallery";
import axios from "axios";

import React from "react";
import { useEffect } from "react";
import { RotatingSquare } from "react-loader-spinner";

function Gallary() {
  const [data, setData] = React.useState([]);
  const [total_documents, setTotaldocuments] = React.useState(0);
  const [loader, setLoader] = React.useState(false);

  useEffect(() => {
    fetchImages();
    return () => {};
  }, []);

  const fetchImages = () => {
    setLoader(true);
    axios
      .get("https://tribal-legacy-tattoo.herokuapp.com/posts")
      .then((res) => {
        const temp = [];
        res.data.Data.forEach((item) => {
          temp.push({ src: item.url, width: item.width, height: item.height });
        });
        setData(temp);
        setTotaldocuments(res.data.total_documents);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  };

  return (
    <div className="text-gray-400 bg-gray-900 body-font relative">
      <div
        style={{ position: "absolute", left: "50%", top: "50%", zIndex: 100 }}
      >
        {loader && "Loading..."}
        {loader && <RotatingSquare width="100" color="green" />}
      </div>

      <Gallery photos={data} />
    </div>
  );
}

export default Gallary;
