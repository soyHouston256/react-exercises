import Tabs from "./tabs";

export default function TabTest(){
    const tabContents: TabContent[] = [
        {
            title: "Tab 1",
            label: "Tab 1",
            content: <div> Content 1</div>,
            description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit.,lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            title: "Tab 2",
            label: "Tab 2",
            content: <div> Content 2</div>,
            description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit.,lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            title: "Tab 3",
            label: "Tab 3",
            content: <div> Content 3</div>,
            description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit.,lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }

    ];
    interface TabContent {
        title: string;
        label: string;
        content: JSX.Element;
        description: string;
    }
    return <Tabs tabContent={tabContents}/>
}