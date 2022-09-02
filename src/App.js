import React from "react";
import Box from './Box';
import boxes from './boxes';

function App() {

    const [boxData, setBoxData] = React.useState(boxes);
    
    console.log("App Render")

    function handleToggle(id) {
        setBoxData((s)=>{
            const boxArr = [...s];
            const indx = boxArr.findIndex(v=>v.id === id);
            boxArr[indx].on = (boxArr[indx].on) ? false : true;
            return boxArr;
        })
    }


    const boxElements = boxData.map((v)=>{
        return <Box key={v.id} id={v.id} on={v.on} toggle={handleToggle}/>
    })


    return (
        <div className="box-container">
            {boxElements}
        </div>
    )
}

export default App;