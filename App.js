import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header/Header";
import Bodyprac from "./src/components/Bodyprac/Bodyprac";
// import Body from "./src/components/Body/Body";
// import Footer from "./src/components/Footer/Footer";

/* 
    

      Body
        - searchbar 
        - restaurantList 
            - restaurantCard
                - img 
                - name
                - rating
                - cuisins 
      Footer 
        -links
        -copyrights
      */

const AppLayout = () => {
  return (
    <>
      <Header />
      <Bodyprac />
      {/* <Body /> */}
      {/* <Footer /> */}
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<AppLayout />);
