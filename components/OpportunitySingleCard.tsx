import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Badge, Heart } from "lucide-react";
import { VolunteerOpportunity } from "@/types";

interface OpportunityDesktopCard {
  opportunity: VolunteerOpportunity;
}

const OpportunityDesktopCard = ({ opportunity }: OpportunityDesktopCard) => {
  return (
    <Card className="border-none shadow-[0px_2px_7px_rgba(0,0,0,0.07)] flex flex-col gap-0 w-[280px] h-[374px] p-0 rounded-[8px] overflow-hidden">
      {/* Image section */}
      <div className="relative w-full h-[200px] aspect-[280/200]">
        <Image src={opportunity.image} fill alt="Opportunity image" />

        {opportunity.isNew && (
          <div className="absolute top-2 left-0 bg-[#747def] text-white px-2 py-[2px] text-[10px] font-medium rounded-r-md flex items-center gap-1">
            <Badge fill="white" size="10px" />
            <span>NEW</span>
          </div>
        )}

        <Heart
          className="absolute w-[21px] h-[18px] top-[15px] right-5"
          stroke={"white"}
        />
      </div>
      {/* Content section */}
      <CardContent className="py-4 px-[14px] space-y-[10px]">
        <div className="flex flex-col items-start gap-2 w-[255px] h-[65px] ">
          <div className="flex items-center gap-2 text-yellow-title font-bold text-[12px]">
            <Image
              src="/images/location.png"
              height={6}
              width={10}
              alt="location"
            />
            <span className="font-bold text-xs tracking-[0.24px] leading-[13.2px] text-yellow-title font-['Sansation',Helvetica]">
              {opportunity.state}
            </span>
          </div>
          <p className="font-['Sansation',Helvetica] text-font-primary text-base leading-4">
            <span className="leading-[22.4px] font-normal">
              Volunteer In {opportunity.location} as{" "}
            </span>
            <span className="leading-[22.4px] font-bold">
              {opportunity.skills}
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-[6px]">
            <span className="font-['Sansation',Helvetica] font-normal text-gray-subtitle text-[11px] ">
              {opportunity.hoursPerWeek}
            </span>
            {opportunity.roles.map((role) => (
              <div
                key={role}
                className="flex justify-center items-center gap-[5px] flex-nowrap"
              >
                <div className="bg-gray-subtitle h-[3px] w-[3px] rounded-full"></div>
                <p className="font-['Sansation',Helvetica] font-normal text-gray-subtitle text-[11px] tracking-[0.11px] leading-[12.1px]">
                  {role}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-[6px]">
            <span className="font-['Sansation',Helvetica] font-normal text-gray-subtitle text-[11px] ">
              {opportunity.minimumDuration}
            </span>
            <div className="flex justify-center items-center gap-[5px] flex-nowrap">
              <div className="bg-gray-subtitle h-[3px] w-[3px] rounded-full"></div>
              <p className="font-['Sansation',Helvetica] font-normal text-gray-subtitle text-[11px] tracking-[0.11px] leading-[12.1px]">
                {opportunity.accommodation}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center px-[4px] py-[2px] gap-2 w-[106px] h-5 bg-[#ffe55c1a] rounded-[46px]">
            <Image
              src="/images/hand.png"
              height={10}
              width={9}
              alt="hand"
              className="w-[9.09px] h-2.5"
            />
            <span className="font-['Roboto',Helvetica] font-medium text-[11px] tracking-[0.22px] leading-[12.1px]">
              {opportunity.tag}
            </span>
          </div>{" "}
        </div>
      </CardContent>
    </Card>
  );
};

export default OpportunityDesktopCard;
