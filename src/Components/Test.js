import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import data from "../data.json";
export const Test = () => {
  const [step, setStep] = useState(0);

  const onNext = () => {
    console.log();
    if (data.length > step) setStep(step + 1);
  };
  const onBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div>
      <form className="border border-primary ">
        <div>
          <div>
            <label class="text-danger">Question</label>
            <p class="text-info">
              {data[step] && data[step].questionId}.
              {data[step] && data[step].description}
              <br />
            </p>
            <label class="text-danger">Options</label>
            {data[step].choices.map((p) => (
              <div>
                <p>
                  {" "}
                  <input type="radio" />
                  {p.code} .{p.description}
                </p>
              </div>
            ))}{" "}
            <br />
            <br />
            {step > 0 && (
              <Button
                className="btn btn-primary mr-6"
                disabled={step.false}
                onClick={onBack}
              >
                Previous
              </Button>
            )}
            {step < data.length - 1 && (
              <Button
                className="btn btn-warning mr-6"
                disabled={step.true}
                onClick={onNext}
              >
                Next
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
