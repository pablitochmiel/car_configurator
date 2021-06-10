import React, {useState} from "react";
import CheckBox from "./CheckBox";
import "./ChceckBox.scss"

const CheckBoxGroup = ({name, values, wgore}) =>  {

    let tempTab=[];
    for(let i=0; i < values.length;i++ ){
        tempTab.push({id:i+1,value:values[i],isChecked: false})
    }
    tempTab[0].isChecked=true;

    const[tab, setTab]=useState(tempTab)

    function handleCheckChieldElement (event) {
        let tempTab = tab;
        //console.log("dupa");
        tempTab.forEach(elem => {
            if (elem.value === event.target.value) {
                //console.log("dupa");
                elem.isChecked = true;
                wgore(elem.value);
                //console.log("checkboc"+temp);
            }else
                elem.isChecked=false;
        })
        setTab(tempTab);
    }

    return (
        <div className="check-box-group">
            <ul>
                {
                    tab.map((elem, index) => {
                        return (<CheckBox key={index} handleCheckChieldElement={handleCheckChieldElement}  {...elem} />)
                    })
                }
            </ul>
        </div>
    );
}

export default CheckBoxGroup