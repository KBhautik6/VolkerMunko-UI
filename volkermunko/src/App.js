import React from "react";
import { GlobalStyles } from "./components/Global.styled";
import { AssetManagement } from "./components/Asset/Asset";
import { Product } from "./components/Product/Product";
import { WealthManagement } from "./components/WealthManagement/WealthManagement";
import { Contact } from "./components/Contact/Contact";
import { CompleteFinance } from "./components/CompleteFinance/CompleteFinance";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      {/* <AssetManagement /> */}
      <CompleteFinance />
      {/* <Product /> */}
      {/* <WealthManagement /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default App;
