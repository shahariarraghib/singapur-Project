import React from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { BsArrowRight} from "react-icons/bs"

const AccomodationCard = ({accomodation}) => {
  return (
      <div className="accomodation_card_bg row p-3 p-md-5 g-3 g-lg-5 my-3 my-lg-5">
        <div className="col-12 col-lg-6">
          <p className="accomodation_bluetitle">{accomodation?.blueTitle}</p>
          <p className="accomodation_title">{accomodation?.title}</p>
          <p className="accomodation_content">
          {accomodation?.content1}
          </p>
          <p className="accomodation_content">
          {accomodation?.content2}
          </p>
          <p className="accomodation_content">
          {accomodation?.specialContent}
          </p>
          <a href=""><Button className="primary__btn gap arrow__btn arrow__btn5">Learn More <BsArrowRight/></Button></a>
        </div>
        <div className="col-12 col-lg-6">
          <Image className="w-100" src={accomodation?.pic} alt="img" />
        </div>
      </div>
  );
};

export default AccomodationCard;
