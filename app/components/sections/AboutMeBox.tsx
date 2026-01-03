"use client";

import { motion } from "framer-motion";

import useAnimateOnView from "@/app/hooks/useAnimateOnView";
import { Card, CardContent } from "@/components/ui/card";

const AboutMeBox = () => {
  const { ref: ref, animation: animation } = useAnimateOnView();

  return (
    <motion.div
      ref={ref}
      animate={animation}
      className="flex flex-col justify-center items-center w-full"
    >
      <div className="font-bold text-2xl md:text-3xl my-4">About Me</div>

      <Card className="w-full flex justify-center max-w-xl lg:max-w-none">
        <CardContent>
          <div className="text-center flex flex-col gap-y-3 max-w-[700px] pt-5">
            <div>
              <span className="font-bold">Senior ERP Developer and Full Stack Engineer</span> with{" "}
              <span className="font-bold">14+ years of experience</span> in designing and developing scalable
              enterprise solutions.
            </div>
            <div>
              Skilled in <span className="font-bold">.NET, Node.js, NestJS, SQL Server, RESTful APIs</span>, and
              system integrations with deep expertise in{" "}
              <span className="font-bold">ERP systems</span> and{" "}
              <span className="font-bold">database optimization</span>.
            </div>
            <div>
              Proven success in <span className="font-bold">improving system efficiency by 30%</span> through
              innovative architecture and automation. Strong leader and mentor experienced in{" "}
              <span className="font-bold">Agile/Scrum</span>, aligning technology with business goals.
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AboutMeBox;
