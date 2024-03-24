/* eslint-disable react/prop-types */

import {useEffect, useRef, useState} from "react";

const Stepper = ({steps = []}) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    const [margins, setMargins] = useState({
        marginLeft: 0,
        marginRight: 0,
    });
    const stepRef = useRef([]);

    useEffect(() => {
        console.log(stepRef.current[steps.length - 2].offsetWidth);
        console.log(stepRef.current[0].offsetWidth);

        setMargins({
            marginLeft: stepRef.current[0].offsetWidth / 2,
            marginRight: stepRef.current[steps.length - 1].offsetWidth / 2,
        });
    }, [stepRef, steps.length]);

    if (!steps.length) {
        return <></>;
    }

    const handleNext = () => {
        setCurrentStep((prevStep) => {
            if (prevStep === steps.length) {
                setComplete(true);
                return prevStep;
            } else {
                return prevStep + 1;
            }
        });
    };

    const calculateProgressBarWidth = () => {
        return ((currentStep - 1) / (steps.length - 1)) * 100;
    };

    return (
        <>
            <div className="stepper">
                {steps.map((step, index) => {
                    return (
                        <div
                            key={step.name}
                            ref={(el) => (stepRef.current[index] = el)}
                            className={`step ${currentStep > index + 1 || complete ? "complete" : ""} ${
                                currentStep === index + 1 ? "active" : ""
                            } `}
                        >
                            <div className="step-number">
                                {currentStep > index + 1 || complete ? <span>&#10003;</span> : index + 1}
                            </div>
                            <div className="step-name">{step.name}</div>
                        </div>
                    );
                })}

                <div
                    className="progress-bar"
                    style={{
                        width: `calc(100%- ${margins.marginLeft + margins.marginRight}px)`,
                    }}
                >
                    <div className="progress" style={{width: `${calculateProgressBarWidth()}%`}}></div>
                </div>
            </div>

            {!complete && (
                <button className="btn" onClick={handleNext}>
                    {currentStep === steps.length ? "Finish" : "Next"}
                </button>
            )}
        </>
    );
};

export default Stepper;
