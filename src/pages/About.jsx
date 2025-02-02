import React from "react";

function About() {
  return(
    <div className="sm:mx-auto max-w-5xl flex my-10 flex-col md:flex-row gap-8 bg-black text-white">
      <div className="w-full md:w-1/2 px-8 py-5">
        <img src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="about-pic" className='w-full h-full object-cover rounded-lg'/>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center text-center justify-center px-8 py-4">
        <p className="font-bold text-4xl md:text-7xl">About Xperia Adventures</p>
        <p className="my-2">Xperia Adventures is a premier adventure travel company dedicated to creating unforgettable experiences for thrill-seekers and nature lovers alike. With a passion for exploration, our team curates a diverse range of activities that cater to all levels of adventurers, from beginners to seasoned explorers</p>
        <p>"Welcome to Xperia Adventures, your go-to destination for outdoor exploration and thrilling adventures! Join us as we embark on jaw- dropping hikes, scale breathtaking peaks, and uncover the hidden wonders of our natural world. Whether you're an avid adventurer or a nature enthusiast, this channel is your gateway to unforgettable experiences. From conquering challenging trails in remote landscapes to discovering serene, off-the-beaten-path gems, we'll take you on a journey that will leave you inspired and awestruck. Expect stunning visuals, informative tips, and a behind-the-scenes look at what it takes to tackle some of the world's most captivating outdoor destinations. Our experienced hosts will guide you through every step, sharing their expertise and passion for the great outdoors. Get ready to pack your bags, lace up your hiking boots, and join us on an extraordinary adventure like no other. Explore the wilderness, push your limits, and find your inner explorer.</p>
        <p className="my-2 text-cyan-500 font-bold text-2xl">Mission</p>
        <p className="my-2">Our mission is to inspire and facilitate adventure travel that connects people with nature and cultures around the globe. We believe that every journey should be transformative, fostering personal growth and unforgettable memories.</p>
      </div>
    </div>
  );
}

export default About;