import React from 'react';

const FeaturedBrands = () => {
  const brands = [
    {
      id: 1,
      name: "SuperToys",
      logo: "https://shop.hasbro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fworldwide-hasbro.aab25753.png&w=256&q=100",
    },
    {
      id: 2,
      name: "Action World",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F8be5a791274f462fa36ba4e5344b7513%2Fb435f1e62dd0476b95d4d11fa240b066?width=70",
    },
    {
      id: 3,
      name: "Adventure Force",
      logo: "https://necaonline.com/wp-content/uploads/2023/06/NECA-Logo-White.png",
    },
    {
      id: 4,
      name: "Epic Action Toys",
      logo: "https://mcfarlane.com/wp-content/themes/mcfarlane/img/header-mcFarlane-logo.jpg",
    },
  ];

  return (
    <section id="featured-brands" className="bg-black/10 backdrop-blur-md py-16">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Featured Brands</h2>
        </div>
        <div className="divider"></div>
        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand) => (
            <div key={brand.id} className="flex justify-center items-center bg-black/10 p-2 m-2 rounded-lg">
              <img src={brand.logo} alt={brand.name} className="h-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedBrands;
