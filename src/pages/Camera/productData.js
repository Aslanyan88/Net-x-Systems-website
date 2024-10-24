const products = [
  {
    name: "TC-A35555 Zoom Lens Camera 2.8-12mm",
    images: ["/camera/TC-A35555/TC-A35555.jpg"],
    phone: "+(374) 44 040-405",
    description: "High-resolution surveillance camera with a variable zoom lens ranging from 2.8mm to 12mm, ensuring versatile coverage."
  },
  {
    name: "TC-C32CN WiFi Surveillance Camera 2.8mm",
    images: ["/camera/TC-C32CN/TC-C32CN.jpg"],
    phone: "+(374) 44 040-405",
    description: "Wireless camera with a 2.8mm fixed lens, ideal for both indoor and outdoor use, providing stable connectivity and clear visuals."
  },
  {
    name: "TC-C32GS Efficient SD Card Camera 2.8mm",
    images: ["/camera/TC-C32GS/TC-C32GS.png"],
    phone: "+(374) 44 040-405",
    description: "Efficient camera supporting SD card storage, equipped with a 2.8mm lens for crisp surveillance."
  },
  {
    name: "TC-C32HS Compact SD Card Camera 2.8mm",
    images: ["/camera/TC-C32HS/TC-C32HS.png"],
    phone: "+(374) 44 040-405",
    description: "Compact camera model supporting SD cards, featuring a 2.8mm lens for reliable security."
  },
  {
    name: "TC-A3563 High-Zoom Surveillance Camera",
    images: ["/camera/TC-A3563/TC-A3563.jpg"],
    phone: "+(374) 44 040-405",
    description: "Advanced camera with high zoom capabilities and automatic adjustments, suitable for extensive surveillance."
  },
  {
    name: "TC-C34KS Wide-Angle SD Card Camera 2.8mm",
    images: ["/camera/TC-C34KS/TC-C34KS.jpg"],
    phone: "+(374) 44 040-405",
    description: "Reliable camera featuring SD card storage and a 2.8mm lens, offering a wide-angle view for comprehensive coverage."
  },
  {
    name: "TC-C34LQ Versatile Variable Lens Camera 2.8-12mm",
    images: ["/camera/TC-C34LQ/TC-C34LQ.png"],
    phone: "+(374) 44 040-405",
    description: "Flexible camera equipped with a 2.8-12mm variable lens, designed for diverse surveillance requirements."
  },
  {
    name: "TC-C34UV Fixed Lens Surveillance Camera 4mm",
    images: ["/camera/TC-C34UV/TC-C34UV.png"],
    phone: "+(374) 44 040-405",
    description: "Robust camera with a fixed 4mm lens, adaptable for multiple monitoring scenarios."
  },
  {
    name: "TC-C34HN Compact Surveillance Camera 2.8mm",
    images: ["/camera/TC-C34HN/TC-C34HN.png"],
    phone: "+(374) 44 040-405",
    description: "Compact design featuring a 2.8mm lens, perfect for effective and clear surveillance."
  },
  {
    name: "TC-C32WP Weatherproof Camera 2.8mm",
    images: ["/camera/TC-C32WP/TC-C32WP.jpg"],
    phone: "+(374) 44 040-405",
    description: "Durable weatherproof camera with a 2.8mm lens, designed specifically for outdoor environments."
  },
  {
    name: "TC-H334S WiFi European Model Camera 4mm",
    images: ["/camera/TC-H334S/TC-H334S.png"],
    phone: "+(374) 44 040-405",
    description: "European market WiFi-enabled camera with a 4mm lens, delivering stable performance."
  },
  {
    name: "TC-H363U 4G-Enabled Security Camera 4mm",
    images: ["/camera/TC-H363U/TC-H363U.jpg"],
    phone: "+(374) 44 040-405",
    description: "Advanced 4G-enabled camera with secure data transfer and a fixed 4mm lens."
  },
  {
    name: "TC-H389M Long-Range Zoom Camera 44x",
    images: ["/camera/TC-H389M/TC-H389M.jpg"],
    phone: "+(374) 44 040-405",
    description: "Featuring a powerful 44x zoom, this lightweight camera excels in long-range surveillance."
  },
  {
    name: "TC-R3110 Indoor European Compliance Camera",
    images: ["/camera/TC-R3110/TC-R3110.jpg"],
    phone: "+(374) 44 040-405",
    description: "Ideal for indoor use, this camera integrates smoothly and meets European standards."
  },
  {
    name: "TC-R3120 Enhanced Surveillance Camera V3.0",
    images: ["/camera/TC-R3120/TC-R3120.jpg"],
    phone: "+(374) 44 040-405",
    description: "Version 3.0 of this model comes with improved features for better security monitoring."
  },
  {
    name: "TC-R3232 Versatile Environment Camera",
    images: ["/camera/TC-R3232/TC-R3232.jpg"],
    phone: "+(374) 44 040-405",
    description: "Adaptable camera capable of delivering clear images across diverse conditions."
  },
  {
    name: "TC-R3240 Business Surveillance Camera",
    images: ["/camera/TC-R3240/TC-R3240.jpg"],
    phone: "+(374) 44 040-405",
    description: "Designed for business needs, this model ensures high efficiency and easy setup."
  },
  {
    name: "TC-R3440 Multi-Functional Security Camera",
    images: ["/camera/TC-R3440/TC-R3440.jpg"],
    phone: "+(374) 44 040-405",
    description: "Packed with advanced features, this multi-functional camera delivers exceptional image quality."
  },
  {
    name: "TC-R3840 Extended Monitoring Camera",
    images: ["/camera/TC-R3840/TC-R3840.png"],
    phone: "+(374) 44 040-405",
    description: "Built for extended surveillance, offering reliable and efficient monitoring capabilities."
  },
  {
    name: "TC-R324160 High-Capacity Surveillance Camera",
    images: ["/camera/TC-R324160/TC-R324160.png"],
    phone: "+(374) 44 040-405",
    description: "Designed for large-scale setups, this high-capacity camera supports extensive surveillance projects."
  },
  {
    name: "TC-C34XS Compact Surveillance Solution 2.8mm",
    images: ["/camera/TC-C34XS/TC-C34XS.png"],
    phone: "+(374) 44 040-405",
    description: "Compact and easy-to-install camera featuring a 2.8mm lens for versatile monitoring."
  },
  {
    name: "TC-C34GS SD Compatible Camera 2.8mm",
    images: ["/camera/TC-C34GS/TC-C34GS.png"],
    phone: "+(374) 44 040-405",
    description: "Camera equipped with SD card compatibility, ensuring clear video output and a 2.8mm lens."
  },
  {
    name: "TC-C32XN Sturdy Monitoring Camera 2.8mm",
    images: ["/camera/TC-C32XN/TC-C32XN.png"],
    phone: "+(374) 44 040-405",
    description: "Built for consistent monitoring, featuring a sturdy design and a 2.8mm lens."
  },
  {
    name: "TC-C32MN Adjustable Zoom Camera 2.8-12mm",
    images: ["/camera/TC-C32MN/TC-C32MN.jpg"],
    phone: "+(374) 44 040-405",
    description: "Camera with a flexible zoom range from 2.8mm to 12mm, ideal for various settings."
  },
  {
    name: "TC-C32QN 2MP Fixed Lens Camera 2.8mm",
    images: ["/camera/TC-C32QN/TC-C32QN.jpg"],
    phone: "+(374) 44 040-405",
    description: "High-quality 2MP camera with a fixed 2.8mm lens for clear and sharp image capture."
  },
  {
    name: "TC-C32RN Reliable Surveillance Camera 2.8mm",
    images: ["/camera/TC-C32RN/TC-C32RN.png"],
    phone: "+(374) 44 040-405",
    description: "Designed for reliable and precise monitoring, featuring a 2.8mm lens."
  },
  {
    name: "TC-C32UN Variable Lens Surveillance 2.8-12mm",
    images: ["/camera/TC-C32UN/TC-C32UN.png"],
    phone: "+(374) 44 040-405",
    description: "Versatile camera with an adjustable lens ranging from 2.8mm to 12mm for flexible security solutions."
  }
];

export default products;
