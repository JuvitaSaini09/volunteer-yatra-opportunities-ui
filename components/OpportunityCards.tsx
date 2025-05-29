import { volunteerOpportunities } from "@/data/opportunities";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Badge, BotMessageSquare, Heart } from "lucide-react";
import { CategoryType } from "@/types";
import { Button } from "./ui/button";

interface OpportunityCardProps {
  selectedCategory: CategoryType;
}

const OpportunityCards = ({ selectedCategory }: OpportunityCardProps) => {
  const filteredOpportunities = volunteerOpportunities.filter(
    (opportunity) => !selectedCategory || opportunity.tag === selectedCategory
  );
  return (
    <div>
      <section className="hidden md:flex justify-center items-center mt-5 mb-2">
        <div className="flex justify-center  items-center gap-5 flex-wrap ">
          {filteredOpportunities.length === 0 && (
            <div className="flex justify-center items-center mt-28 gap-2">
              <p className="leading-[22.4px] text-2xl font-bold">
                {" "}
                No{" "}
                <span className="border-b-2 border-b-yellow-primary">
                  opportunities
                </span>{" "}
                found!
              </p>
              <BotMessageSquare size="60px" className="text-yellow-primary" />
            </div>
          )}
          {filteredOpportunities.map((opportunity) => {
            return (
              <Card
                className="border-none shadow-[0px_2px_7px_rgba(0,0,0,0.07)] flex flex-col gap-0 w-[280px] h-[374px] p-0 rounded-[8px] overflow-hidden"
                key={opportunity.id}
              >
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
                      <span className="font-['Sansation',Helvetica] font-normal text-[#c5c5c5] text-[11px] ">
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
                      <span className="font-['Sansation',Helvetica] font-normal text-[#c5c5c5] text-[11px] ">
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
          })}
        </div>
      </section>

      <section className="md:hidden flex flex-col justify-center items-center mt-5 mb-2 gap-[13px]">
        {filteredOpportunities.map((opportunity) => (
          <Card
            key={opportunity.id}
            className="relative border-none shadow-[0px_2px_7px_rgba(0,0,0,0.07)] w-[347px] h-[271px] p-0 rounded-[10px] overflow-hidden"
          >
            <Image
              src={opportunity.image}
              alt="Opportunity image"
              fill
              className="object-cover"
            />

            <div className="absolute left-0 bottom-0 w-full h-[124px] bg-[rgba(247,247,247,0.74)] opacity-[0.76] shadow-[0px_4px_12.5px_rgba(0,0,0,0.25)] backdrop-blur-[4.15px] rounded-b-[12px] px-[11px] py-3">
              <div>
                <span className="font-semibold text-[10px] tracking-[0.24px] leading-[13.2px] text-[rgba(17, 64, 71, 0.75)] font-['Sansation',Helvetica]">
                  {opportunity.state}
                </span>
                <p className="font-bold text-[14px] text-[#114047] ">
                  Volunteer in {opportunity.location}
                </p>
                <p className="w-[261px] left-[34px] top-[362px] font-medium text-[12px] leading-[16px] tracking-[0.01em]capitalize text-[rgba(17,64,71,0.75)]">
                  {" "}
                  This cottage is located in Naggar. we are one of the finest
                  property in naggar.
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <Button className="bg-[#E3BF00] p-2 h-[18px]  rounded-[6px] w-fit font-medium text-[10px] text-[#114047">
                    Web Development
                  </Button>
                  <Button className="bg-[#E3BF00] p-2 h-[18px]  rounded-[6px] w-fit font-medium text-[10px] text-[#114047">
                    UI/UX
                  </Button>
                  <Button className="bg-[#E3BF00] p-2 h-[18px]  rounded-[6px] w-fit font-medium text-[10px] text-[#114047">
                    Content Creation
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default OpportunityCards;
