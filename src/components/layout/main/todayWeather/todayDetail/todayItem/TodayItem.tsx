import todayInterface from "../../../../../../interfaces/today/todayInterface";
function TodayItem({item}:todayInterface) {
    return(
        <>
            <li key={item.id}><div className="todayDetailTitle"><span className="todayDetailImg"><img src={item.img} alt={item.img}/></span><span>{item.title}</span></div>
                <div className="todayDetailText">
                    {item.firstState !== "" ? <div><span className="todaySubText">{item.firstText}</span><span className={item.id !== 6 ? "usually" :"side"}>{item.firstState}</span></div>
                        : <div><span className={item.id === 2 ? "good" :"side"}>{item.firstText}</span></div>}
                    {item.secondState !== "" ? <div><span className="todaySubText">{item.secondText}</span><span className={item.id !== 6 ? "bad" :"side"}>{item.secondState}</span></div>
                        : item.secondText !== "" ?  <div><span className="omm">{item.secondText}</span></div> : null}
                </div>
            </li>
        </>
    )
}
export default TodayItem;