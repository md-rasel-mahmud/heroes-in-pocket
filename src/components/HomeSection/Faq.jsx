import React from "react";

const Faq = () => {
  return (
    <div className="bg-black/10 backdrop-blur-md rounded-lg p-5">
      <h2
        data-aos="zoom-in-down"
        className="text-3xl text-center py-5 mt-3 font-bold text-secondary"
      >
        FAQ
      </h2>
      <div className="divider"></div>

      <div className="p-6"></div>
      <div
        tabIndex={0}
        className="collapse collapse-plus bg-black/10 my-2 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Q: How can I place an order for action toys on your website?
        </div>
        <div className="collapse-content">
          <p>
            A: Placing an order is simple. Just browse through our collection of
            action toys, select the items you want, and click on the "Add to
            Cart" button. Once you've added all the desired items, proceed to
            the checkout page to finalize your order.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus bg-black/10 my-2 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Q: What payment methods do you accept?
        </div>
        <div className="collapse-content">
          <p>
            A: We accept various payment methods to provide convenience and
            flexibility to our customers. You can pay for your order using major
            credit cards (Visa, Mastercard, American Express), PayPal, or other
            secure online payment gateways.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus bg-black/10 my-2 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Q: What is your shipping policy?
        </div>
        <div className="collapse-content">
          <p>
            A: We offer reliable and prompt shipping services. After placing
            your order, we aim to process and ship it within 1-2 business days.
            The actual delivery time depends on your location and the shipping
            method chosen during checkout. You can find more detailed
            information about our shipping policy on our website.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus bg-black/10 my-2 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Q: Do you offer international shipping?
        </div>
        <div className="collapse-content">
          <p>
            A: Yes, we do offer international shipping to many countries around
            the world. However, please note that shipping rates and delivery
            times may vary based on your location. During the checkout process,
            you'll be able to see if we ship to your country and the associated
            shipping costs.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus bg-black/10 my-2 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Q: What is your return policy?
        </div>
        <div className="collapse-content">
          <p>
            A: We want you to be completely satisfied with your purchase. If you
            receive a damaged or defective item, please contact our customer
            support within 7 days of receiving your order. We will guide you
            through the return process and provide a replacement or issue a
            refund, based on the situation. For more detailed information,
            please refer to our returns and exchanges policy on our website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
