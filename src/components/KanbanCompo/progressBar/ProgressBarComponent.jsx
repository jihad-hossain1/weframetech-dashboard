import { useState } from "react";
import ProgressBar from "./ProgressBar";

const ProgressBarComponent = () => {  
    const [progress,setProgress] = useState(60);

    return (
        <div className="">          
           <ProgressBar progress={progress}></ProgressBar>
        </div>
    );
};

export default ProgressBarComponent;