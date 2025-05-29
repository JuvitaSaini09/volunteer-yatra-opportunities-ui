import { volunteerOpportunities } from "@/data/opportunities";
import React from "react";
import { BotMessageSquare } from "lucide-react";
import { CategoryType } from "@/types";
import OpportunityDesktopCard from "./OpportunityDesktopCard";
import OpportunityMobileCard from "./OpportunityMobileCard";

interface OpportunityCardsProps {
  selectedCategory: CategoryType;
}

const OpportunityCards: React.FC<OpportunityCardsProps> = ({
  selectedCategory,
}) => {
  const filteredOpportunities = volunteerOpportunities.filter(
    (opportunity) => !selectedCategory || opportunity.tag === selectedCategory
  );
  return (
    <div>
      <section className="hidden sm:flex justify-center items-center mt-5 mb-2">
        <div className="flex justify-center  items-center gap-5 flex-wrap max-w-[1280px]">
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
              <OpportunityDesktopCard
                key={opportunity.id}
                opportunity={opportunity}
              />
            );
          })}
        </div>
      </section>

      <section className="sm:hidden flex flex-col justify-center items-center mt-5 mb-2 gap-[13px]">
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
        {filteredOpportunities.map((opportunity) => (
          <OpportunityMobileCard
            key={opportunity.id}
            opportunity={opportunity}
          />
        ))}
      </section>
    </div>
  );
};

export default OpportunityCards;
