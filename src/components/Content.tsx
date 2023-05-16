import React, { useState } from "react";
import { Icon1 } from "../icons/Icon1";
import { Icon2 } from "../icons/Icon2";
import { Icon3 } from "../icons/Icon3";
import { Icon4 } from "../icons/Icon4";
import { Icon5 } from "../icons/Icon5";
import "../stylesheets/Content.css";
import { TimeAlertIcon } from "../icons/TimeAlertIcon";

interface DataInterface {
  price: number;
  months: number;
  recommended: boolean;
}

const Content = () => {
  return (
    <div className="content-main">
      <MainLockup />
      <Form />
    </div>
  );
};

const MainLockup = () => {
  return (
    <section className="main-lockup">
      <div className="main-heading">
        <h1>
          Access curated courses worth{" "}
          <span className="deleted-price">&#8377; 18,500</span> at just{" "}
          <span style={{ color: "#0096ff" }}>&#8377;99</span> per year!
        </h1>
      </div>

      <div className="main-pointer">
        <div>
          <Icon1 />
        </div>
        <p>
          <span>100+</span> Job relavent courses
        </p>
      </div>

      <div className="main-pointer">
        <div>
          <Icon2 />
        </div>
        <p>
          <span>20,000+</span> Hours of content
        </p>
      </div>

      <div className="main-pointer">
        <div>
          <Icon3 />
        </div>
        <p>
          <span>Exclusive</span> webinar access
        </p>
      </div>

      <div className="main-pointer">
        <div>
          <Icon4 />
        </div>
        <p>
          Scholarship worth <span>&#8377;94,500</span>
        </p>
      </div>

      <div className="main-pointer">
        <div>
          <Icon5 />
        </div>
        <p>
          <span>Add free</span> learning experience
        </p>
      </div>
    </section>
  );
};

const Form = () => {
  const [result, setResult] = useState<number>(149);
  const data: DataInterface[] = [
    { price: 179, months: 12, recommended: true },
    { price: 149, months: 6, recommended: false },
    { price: 99, months: 3, recommended: false },
  ];
  const optionHandler = (e: any) => {
    console.log(e.target.value);
    const total = e.target.value - (e.target.value * 16.7) / 100;
    setResult(Math.round(total));
  };
  return (
    <form className="form-main">
      <section className="form-progress-bar">
        <div className="progress-bar-stage">
          <div>1</div>
          <p>Sign Up</p>
        </div>
        <div className="progress-bar-stage">
          <div>2</div>
          <p>Subscribe</p>
        </div>
      </section>
      <div className="form-header">Select your subscription plan</div>
      <section className="input-container">
        <DisabledPlan />
        {data.map((val: DataInterface, index: number) => {
          return (
            <div className="radio-container" key={index}>
              {val.recommended && (
                <div className="recommendation">
                  <p>Recommended</p>
                </div>
              )}
              <input
                type="radio"
                id={`${val.months}-months`}
                name="subcription"
                value={val.price}
                defaultChecked={val.months === 12 ? true : false}
                onChange={(e) => optionHandler(e)}
              />
              <label htmlFor={`${val.months}-months`}>
                <div className="sub-month">
                  {val.months} Months Subscription
                </div>
                <div className="sub-total">
                  <p>
                    Total <span>&#8377;{val.price}</span>
                  </p>
                  <p>
                    &#8377;{Math.round(val.price / val.months)}{" "}
                    <span>&#47;mo</span>
                  </p>
                </div>
              </label>
            </div>
          );
        })}
      </section>
      <section className="summary-container">
        <div className="fee-container">
          <p>Subscription Fee</p>
          <p>&#8377;18,500</p>
        </div>
        <div className="alert-container">
          <div className="sub-alert-1">
            <p>Limited time offer</p>
            <p>- &#8377;18,401</p>
          </div>
          <div className="sub-alert-2">
            <div>
              <TimeAlertIcon />
            </div>
            <p>Offer valid till 25th March 2023</p>
          </div>
        </div>
        <div className="summary-text-container">
          <p>
            <strong>Total</strong>(Incl. of 18% GST)
          </p>
          <p>&#8377;{result}</p>
        </div>
      </section>
      <section className="button-container">
        <button>CANCEL</button>
        <button type="button">PROCEED TO PAY</button>
      </section>
      <div className="razorpay">
        <img src={require("../assets/razorpay.png")} alt="razerpay-icon" />
      </div>
    </form>
  );
};

const DisabledPlan = () => {
  return (
    <div className="disabled-container">
      <div className="disabled-recommendation">
        <p style={{ color: "white" }}>Offer expired</p>
      </div>
      <div className="dummy-div">
        <div></div>
      </div>
      <label htmlFor="disabled" className="disabled-option">
        <div className="sub-month">12 Months Subscription</div>
        <div className="sub-total">
          <p>
            Total <span>&#8377;99</span>
          </p>
          <p>
            &#8377;8 <span>&#47;mo</span>
          </p>
        </div>
      </label>
    </div>
  );
};

export default Content;
