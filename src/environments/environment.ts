// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  IsMakeMoney: false,
  Title: "This is the title",
  Domain: "vdeskify.firebaseapp.com",
  TfnNumbers: "1A8A0A2A3A2A1A0A1A11",
  TfnClickToCall: "1A-8A0A2-3A2A1-0A1A11",
  AddressLine1: "Block C, Shastri Park,",
  AddressLine2: "Shahdara Delhi, 110053",
  ContactNumber: "9940334034",
  CTATitle: "Quick Customer Support Number",
  MapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.623483601465!2d77.25736271544108!3d28.67099038240261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcf5b415409b%3A0xdfab5b8b107129c6!2sStreet+Number+5%2C+Block+C%2C+Shastri+Park%2C+Shahdara%2C+Delhi%2C+110053!5e0!3m2!1sen!2sin!4v1543518976258",
  companyLogo: {
    normal: "/assets/img/logo.png",
    money: "/assets/img/mn/logo.webp"
  },
  bannerImage: {
    normal: "/assets/img/banner/solor.jpg",
    money: "/assets/img/mn/banner.png"
  },
  producImage: {
    normal: "https://www.azocleantech.com/images/Article_Images/ImageForArticle_723(1).jpg",
    money: "/assets/img/mn/body.webp"
  },
  disclaimer: {
    normal: "solar panel disclaimer",
    money: "We are an independent ProAdvisor firm to provide services for QuickBooks and other accounting software brands. Bookkeeping, accounting, payroll, tax filing and other related services offered by We are independent of Intuit Inc. We provide services through trained team of certified pro-advisors, certified accountants and experienced specialists. The brand-names, trademarks, logos, company names used in our website belong to their respective owners and are for informational purposes only."
  },
  CardDeckTitle: {
    normal: "Solar Panel",
    money: "Quickbooks"
  },
  CARD1: {
    Title: "300 Watt Waaree Aditya Series Solar Panel WSM-300",
    Body: "Continuing its efforts to promote the use of Solar PVC modules as a viable energy source, Waaree energies, one of India’s leading solar product manufacturers, has installed solar rooftop panels at Growel’s corporate office located in Growel’s Mall– one of the most popular shopping centers in Kandivali, Mumbai.",
    ImageUrl: "https://4.imimg.com/data4/IA/LB/MY-6982239/usg-75-watt-polycrystalline-500x500.jpeg"
  },
  CARD2: {
    Title: "USG 75 Watt Polycrystalline Solar Panel",
    Body: "The solar panel system has played a significant role in reducing the shopping mall’s carbon footprint – eliminating almost 2, 23, 200 kg of carbon dioxide.",
    ImageUrl: "https://5.imimg.com/data5/RE/FY/MY-6982239/usg-40-watt-polycrystalline-solar-panels-500x500.jpg"
  },
  CARD3: {
    Title: "USG 40 Watt Polycrystalline Solar Panels,",
    Body: "We have set up an ultramodern infrastructure unit that is equipped with advanced machinery and technology. Manned by a team of skilled professionals, we are able to present a quality assortment of products. These young team members are passionate and well-informed with the conceptual acquaintance of their relevant area, besides bringing with them years of experience. We are constantly looking to make technological upgrades and enhancements.",
    ImageUrl: "https://5.imimg.com/data5/LA/BU/MY-6982239/usg-60-watt-polycrystalline-solar-panels-500x500.jpg"
  },
  CARD4: {
    Title: "USG 60 Watt Polycrystalline Solar Panels",
    Body: "Known for their high efficiency, better conductivity and high durability these products are highly demanded in various industries. Apart from this, we provide this range in various standards and customization options as per the application requirements of our clients. ",
    ImageUrl: "https://5.imimg.com/data5/OK/XP/MY-6982239/usg-150-watt-polycrystalline-solar-panels-500x500.jpg"
  },
  CARD5: {
    Title: "Crystalline Solar Power Panel",
    Body: "Our Quality Experts utilize high-tech testing techniques to check the quality parameters of the products. To store our solar products in safe and systematic manner, we have set up a well-furnished big and spacious warehousing unit.",
    ImageUrl: "https://5.imimg.com/data5/PI/MJ/MY-729492/polycrystalline-pv-panel-500x500.jpg"
  },
  CARD6: {
    Title: "Solar Panel Installation Service",
    Body: "We are doing proper 7 layer box packing with thermocol sheets inside material. Also we do bubble plastic wrapping on material to protect panels and other material.",
    ImageUrl: "https://5.imimg.com/data5/PF/WV/MY-40441151/solar-panel-installation-service-500x500.jpg"
  }
};

/*
Create firebase project
1. Fill env local and prod
2. Set title
3. Banner image
4. update .firebaserc
5. get fire token
6. update in travis and trigger a build.
*/