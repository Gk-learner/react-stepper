import "./App.css";
import Stepper from "./components/stepper";

const steps = [
    {name: "Step1", component: () => <div>This is Step 1</div>},
    {name: "Step2", component: () => <div>This is Step 2</div>},
    {name: "Step3", component: () => <div>This is Step 3</div>},
    {name: "Step4", component: () => <div>This is Step 4</div>},
];
function App() {
    return (
        <div>
             <h1> Stepper</h1>
            <Stepper steps={steps}></Stepper>
        </div>
    );
}

export default App;
