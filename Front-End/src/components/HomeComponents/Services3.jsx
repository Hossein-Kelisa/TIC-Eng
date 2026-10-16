import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Services3.css";
import Fades from "../RestComponents/Fades";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function Services() {
  const { t } = useTranslation();
  const dir = i18n.language === "fa" ? "rtl" : "ltr";

  const services = [
    {
      id: "inspection",
      title: t("services.Inspection.title"),
      shortExplain: t("services.Inspection.shortExplain"),
      image:
        "https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto/65cdbc34b9d510ec993c0cb6_654c9fb1fbfb300821c1a860_manual_20inspection-min_angb56.jpg",
    },
    {
      id: "technical-supervision",
      title: t("services.Technical Supervision.title"),
      shortExplain: t("services.Technical Supervision.shortExplain"),
      image:
        "https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto/service-technical-supervision_zjsylr.jpg",
    },
    {
      id: "training",
      title: t("services.Training.title"),
      shortExplain: t("services.Training.shortExplain"),
      image:
        "https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto/service-training_koeu6e.jpg",
    },
    {
      id: "expert-assessment",
      title: t("services.Expert Assessment.title"),
      shortExplain: t("services.Expert Assessment.shortExplain"),
      image:
        "https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto/service-expert-assessment_mpyi2y.jpg",
    },
    {
      id: "standards-development",
      title: t("services.Standards Development.title"),
      shortExplain: t("services.Standards Development.shortExplain"),
      image:
        "https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto/service-standard-developmnet_nwdbfv.jpg",
    },
  ];

  return (
    <div className="services-section" dir={dir}>
      <Fades>
        <span className="service-title">{t("services.title")}</span>
        <p className="service-description">Tic-Eng is a leading specialist in technical inspection and conformity assessment. By combining the technical expertise of our engineers with a robust quality management system, we are committed to continuous improvement, achieving our objectives, and delivering the highest levels of customer and client satisfaction.</p> 
      </Fades>
      <Swiper
        key={dir} // Add key prop to force re-render on direction change
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={40}
        slidesPerView={1}
        className="services-swiper"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <article className="service-slide">
              <img src={service.image} alt={service.title} />

              <div className="service-overlay">
                <h2>{service.title}</h2>

                <p>{service.shortExplain}</p>

                <Link to={`/services/${service.id}`}>
                  {t("services.readMore")}
                </Link>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Services;
