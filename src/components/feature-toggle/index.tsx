import { useContext } from "react";
import Accordian from "../accordian";
import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-color";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";
import LoadMoreData from "../load-more-data";
import QrCodeGenerator from "../qr-code-generator";
import ScroollIndicatior from "../scroll-indicator";
import ImageSlider from "../slider";
import StartRating from "../start-rating";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);


  const componentsToRender = [
    {
        key: 'showAccordian',
        component: <Accordian/>
    },
    {
        key: 'showRandomColor',
        component: <RandomColor/>
    },
    {
        key: 'showStartRating',
        component: <StartRating/>
    },
    {
        key: 'showImageSlider',
        component: <ImageSlider url={'https://picsum.photos/v2/list?'} page={1} limitResult={10}/>
    },
    {
        key: 'showLoadMoreData',
        component: <LoadMoreData/>
    },
    {
        key: 'showTreeView',
        component: <TreeView menus={menus}/>
    },
    {
        key: 'showQrCodeGenerator',
        component: <QrCodeGenerator/>
    },
    {
        key: 'showLightDarkMode',
        component: <LightDarkMode/>
    },
    {
        key: 'showScrollIndicator',
        component: <ScroollIndicatior url={`https://dummyjson.com/products?limit=50`}/>
    },
    ]


  function checkEnabledFlags(getCurrentKey: string) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}


