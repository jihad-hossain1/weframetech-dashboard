
import ProgressBar from "@ramonak/react-progress-bar";

const ProgressBarComponent = () => {

    
    return (
        <div className="w-[300px]">
           <ProgressBar className="w-full  "  completed={60} />;
        </div>
    );
};

export default ProgressBarComponent;