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
              My name is Arsalan Ahmed Khatri. As a Sr. Software Engineer with 14+ year of experience who loves{" "}
              <span className="font-bold">solving problems</span> and{" "}
              <span className="font-bold">building things</span>, especially in
              web development.
            </div>
            <div>
              I enjoy creating user-friendly applications and working with both{" "}
              <span className="font-bold">front-end</span> and{" "}
              <span className="font-bold">back-end</span> technologies. I love
              learning new things by expanding my experience through various
              side projects and challneges. With my excellent communication, leadership, and
              problem-solving skills, I am confident in my ability to drive successful outcomes
              for any organization to create solutions that exceed expectations.
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AboutMeBox;
