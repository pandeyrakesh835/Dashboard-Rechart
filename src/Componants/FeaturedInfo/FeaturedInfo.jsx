import { ArrowDownward ,ArrowUpward } from "@material-ui/icons";
import React from "react";
import './FeaturedInfo.css'

function FeaturedInfo() {
  return (
      <>
    <div className="featuredItem">
      <span className="featuredTitle">Reavenue</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">$2,415</span>
        <span className="featuredMoneyRate">
          -11.4 <ArrowDownward />
        </span>
      </div>

      <span className="featurendSub">Compared to last month</span>
    </div>
      <div className="featuredItem">
      <span className="featuredTitle">Sales</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">$4,415</span>
        <span className="featuredMoneyRate">
          +11.4 <ArrowDownward />
        </span>
      </div>

      <span className="featurendSub">Compared to last month</span>
    </div>
      <div className="featuredItem">
      <span className="featuredTitle">Cost</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">$2,225</span>
        <span className="featuredMoneyRate">
          -11.4 <ArrowUpward />
        </span>
      </div>

      <span className="featurendSub">Compared to last month</span>
    </div>
    
    </>

  );
}
export default FeaturedInfo;
