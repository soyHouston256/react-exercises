import MenuItem from "./menu-item"

export default function MenuList({list=[]}) {
    return <div className="menu-list-container"> 
        {
            list && list.length 
            ? list.map((item) => (
                <MenuItem item={item} />
            ))
            : null
        }
    </div>
}