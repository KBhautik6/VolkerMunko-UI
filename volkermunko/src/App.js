import React from "react";
import { GlobalStyles } from "./components/Global.styled";
import { AssetManagement } from "./components/Asset/Asset";
import { Product } from "./components/Product/Product";
import { WealthManagement } from "./components/WealthManagement/WealthManagement";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      {/* <AssetManagement /> */}
      <Product />
      <WealthManagement />
    </div>
  );
};

export default App;
