import MenuList from "./menu-list";
import './style.css'
export default function TreeView({menus=[]}) {
    return (
        <div className="wrapper-tree-view">
            <MenuList list={menus} />
        </div>
    )
}