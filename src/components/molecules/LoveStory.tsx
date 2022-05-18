import { FaHeart } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const LoveStory = () => {
  return (
    <section className="mt-40 mb-20">
      <div className=" flex  justify-center">
        <p className="bg-[#EFF5F3] px-10 p-5 xs:text-4xl   border-y-2 font-beau block text-[#848383] text-6xl  ">
          Our love story
        </p>
      </div>
      <VerticalTimeline layout="2-columns" lineColor="#EFF5F3">
        <VerticalTimelineElement
          contentStyle={{ color: "#000" }}
          icon={<FaHeart />}
          iconStyle={{ background: "#9CC2BB", color: "#fff" }}
          className="vertical-timeline-element--work shadow-none font-quick"
        >
          <h3 className="vertical-timeline-element-title xs:text-xl text-[#5E9A8E] font-semibold">
            FIRST MEET
          </h3>
          <small className="vertical-timeline-element-subtitle text-sm text-black font-semibold">
            Jan 12 2021
          </small>
          <p className="text-[#767878]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            dolore nam magnam magni perferendis officia tenetur sapiente aliquam
            explicabo est laborum facere at repellat ut, corrupti, eius sed modi
            ex?s
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ color: "#000" }}
          icon={<FaHeart />}
          iconStyle={{ background: "#9CC2BB", color: "#fff" }}
          className="vertical-timeline-element--work font-quick"
        >
          <h3 className="vertical-timeline-element-title xs:text-xl text-[#5E9A8E] font-semibold">
            FIRST MEET
          </h3>
          <small className="vertical-timeline-element-subtitle text-sm text-black font-semibold">
            Jan 12 2021
          </small>
          <p className="text-[#767878]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            dolore nam magnam magni perferendis officia tenetur sapiente aliquam
            explicabo est laborum facere at repellat ut, corrupti, eius sed modi
            ex?s
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ color: "#000" }}
          icon={<FaHeart />}
          iconStyle={{ background: "#9CC2BB", color: "#fff" }}
          className="vertical-timeline-element--work font-quick"
        >
          <h3 className="vertical-timeline-element-title xs:text-xl text-[#5E9A8E] font-semibold">
            ENGAGEMENT
          </h3>
          <small className="vertical-timeline-element-subtitle text-sm text-black font-semibold">
            Jan 12 2021
          </small>
          <p className="text-[#767878]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            dolore nam magnam magni perferendis officia tenetur sapiente aliquam
            explicabo est laborum facere at repellat ut, corrupti, eius sed modi
            ex?s
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default LoveStory;
