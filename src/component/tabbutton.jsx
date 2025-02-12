import "./tabbutton.scss";
export function Tabbutton({children,onSelect,isSelected}){
    return(
        <li>
        <button className={isSelected?"Active":undefined } onClick={onSelect}>{children}</button>
        </li>
    )
}

