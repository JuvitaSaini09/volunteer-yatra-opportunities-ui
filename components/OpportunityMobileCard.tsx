import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { VolunteerOpportunity } from "@/types";
import { Button } from "./ui/button";

interface OpportunityMobileCardProps {
  opportunity: VolunteerOpportunity;
  key: number;
}

const OpportunityMobileCard: React.FC<OpportunityMobileCardProps> = ({
  opportunity,
}) => {
  return (
    <Card className="relative border-none shadow-[0px_2px_7px_rgba(0,0,0,0.07)] w-[347px] h-[271px] p-0 rounded-[10px] overflow-hidden">
      <Image
        src={opportunity.image}
        alt="Opportunity image"
        fill
        className="object-cover"
      />

      <div className="absolute left-0 bottom-0 w-full h-[124px] bg-gray-cardbg opacity-[0.76] shadow-[0px_4px_12.5px_rgba(0,0,0,0.25)] backdrop-blur-[4.15px] rounded-b-[12px] px-[11px] py-3">
        <div>
          <span className="font-poppins font-semibold text-[10px] tracking-[0.24px] leading-[13.2px] text-peacock-green ">
            {opportunity.state}
          </span>
          <p className="font-poppins font-bold text-[14px] text-blue-green ">
            Volunteer in {opportunity.location}
          </p>
          <p className="font-poppins w-[261px] left-[34px] top-[362px] font-medium text-[12px] leading-[16px] tracking-[0.01em]capitalize text-peacock-green">
            {" "}
            This cottage is located in Naggar. we are one of the finest property
            in naggar.
          </p>
          <div className="flex items-center gap-2 mt-1">
            <Button className="font-poppins bg-yellow-tags p-2 h-[18px]  rounded-[6px] w-fit font-medium text-[10px] text-blue-green">
              Web Development
            </Button>
            <Button className="font-poppins bg-yellow-tags p-2 h-[18px]  rounded-[6px] w-fit font-medium text-[10px] text-blue-green">
              UI/UX
            </Button>
            <Button className="font-poppins bg-yellow-tags p-2 h-[18px]  rounded-[6px] w-fit font-medium text-[10px] text-blue-green">
              Content Creation
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OpportunityMobileCard;
