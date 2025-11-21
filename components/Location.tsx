import React from "react";

const Location = () => {
  return (
    <div className="lg:rounded-r-0 order-2 h-140 w-full grow overflow-hidden rounded-l-2xl rounded-r-2xl lg:order-1 lg:h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2863.6555944878296!2d15.214777276550436!3d44.131725521349566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761f1001d8e42b1%3A0x690b94ccd4081328!2sAugusta%20Cesarca%2030a!5e0!3m2!1shr!2shr!4v1763721924241!5m2!1shr!2shr"
        width="100%"
        height="100%"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
