import React from 'react'
import './Home.css'

const About = () => {
  return (
    <section id="about">
      
      <div className="aboutcontainer">
      <h1 className="header1">About Us</h1>
      <h2 className="header">Our Commitment</h2>
      <p className="content">
        We are committed to providing financial security to individuals and families during life’s uncertainties. From
        job loss to unexpected disabilities, our tailored insurance solutions are here to support you.
      </p>
      
      <h3 className="subHeader">Mission Statement</h3>
      <blockquote className="mission">
        "Our mission is to deliver personalized insurance plans that empower you to navigate life's challenges with
        confidence."
      </blockquote>
      
      <h3 className="subHeader">Core Values</h3>
      <ul className="valuesList">
        <li className="value1">Compassion</li>
        <li className="value1">Reliability</li>
        <li className="value1">Innovation</li>
      </ul>
    </div>

    </section>
  )
}

export default About


// import React from "react";
// import { FooterLink } from "./FooterLink";
// import { IconComponentNode } from "./IconComponentNode";
// import OBJECTS from "./OBJECTS.png";
// import PNG from "./PNG.svg";
// import { SocialIcon } from "./SocialIcon";
// import { SocialIcon1 } from "./SocialIcon1";
// import ellipse1 from "./ellipse-1.png";
// import favicon1 from "./favicon-1.svg";
// import favicon2 from "./favicon-2.svg";
// import fired from "./fired.svg";
// import illustration from "./illustration.png";
// import image from "./image.png";
// import logoAndSupportingText from "./logo-and-supporting-text.svg";
// import tomb1 from "./tomb-1.svg";
// import wheelchair from "./wheelchair.svg";

// export const Desktop = () => {
//   return (
//     <div className="bg-[#ffffff] flex flex-row justify-center w-full">
//       <div className="bg-[#ffffff] w-[1440px] h-[7262px] relative">
//         <div className="w-[1440px] h-[100px] gap-2.5 absolute top-0 left-0 bg-[#ffffff] flex items-center px-20 py-2.5">
//           <img
//             className="relative w-[84px] h-[84px] mt-[-2.00px] mb-[-2.00px]"
//             alt="Png"
//             src={PNG}
//           />

//           <div className="flex items-center justify-center gap-8 relative flex-1 grow">
//             <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
//               Home
//             </div>

//             <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
//               About Us
//             </div>

//             <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
//               Services
//             </div>

//             <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
//               Contact
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col w-[1440px] items-start absolute top-[100px] left-0">
//           <div className="h-[684px] justify-between relative self-stretch w-full [background:linear-gradient(180deg,rgb(218,227,254)_0%,rgb(255,255,255)_100%)] flex items-center px-20 py-2.5">
//             <div className="inline-flex flex-col items-start justify-center gap-6 relative flex-[0_0_auto]">
//               <p className="relative w-[606px] mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-transparent text-[64px] tracking-[0] leading-[72px]">
//                 <span className="text-black">Ensuring </span>

//                 <span className="text-[#5569ba]">Financial Security </span>

//                 <span className="text-black">
//                   and Peace of Mind for Every Step of Life
//                 </span>
//               </p>

//               <p className="relative w-[606px] [font-family:'Inter-Medium',Helvetica] font-medium text-neutral-600 text-xl tracking-[0] leading-[30px]">
//                 Comprehensive Insurance Solutions Tailored for Facility Workers
//                 and Employers
//               </p>
//             </div>

//             <img
//               className="relative w-[540.76px] h-[545px]"
//               alt="Illustration"
//               src={illustration}
//             />
//           </div>

//           <div className="flex w-[1440px] items-center justify-center gap-10 p-20 relative flex-[0_0_auto] bg-[#f7f9fc]">
//             <img
//               className="relative w-[634px] h-[409.95px]"
//               alt="Objects"
//               src={OBJECTS}
//             />

//             <div className="flex flex-col items-center gap-6 relative flex-1 grow">
//               <div className="flex flex-col items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
//                 <div className="relative w-[722px] mt-[-1.00px] ml-[-58.00px] mr-[-58.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-red text-base text-center tracking-[0] leading-6">
//                   About Us
//                 </div>

//                 <p className="relative w-[564px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-5xl text-center tracking-[0] leading-[56px]">
//                   Trusted Protection, Tailored for You
//                 </p>

//                 <p className="relative self-stretch [font-family:'Inter-Medium',Helvetica] font-medium text-neutral-600 text-base text-center tracking-[0] leading-6">
//                   We specialize in providing accessible and reliable insurance
//                   solutions for facility workers and employers. Our mission is
//                   to bridge the gap between protection and affordability,
//                   offering plans for job loss, disability, and life coverage.
//                   Together, we ensure that financial security is within
//                   everyone’s reach
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="relative w-[1440px] h-[608px] bg-[#fee7e7]">
//             <div className="w-[1306px] h-[243px] top-[73px] absolute left-20">
//               <div className="flex flex-col w-[1280px] items-center justify-center gap-4 absolute top-[7px] left-0">
//                 <div className="relative w-[722px] mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-red text-base text-center tracking-[0] leading-6">
//                   Our Mission
//                 </div>

//                 <p className="relative w-[500px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[32px] text-center tracking-[0] leading-[42px]">
//                   Empowering Lives Through Tailored Protection
//                 </p>

//                 <p className="relative w-[720px] [font-family:'Inter-Medium',Helvetica] font-medium text-neutral-600 text-2xl text-center tracking-[0] leading-8">
//                   Our mission is to provide tailored insurance solutions that
//                   empower you to face life’s challenges with confidence and
//                   peace of mind.
//                 </p>
//               </div>

//               <img
//                 className="left-[1111px] absolute w-[195px] h-[195px] top-0"
//                 alt="Favicon"
//                 src={favicon2}
//               />
//             </div>

//             <div className="w-[1280px] h-[195px] top-[339px] absolute left-20">
//               <div className="flex flex-col w-[1280px] items-center justify-center gap-4 absolute top-[17px] left-0">
//                 <div className="relative w-[722px] mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-red text-base text-center tracking-[0] leading-6">
//                   Our Core Values
//                 </div>

//                 <p className="relative w-[478px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[32px] text-center tracking-[0] leading-[42px]">
//                   The Pillars of Our Commitment to You
//                 </p>

//                 <div className="inline-flex items-start gap-8 relative flex-[0_0_auto]">
//                   <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-neutral-600 text-2xl text-center tracking-[0] leading-8 whitespace-nowrap">
//                     Compassion
//                   </div>

//                   <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-neutral-600 text-2xl text-center tracking-[0] leading-8 whitespace-nowrap">
//                     Innovation
//                   </div>

//                   <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-neutral-600 text-2xl text-center tracking-[0] leading-8 whitespace-nowrap">
//                     Reliability
//                   </div>
//                 </div>
//               </div>

//               <img
//                 className="left-3 absolute w-[195px] h-[195px] top-0"
//                 alt="Favicon"
//                 src={favicon1}
//               />
//             </div>
//           </div>

//           <div className="flex flex-col items-center gap-10 p-20 relative self-stretch w-full flex-[0_0_auto] bg-[#f7f9fc]">
//             <div className="flex flex-col w-[824px] items-center gap-6 relative flex-[0_0_auto]">
//               <div className="flex flex-col items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
//                 <div className="relative w-[722px] mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-red text-base text-center tracking-[0] leading-6">
//                   Employee Benefits
//                 </div>

//                 <p className="relative w-[682px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-5xl text-center tracking-[0] leading-[56px]">
//                   Empowering Employees with Comprehensive Coverage
//                 </p>

//                 <p className="relative self-stretch [font-family:'Inter-Medium',Helvetica] font-medium text-neutral-600 text-base text-center tracking-[0] leading-6">
//                   Your safety net for job loss, disability, and life’s
//                   uncertainties
//                 </p>
//               </div>
//             </div>

//             <div className="inline-flex items-center gap-20 relative flex-[0_0_auto]">
//               <div className="w-[280px] items-center gap-4 p-6 bg-blue rounded-3xl shadow-[inset_0px_-4px_4px_#00000040] flex flex-col relative">
//                 <img className="relative w-12 h-12" alt="Fired" src={fired} />

//                 <div className="self-stretch [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#ffffff] text-xl leading-[30px] relative tracking-[0]">
//                   Job Loss Coverage
//                 </div>

//                 <p className="[font-family:'Inter-SemiBold_Italic',Helvetica] font-semibold italic text-[#f0f425] relative self-stretch text-base tracking-[0] leading-6">
//                   Financial Support When You Need It Most
//                 </p>

//                 <p className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#f7f9fc] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
//                   Stay financially secure during periods of unemployment with
//                   our Job Loss Coverage. Receive timely financial assistance to
//                   manage essential expenses until you find new opportunities.
//                 </p>
//               </div>

//               <div className="flex flex-col w-[280px] items-center gap-4 p-6 relative self-stretch bg-[#ffffff] rounded-3xl shadow-[inset_0px_-4px_4px_#0000001f]">
//                 <img
//                   className="relative w-12 h-12"
//                   alt="Wheelchair"
//                   src={wheelchair}
//                 />

//                 <div className="relative self-stretch [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[30px]">
//                   Disability Coverage
//                 </div>

//                 <p className="[font-family:'Inter-SemiBold_Italic',Helvetica] font-semibold italic text-blue relative self-stretch text-base tracking-[0] leading-6">
//                   Protecting You from Life’s Unexpected Turns
//                 </p>

//                 <p className="font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-neutral-600 relative self-stretch text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
//                   Our Disability Coverage offers financial stability when life
//                   takes an unexpected turn. Get lifetime support for
//                   work-related injuries or illnesses that affect your ability to
//                   work
//                 </p>
//               </div>

//               <div className="flex flex-col w-[280px] items-center gap-4 p-6 relative self-stretch bg-[#ffffff] rounded-3xl shadow-[inset_0px_-4px_4px_#0000001f]">
//                 <img className="relative w-12 h-12" alt="Tomb" src={tomb1} />

//                 <div className="relative self-stretch [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[30px]">
//                   Life Insurance
//                 </div>

//                 <p className="[font-family:'Inter-SemiBold_Italic',Helvetica] font-semibold italic text-blue relative self-stretch text-base tracking-[0] leading-6">
//                   Supporting Families Through Life’s Toughest Moments
//                 </p>

//                 <p className="font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-neutral-600 relative self-stretch text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
//                   Ease the burden on families during tough times with our Death
//                   Coverage. Provide financial assistance to your loved ones for
//                   stability and peace of mind.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col items-center gap-10 p-20 relative self-stretch w-full flex-[0_0_auto] bg-[#e6edfc]">
//             <div className="flex flex-col w-[824px] items-center gap-6 relative flex-[0_0_auto]">
//               <div className="flex flex-col items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
//                 <div className="relative w-[722px] mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-red text-base text-center tracking-[0] leading-6">
//                   Employer Benefits
//                 </div>

//                 <p className="relative w-[778px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-5xl text-center tracking-[0] leading-[56px]">
//                   Streamline Insurance Management for Your Workforce
//                 </p>

//                 <p className="relative self-stretch [font-family:'Inter-Medium',Helvetica] font-medium text-neutral-600 text-base text-center tracking-[0] leading-6">
//                   Effortlessly Manage Policies, Payments, and Claims for Your
//                   Employees
//                 </p>
//               </div>
//             </div>

//             <div className="inline-flex items-center gap-20 relative flex-[0_0_auto]">
//               <div className="w-[280px] items-center gap-4 p-6 bg-red rounded-3xl shadow-[inset_0px_-4px_4px_#00000040] flex flex-col relative">
//                 <div className="self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#ffffff] text-xl leading-[30px] relative tracking-[0]">
//                   Manage Employee Policies
//                 </div>

//                 <p className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#f7f9fc] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
//                   Effortlessly access and update employee insurance details in
//                   one place. Ensure all policy information is accurate and up to
//                   date for seamless management
//                 </p>
//               </div>

//               <div className="flex flex-col w-[280px] items-center gap-4 p-6 relative self-stretch bg-[#ffffff] rounded-3xl shadow-[inset_0px_-4px_4px_#0000001f]">
//                 <div className="self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-xl leading-[30px] relative tracking-[0]">
//                   Streamline Payments
//                 </div>

//                 <p className="font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-neutral-600 relative self-stretch text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
//                   Track insurance premiums and simplify payment processes with
//                   ease. Manage individual or bulk payments efficiently, all in
//                   one platform
//                 </p>
//               </div>

//               <div className="flex flex-col w-[280px] items-center gap-4 p-6 relative self-stretch bg-[#ffffff] rounded-3xl shadow-[inset_0px_-4px_4px_#0000001f]">
//                 <div className="self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-xl leading-[30px] relative tracking-[0]">
//                   Support Requests
//                 </div>

//                 <p className="font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-neutral-600 relative self-stretch text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
//                   Handle employee claims and resolve issues quickly with the
//                   ticket system. Approve or escalate requests to ensure timely
//                   support and satisfaction
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col items-center gap-20 p-20 relative self-stretch w-full flex-[0_0_auto] bg-blue">
//             <div className="flex flex-col w-[824px] items-center gap-6 relative flex-[0_0_auto]">
//               <div className="flex flex-col items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
//                 <p className="relative w-[778px] mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-transparent text-5xl text-center tracking-[0] leading-[56px]">
//                   <span className="text-[#ffffff]">
//                     Building a Stronger Tomorrow: Our{" "}
//                   </span>

//                   <span className="text-[#74f60d]">Growth</span>

//                   <span className="text-[#ffffff]"> Story</span>
//                 </p>

//                 <p className="relative self-stretch [font-family:'Inter-Medium',Helvetica] font-medium text-[#fffeff] text-base text-center tracking-[0] leading-6">
//                   Since our inception in June 2020, VproTecht has made a lasting
//                   impact, providing insurance coverage to over 8.1 million lives
//                   and earning the prestigious National Start-up Award. With a
//                   strong nationwide presence, we continue to expand, reaching
//                   new milestones every year!
//                 </p>
//               </div>
//             </div>

//             <div className="flex w-[1100px] items-start justify-between relative flex-[0_0_auto]">
//               <div className="inline-flex flex-col items-center gap-6 relative flex-[0_0_auto]">
//                 <div className="flex flex-col items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
//                   <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#ffffff] text-5xl text-center tracking-[0] leading-[56px] whitespace-nowrap">
//                     1,369
//                   </div>

//                   <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-[#fffeff] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
//                     Partners
//                   </div>
//                 </div>
//               </div>

//               <div className="inline-flex flex-col items-center gap-6 relative flex-[0_0_auto]">
//                 <div className="flex flex-col items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
//                   <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#ffffff] text-5xl text-center tracking-[0] leading-[56px] whitespace-nowrap">
//                     180
//                   </div>

//                   <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-[#fffeff] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
//                     Employees
//                   </div>
//                 </div>
//               </div>

//               <div className="inline-flex flex-col items-center gap-6 relative flex-[0_0_auto]">
//                 <div className="flex flex-col items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
//                   <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#ffffff] text-5xl text-center tracking-[0] leading-[56px] whitespace-nowrap">
//                     8.1 M
//                   </div>

//                   <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-[#fffeff] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
//                     Lives Covered
//                   </div>
//                 </div>
//               </div>

//               <div className="inline-flex flex-col items-center gap-6 relative flex-[0_0_auto]">
//                 <div className="flex flex-col items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
//                   <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#ffffff] text-5xl text-center tracking-[0] leading-[56px] whitespace-nowrap">
//                     38K Cr
//                   </div>

//                   <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-[#fffeff] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
//                     Coverage
//                   </div>
//                 </div>
//               </div>

//               <div className="inline-flex flex-col items-center gap-6 relative flex-[0_0_auto]">
//                 <div className="flex flex-col items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
//                   <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#ffffff] text-5xl text-center tracking-[0] leading-[56px] whitespace-nowrap">
//                     69 Cr
//                   </div>

//                   <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-[#fffeff] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
//                     {" "}
//                     Claim Amount Serviced
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <p className="relative self-stretch [font-family:'Inter-Medium',Helvetica] font-medium text-[#fffeff] text-base text-center tracking-[0] leading-6">
//               All business conducted by our associate company, Svojas Insurance
//               Brokers and Risk Management Company Private Limited
//               (U67120TG2017PTC118828), IRDAI Broking License Code No. DB 718/17,
//               Certificate No. 627, License Category - Direct Broker (Life &amp;
//               General), valid until 09/11/2026. Data as of 31st October 2024.
//             </p>
//           </div>

//           <div className="flex flex-col items-center gap-20 p-20 relative self-stretch w-full flex-[0_0_auto] bg-[#f7f9fc]">
//             <div className="flex flex-col w-[824px] items-center gap-6 relative flex-[0_0_auto]">
//               <div className="flex flex-col items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
//                 <p className="relative w-[616px] mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-transparent text-5xl text-center tracking-[0] leading-[56px]">
//                   <span className="text-black">Why </span>

//                   <span className="text-[#5569ba]">VproTecht </span>

//                   <span className="text-black">is the Smart Choice?</span>
//                 </p>

//                 <p className="relative self-stretch [font-family:'Inter-Medium',Helvetica] font-medium text-neutral-600 text-base text-center tracking-[0] leading-6">
//                   At VproTecht, we are committed to providing insurance
//                   solutions that are tailored to meet the unique needs of every
//                   individual and business. Here&#39;s why we stand out as the
//                   smart choice:
//                 </p>
//               </div>
//             </div>

//             <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto]">
//               <div className="flex w-[1216px] items-start gap-8 relative flex-[0_0_auto]">
//                 <div className="flex flex-col items-center gap-5 relative flex-1 grow">
//                   <div className="items-center gap-2 self-stretch w-full flex-[0_0_auto] flex flex-col relative">
//                     <div className="self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-blue text-xl text-center leading-[30px] relative tracking-[0]">
//                       Comprehensive Coverage
//                     </div>

//                     <p className="font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-gray-600 text-center relative self-stretch text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
//                       With policies designed to cater to both personal and
//                       business needs, we offer a wide range of insurance options
//                       to ensure that you’re protected against life’s
//                       uncertainties. From job loss to disability and death
//                       coverage, we&#39;ve got you covered every step of the way.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex flex-col items-center gap-5 relative flex-1 grow">
//                   <div className="items-center gap-2 self-stretch w-full flex-[0_0_auto] flex flex-col relative">
//                     <div className="self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-blue text-xl text-center leading-[30px] relative tracking-[0]">
//                       Personalized Support
//                     </div>

//                     <p className="font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-gray-600 text-center relative self-stretch text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
//                       Our extensive network ensures that we serve millions
//                       across the country with personalized support. Whether
//                       you&#39;re in a metropolitan city or a remote location,
//                       our team is always ready to assist you in your journey
//                       toward financial security.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex flex-col items-center gap-5 relative flex-1 grow">
//                   <div className="items-center gap-2 self-stretch w-full flex-[0_0_auto] flex flex-col relative">
//                     <div className="self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-blue text-xl text-center leading-[30px] relative tracking-[0]">
//                       Innovative Technology
//                     </div>

//                     <p className="font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-gray-600 text-center relative self-stretch text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
//                       We leverage cutting-edge technology to streamline the
//                       insurance process. From easy policy management to seamless
//                       claims filing, our platform is designed for efficiency and
//                       simplicity, giving you peace of mind at every stage.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex w-[1216px] items-start gap-8 relative flex-[0_0_auto]">
//                 <div className="flex flex-col items-center gap-5 relative flex-1 grow">
//                   <div className="items-center gap-2 self-stretch w-full flex-[0_0_auto] flex flex-col relative">
//                     <div className="self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-blue text-xl text-center leading-[30px] relative tracking-[0]">
//                       Trusted by Millions
//                     </div>

//                     <p className="font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-gray-600 text-center relative self-stretch text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
//                       Over 8.1 million lives are covered by VproTecht, and our
//                       clients trust us for reliable, fast, and transparent
//                       services. Our commitment to excellence has earned us
//                       national recognition, including the prestigious National
//                       Start-up Award.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex flex-col items-center gap-5 relative flex-1 grow">
//                   <div className="items-center gap-2 self-stretch w-full flex-[0_0_auto] flex flex-col relative">
//                     <div className="self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-blue text-xl text-center leading-[30px] relative tracking-[0]">
//                       Customer-Centric Approach
//                     </div>

//                     <p className="font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-gray-600 text-center relative self-stretch text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
//                       We put your needs first. Our dedicated customer support
//                       ensures you get timely and empathetic assistance whenever
//                       required. We listen, understand, and adapt our services to
//                       provide the best solutions for your unique requirements.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex flex-col items-center gap-5 relative flex-1 grow">
//                   <div className="items-center gap-2 self-stretch w-full flex-[0_0_auto] flex flex-col relative">
//                     <div className="self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-blue text-xl text-center leading-[30px] relative tracking-[0]">
//                       Sustainable Growth and Stability
//                     </div>

//                     <p className="font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-gray-600 text-center relative self-stretch text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
//                       Since our establishment in 2020, we have achieved
//                       remarkable growth, handling over ₹69 Crores in claims and
//                       servicing a vast network of 1,369 partners. Our consistent
//                       performance reflects our commitment to creating lasting
//                       value for our customers.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col items-center gap-10 p-20 relative self-stretch w-full flex-[0_0_auto] bg-[#e6edfc]">
//             <div className="flex flex-col w-[824px] items-center gap-6 relative flex-[0_0_auto]">
//               <div className="flex flex-col items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
//                 <div className="relative w-[722px] mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-red text-base text-center tracking-[0] leading-6">
//                   Employer Benefits
//                 </div>

//                 <p className="relative w-[778px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-5xl text-center tracking-[0] leading-[56px]">
//                   Here to Help You Every Step of the Way
//                 </p>

//                 <p className="relative self-stretch [font-family:'Inter-Medium',Helvetica] font-medium text-neutral-600 text-base text-center tracking-[0] leading-6">
//                   Reach out to us for assistance with claims, payments, or any
//                   other concerns
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
//               <img
//                 className="relative w-[555.68px] h-[555.93px]"
//                 alt="Illustration"
//                 src={image}
//               />

//               <div className="flex flex-col w-[498px] items-start justify-center gap-6 relative">
//                 <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
//                   <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
//                     <div className="flex flex-col items-start gap-2 relative flex-1 grow">
//                       <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-6 whitespace-nowrap">
//                         Full Name
//                       </div>

//                       <div className="flex flex-col h-12 items-center justify-center gap-2.5 px-5 py-[22px] relative self-stretch w-full rounded-xl overflow-hidden border border-solid border-[#aaaaaa]">
//                         <div className="flex items-center justify-around gap-[219px] relative self-stretch w-full flex-[0_0_auto] mt-[-10.00px] mb-[-10.00px]">
//                           <div className="flex items-center gap-3 relative flex-1 grow">
//                             <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-neutral-600 text-base tracking-[0] leading-6 whitespace-nowrap">
//                               Full name
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
//                     <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
//                       <div className="flex flex-col items-start gap-2 relative flex-1 grow">
//                         <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-6 whitespace-nowrap">
//                           Email
//                         </div>

//                         <div className="flex flex-col h-12 items-center justify-center gap-2.5 px-5 py-[22px] relative self-stretch w-full rounded-xl overflow-hidden border border-solid border-[#aaaaaa]">
//                           <div className="flex items-center justify-around gap-[219px] relative self-stretch w-full flex-[0_0_auto] mt-[-10.00px] mb-[-10.00px]">
//                             <div className="flex items-center gap-3 relative flex-1 grow">
//                               <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-neutral-600 text-base tracking-[0] leading-6 whitespace-nowrap">
//                                 Email
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
//                       <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-6 whitespace-nowrap">
//                         Mobile
//                       </div>

//                       <div className="flex flex-col h-12 items-center justify-center gap-2.5 px-5 py-[22px] relative self-stretch w-full rounded-xl overflow-hidden border border-solid border-[#aaaaaa]">
//                         <div className="flex items-center justify-around gap-[219px] relative self-stretch w-full flex-[0_0_auto] mt-[-10.00px] mb-[-10.00px]">
//                           <div className="flex items-center gap-3 relative flex-1 grow">
//                             <div className="w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-neutral-600 tracking-[0] leading-6 whitespace-nowrap relative text-base">
//                               Mobile
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
//                       <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-6 whitespace-nowrap">
//                         Inquiry Type
//                       </div>

//                       <div className="flex flex-col h-12 items-center justify-center gap-2.5 px-5 py-[22px] relative self-stretch w-full rounded-xl overflow-hidden border border-solid border-[#aaaaaa]">
//                         <div className="flex items-center justify-around gap-[219px] relative self-stretch w-full flex-[0_0_auto] mt-[-10.00px] mb-[-10.00px]">
//                           <div className="flex items-center gap-3 relative flex-1 grow">
//                             <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-neutral-600 text-base tracking-[0] leading-6 whitespace-nowrap">
//                               Select
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
//                     <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-6 whitespace-nowrap">
//                       Message
//                     </div>

//                     <div className="flex flex-col h-[162px] items-center gap-2.5 px-5 py-4 relative self-stretch w-full rounded-xl overflow-hidden border border-solid border-[#aaaaaa]">
//                       <div className="flex items-center justify-around gap-[219px] relative self-stretch w-full flex-[0_0_auto]">
//                         <div className="flex items-center gap-3 relative flex-1 grow">
//                           <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-neutral-600 text-base tracking-[0] leading-6 whitespace-nowrap">
//                             Leave us a message
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col items-center gap-[43px] relative self-stretch w-full flex-[0_0_auto]">
//                   <div className="flex flex-col w-60 items-center justify-center gap-2.5 px-0 py-4 relative flex-[0_0_auto] bg-blue rounded-2xl overflow-hidden shadow-[inset_0px_-4px_4px_#00000040]">
//                     <div className="inline-flex items-center justify-center gap-8 relative flex-[0_0_auto]">
//                       <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
//                         <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#ffffff] text-xl tracking-[0] leading-[30px] whitespace-nowrap">
//                           Submit
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col w-[1440px] items-center gap-10 p-20 relative flex-[0_0_auto] bg-[#f7f9fc]">
//             <div className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
//               <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
//                 <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-red text-base text-center tracking-[0] leading-6">
//                   What They Say About Us
//                 </p>

//                 <div className="relative self-stretch [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-5xl text-center tracking-[0] leading-[56px]">
//                   Real Stories, Real Impact
//                 </div>
//               </div>

//               <div className="flex flex-col items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
//                 <p className="relative w-[660px] mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-neutral-600 text-base text-center tracking-[0.16px] leading-6">
//                   Discover how VproTecht has transformed lives with reliable
//                   insurance solutions and exceptional support
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col w-[910px] items-center justify-center gap-9 p-8 relative flex-[0_0_auto] bg-[#f5f6f8] rounded-[32px]">
//               <div className="flex flex-col w-[720px] items-center gap-4 relative flex-[0_0_auto]">
//                 <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#1757c2] text-xl text-center tracking-[0.20px] leading-[30px]">
//                   Reliable and Transparent Service!
//                 </div>

//                 <p className="relative self-stretch [font-family:'Inter-Medium',Helvetica] font-medium text-neutral-600 text-base text-center tracking-[0.16px] leading-6">
//                   VproTecht has been a game-changer for me. Filing a claim for
//                   job loss was seamless, and their team was incredibly
//                   supportive throughout the process. They truly understand the
//                   needs of their customers
//                 </p>
//               </div>

//               <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
//                 <img
//                   className="relative w-20 h-20 object-cover"
//                   alt="Ellipse"
//                   src={ellipse1}
//                 />

//                 <div className="self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[#666666] text-center tracking-[0.16px] leading-7 relative text-base">
//                   Name
//                 </div>
//               </div>
//             </div>
//           </div>

//           <footer className="flex flex-col w-[1440px] items-start relative flex-[0_0_auto] bg-white">
//             <div className="flex flex-col items-center gap-16 px-0 py-12 relative self-stretch w-full flex-[0_0_auto] bg-[#bdd0fb]">
//               <div className="flex flex-col w-[1280px] items-start gap-16 px-8 py-0 relative flex-[0_0_auto]">
//                 <div className="items-start gap-8 flex relative self-stretch w-full flex-[0_0_auto]">
//                   <div className="items-start gap-2 flex-1 self-stretch grow flex flex-col relative">
//                     <div className="self-stretch mt-[-1.00px] font-text-xl-semibold font-[number:var(--text-xl-semibold-font-weight)] text-gray-900 text-[length:var(--text-xl-semibold-font-size)] leading-[var(--text-xl-semibold-line-height)] relative tracking-[var(--text-xl-semibold-letter-spacing)] [font-style:var(--text-xl-semibold-font-style)]">
//                       Contact Us
//                     </div>

//                     <p className="[font-family:'Inter-Medium',Helvetica] font-medium text-neutral-600 relative self-stretch text-base tracking-[0] leading-6">
//                       Call our support team for personalized assistance.
//                     </p>
//                   </div>

//                   <div className="inline-flex items-start gap-4 relative flex-[0_0_auto]">
//                     <button className="all-[unset] box-border items-start rounded-lg inline-flex relative flex-[0_0_auto]">
//                       <div className="inline-flex items-center justify-center gap-2 px-[18px] py-2.5 bg-blue rounded-lg overflow-hidden border border-solid shadow-shadow-xs relative flex-[0_0_auto] border-blue">
//                         <div className="w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-white text-[length:var(--text-md-semibold-font-size)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap relative tracking-[var(--text-md-semibold-letter-spacing)] [font-style:var(--text-md-semibold-font-style)]">
//                           7893163266
//                         </div>
//                       </div>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col items-center gap-10 pt-16 pb-12 px-0 relative self-stretch w-full flex-[0_0_auto]">
//               <div className="flex w-[1280px] gap-12 flex-col items-start px-8 py-0 relative flex-[0_0_auto]">
//                 <div className="items-start justify-between flex relative self-stretch w-full flex-[0_0_auto]">
//                   <img
//                     className="relative flex-[0_0_auto]"
//                     alt="Logo and supporting"
//                     src={logoAndSupportingText}
//                   />

//                   <div className="flex w-[612px] items-start gap-8 relative">
//                     <div className="flex flex-col items-start gap-4 relative flex-1 grow">
//                       <div className="relative self-stretch mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-gray-500 text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] [font-style:var(--text-sm-semibold-font-style)]">
//                         Company
//                       </div>

//                       <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
//                         <FooterLink
//                           badge={false}
//                           buttonButtonBaseText="Contact"
//                           className="!flex-[0_0_auto]"
//                           color="gray"
//                           state="default"
//                           theme="light"
//                         />
//                         <FooterLink
//                           badge={false}
//                           buttonButtonBaseText="News"
//                           className="!flex-[0_0_auto]"
//                           color="gray"
//                           state="default"
//                           theme="light"
//                         />
//                         <FooterLink
//                           badge={false}
//                           className="!flex-[0_0_auto]"
//                           color="gray"
//                           state="default"
//                           theme="light"
//                         />
//                       </div>
//                     </div>

//                     <div className="flex flex-col items-start gap-4 relative flex-1 grow">
//                       <div className="relative self-stretch mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-gray-500 text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] [font-style:var(--text-sm-semibold-font-style)]">
//                         Quick Links
//                       </div>

//                       <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
//                         <FooterLink
//                           badge={false}
//                           buttonButtonBaseText="Home"
//                           className="!flex-[0_0_auto]"
//                           color="gray"
//                           state="default"
//                           theme="light"
//                         />
//                         <FooterLink
//                           badge={false}
//                           buttonButtonBaseText="About"
//                           className="!flex-[0_0_auto]"
//                           color="gray"
//                           state="default"
//                           theme="light"
//                         />
//                         <FooterLink
//                           badge={false}
//                           buttonButtonBaseText="Services"
//                           className="!flex-[0_0_auto]"
//                           color="gray"
//                           state="default"
//                           theme="light"
//                         />
//                         <FooterLink
//                           badge={false}
//                           buttonButtonBaseText="Customers"
//                           className="!flex-[0_0_auto]"
//                           color="gray"
//                           state="default"
//                           theme="light"
//                         />
//                       </div>
//                     </div>

//                     <div className="flex flex-col items-start gap-4 relative flex-1 grow">
//                       <div className="relative self-stretch mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-gray-500 text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] [font-style:var(--text-sm-semibold-font-style)]">
//                         Legal
//                       </div>

//                       <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
//                         <FooterLink
//                           badge={false}
//                           buttonButtonBaseText="Terms"
//                           className="!flex-[0_0_auto]"
//                           color="gray"
//                           state="default"
//                           theme="light"
//                         />
//                         <FooterLink
//                           badge={false}
//                           buttonButtonBaseText="Privacy"
//                           className="!flex-[0_0_auto]"
//                           color="gray"
//                           state="default"
//                           theme="light"
//                         />
//                         <FooterLink
//                           badge={false}
//                           buttonButtonBaseText="Cookies"
//                           className="!flex-[0_0_auto]"
//                           color="gray"
//                           state="default"
//                           theme="light"
//                         />
//                         <FooterLink
//                           badge={false}
//                           buttonButtonBaseText="Licenses"
//                           className="!flex-[0_0_auto]"
//                           color="gray"
//                           state="default"
//                           theme="light"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="inline-flex gap-8 flex-col items-start px-8 py-0 relative flex-[0_0_auto]">
//                 <div className="relative self-stretch w-full h-px bg-gray-200" />

//                 <div className="items-center gap-8 flex relative self-stretch w-full flex-[0_0_auto]">
//                   <p className="relative flex-1 mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-gray-500 text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
//                     © 2024 VproTecht. All rights reserved.
//                   </p>

//                   <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
//                     <SocialIcon className="!relative !w-6 !h-6" />
//                     <IconComponentNode className="!relative !w-6 !h-6" />
//                     <SocialIcon1 className="!relative !w-6 !h-6" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// };

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         blue: "var(--blue)",
//         "brand-600": "var(--brand-600)",
//         "gray-200": "var(--gray-200)",
//         "gray-500": "var(--gray-500)",
//         "gray-600": "var(--gray-600)",
//         "gray-900": "var(--gray-900)",
//         red: "var(--red)",
//         white: "var(--white)",
//       },
//       fontFamily: {
//         "text-md-regular": "var(--text-md-regular-font-family)",
//         "text-md-semibold": "var(--text-md-semibold-font-family)",
//         "text-sm-semibold": "var(--text-sm-semibold-font-family)",
//         "text-xl-semibold": "var(--text-xl-semibold-font-family)",
//       },
//       boxShadow: {
//         "shadow-xs": "var(--shadow-xs)",
//       },
//     },
//   },
//   plugins: [],
// };

// file name => tailwind.css
// @tailwind components;
// @tailwind utilities;

// @layer components {
//   .all-\[unset\] {
//     all: unset;
//   }
// }

// :root {
//   --blue: rgba(85, 105, 186, 1);
//   --brand-600: rgba(127, 86, 217, 1);
//   --gray-200: rgba(234, 236, 240, 1);
//   --gray-500: rgba(102, 112, 133, 1);
//   --gray-600: rgba(71, 84, 103, 1);
//   --gray-900: rgba(16, 24, 40, 1);
//   --red: rgba(224, 53, 48, 1);
//   --shadow-xs: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
//   --text-md-regular-font-family: "Inter", Helvetica;
//   --text-md-regular-font-size: 16px;
//   --text-md-regular-font-style: normal;
//   --text-md-regular-font-weight: 400;
//   --text-md-regular-letter-spacing: 0px;
//   --text-md-regular-line-height: 24px;
//   --text-md-semibold-font-family: "Inter", Helvetica;
//   --text-md-semibold-font-size: 16px;
//   --text-md-semibold-font-style: normal;
//   --text-md-semibold-font-weight: 600;
//   --text-md-semibold-letter-spacing: 0px;
//   --text-md-semibold-line-height: 24px;
//   --text-sm-semibold-font-family: "Inter", Helvetica;
//   --text-sm-semibold-font-size: 14px;
//   --text-sm-semibold-font-style: normal;
//   --text-sm-semibold-font-weight: 600;
//   --text-sm-semibold-letter-spacing: 0px;
//   --text-sm-semibold-line-height: 20px;
//   --text-xl-semibold-font-family: "Inter", Helvetica;
//   --text-xl-semibold-font-size: 20px;
//   --text-xl-semibold-font-style: normal;
//   --text-xl-semibold-font-weight: 600;
//   --text-xl-semibold-letter-spacing: 0px;
//   --text-xl-semibold-line-height: 30px;
//   --white: rgba(255, 255, 255, 1);
// }