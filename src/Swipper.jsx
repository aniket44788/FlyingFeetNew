// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";
// import darjaling from "../src/assets/Swipper/darja.jpg";

// import { Pagination ,Autoplay } from "swiper/modules";

// const Swipper = () => {
//   return (
//     <div className="w-full bg-[#0f1b2d] py-6 px-4 md:px-10 lg:px-16">
      
//       {/* Centered Container */}
//       <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl shadow-2xl">
// <Swiper
//   pagination={{
//     dynamicBullets: true,
//   }}
//   autoplay={{
//     delay: 3000,
//     disableOnInteraction: false,
//   }}    
//   modules={[Pagination, Autoplay]}
//   className="w-full h-[250px] sm:h-[320px] md:h-[420px] lg:h-[500px]"
// >
//           {[1, 2, 3, 4, 5].map((item) => (
//             <SwiperSlide key={item}>
//               <div className="relative h-full w-full">
                
//                 <img
//                   src={darjaling}
//                   alt="Darjeeling"
//                   className="h-full w-full object-cover"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/30"></div>

//                 {/* Text */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <h1 className="text-xl font-bold text-white sm:text-3xl md:text-4xl">
//                     Beautiful Darjeeling
//                   </h1>
//                 </div>

//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//       </div>
//     </div>
//   );
// };

// export default Swipper;





// // import React from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";

// // import "swiper/css";
// // import "swiper/css/pagination";

// // import { Pagination, Autoplay } from "swiper/modules";

// // import darjaling from "../src/assets/Swipper/darja.jpg";

// // const Swipper = () => {
// //   return (
// //     <div className="bg-black py-10 px-4 md:px-10 lg:px-20">
// //       {/* Center Container */}
// //       <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl shadow-2xl">
        
// //         <Swiper
// //           pagination={{ dynamicBullets: true }}
// //           autoplay={{
// //             delay: 3000,
// //             disableOnInteraction: false,
// //           }}
// //           modules={[Pagination, Autoplay]}
// //           className="h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px]"
// //         >
// //           {[1, 2, 3, 4, 5].map((item) => (
// //             <SwiperSlide key={item}>
// //               <div className="relative h-full w-full">
                
// //                 {/* Image */}
// //                 <img
// //                   src={darjaling}
// //                   alt="Darjeeling"
// //                   className="h-full w-full object-cover"
// //                 />

// //                 {/* Dark Overlay */}
// //                 <div className="absolute inset-0 bg-black/30"></div>

// //                 {/* Center Text */}
// //                 <div className="absolute inset-0 flex items-center justify-center">
// //                   <h1 className="text-xl font-bold text-white sm:text-3xl md:text-4xl">
// //                     Beautiful Darjeeling
// //                   </h1>
// //                 </div>

// //               </div>
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Swipper;




import React from 'react'

function Swipper() {    
  return (
    <div>Swipper</div>
  )
}

export default Swipper