import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage.",
      icon: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description:
        "We help you execute your plan and deliver results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Social Media",
      description:
        "We create social media strategies that drive engagement and growth.",
      icon: assets.social_icon,
    },
    {
      title: "Content Creation",
      description:
        "We produce high-quality content that resonates with your audience.",
      icon: assets.content_icon,
    },
  ];

  return (
    <div id="services" className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">

      <img src={assets.bgImage2} alt="" className="absolute -top-110 -left-70 -z-[1] dark:hidden" />

      <Title title="How can we help?" desc="From strategy to execution, we provide comprehensive solutions to meet your business needs." />

      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

    </div>
  );
}