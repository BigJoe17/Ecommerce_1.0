import React from "react";
import "./DescriptionBox.css";
function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Ecommerce or electronic commerce is the buying and selling of goods or
          services on the Internet. It encompasses a wide variety of data,
          systems and tools for online buyers and sellers, including mobile
          shopping and online payment encryption.
        </p>
        <p>
          Most businesses with an online presence use an online store and/or
          platform to conduct ecommerce marketing and sales activities and to
          oversee logistics and fulfillment. According to eMarketer, in 2022,
          global retail ecommerce sales will surpass $5 trillion for the first
          time, accounting for more than a fifth of overall retail sales. And by
          2025, total spending will exceed $7 trillion, despite slowing growth.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
