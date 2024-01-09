import React from "react";
import "./ReturnRefund.scss"; // Import SCSS file

const ReturnRefund = () => {
  return (
    <div className="RR-container">
      <h1 className="RR-title">LoopLove - Return,Payment & Refunds</h1>

      <section className="RR-section">
        <h2 className="RR-section-title">PAYMENTS</h2>
        <p>
          We will soon start our operations, Looplove will accepts Debit Cards, Credit Cards, NetBanking & Wallets for payments.


        </p>
      </section>

      <section className="RR-section">
        <h2 className="RR-section-title">RETURNS</h2>
        <p>LoopLove offers a replacement guarantee only if the product received is damaged/defective. Please get in touch with us at care@looplove.in within 3 days of receiving your order if you would like to have it replaced. We will provide a shipping address that you can ship your order back to. LoopLve will dispatch a replacement as soon as we receive your returned order.

</p>
        <p>We do not exchange products if the customer has ordered a wrong item.

</p>
        <p>We do not guarantee that your monitor’s display of color will be accurate. The brightness, contrast and resolution of your screen will make the color of the product look slightly different.

</p>
        <p>Return/exchange will not be applicable if the product is disliked by the customer, or if a wrong product was ordered.

</p>
        
      </section>
      <section className="RR-section">
        <h2 className="RR-section-title">What are the conditions for Replacement Or Refund?

</h2>
        <p>As explained earlier, to be eligible for free replacement, return, refund of any item – buyer must product an authenticated unboxing video which can support buyer’s claim. No replacement claim will be accepted without unboxing video.

</p>
        <p>Free replacements or refund can be requested if the following conditions apply:

</p>
        <ul>
            <li>Item received is physically damaged; (you must prove this by a video of unpacking or unboxing)
</li>
            <li>Item received has missing parts or accessories; (you must prove this by a video of unpacking or unboxing)
</li>
            <li>Item received is different from their description on the product detail page on looplove.in; 
</li>
            <li>Item received is defective/does not work properly. (you must prove this by a video of unpacking or unboxing)
</li>
        </ul>
      </section>

      

      {/* ...Add remaining sections and content here... */}

      <section className="contact-section">
        <h2 className="contact-section-title">Contact Us</h2>
        <p>
          If you have any questions about these Terms & Conditions, please
          contact us at{" "}
          <a href="mailto:care@looplove.in">care@looplove.in</a>.
        </p>
      </section>
    </div>
  );
};

export default ReturnRefund;
