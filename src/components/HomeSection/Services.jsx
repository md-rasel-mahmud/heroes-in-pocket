import React from 'react';
import { FaShieldAlt, FaShoppingCart, FaTruck } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="py-16 bg-black/10 backdrop-blur-md  my-5 rounded-lg">
      <div className="container mx-auto">
        <div data-aos="fade-down" className="text-center">
          <h2 className="text-3xl font-bold uppercase">Our Services</h2>
          <p className="mt-2">Discover a wide range of action toys and accessories</p>
        </div>
        <div className="divider"></div>
        <div data-aos="fade-up" className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-3 px-5">
          <div data-aos="zoom-in" className="bg-black/10 rounded-lg shadow-lg p-6">
            <div>
              <FaShoppingCart className='text-8xl bg-primary p-5 mask mask-hexagon'/>
            </div>
            <h4 className="mt-4 text-primary text-xl font-semibold">Online Store</h4>
            <p className="mt-2">Shop for your favorite action toys from the comfort of your home. Our online store offers a wide selection of action figures, vehicles, and playsets.</p>
          </div>

          <div data-aos="zoom-in" className="bg-black/10 rounded-lg shadow-lg p-6">
            <div>
              <FaTruck className='text-8xl bg-primary p-5 mask mask-hexagon'/>
            </div>
            <h4 className="mt-4 text-primary text-xl font-semibold">Fast Shipping</h4>
            <p className="mt-2">We offer fast and reliable shipping services to ensure that you receive your action toys promptly. Your order will be carefully packaged and shipped with care.</p>
          </div>

          <div data-aos="zoom-in" className="bg-black/10 rounded-lg shadow-lg p-6">
            <div>
              <FaShieldAlt className='text-8xl bg-primary p-5 mask mask-hexagon'/>
            </div>
            <h4 className="mt-4 text-primary text-xl font-semibold">Quality Guarantee</h4>
            <p className="mt-2">Our action toys are made with high-quality materials and undergo rigorous quality control to ensure durability and authenticity. We stand behind the products we sell.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
