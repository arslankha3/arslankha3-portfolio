"use client";

import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";
import { Key, Lock, Fingerprint, Gauge, ShieldCheck, Code, Boxes, Network, Database, MessageCircle, AlertTriangle, Layout } from "lucide-react";

import stacks from "@/app/data/stacks";
import useAnimateOnView from "@/app/hooks/useAnimateOnView";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// custom wrapper to map lucide icons
const IconMapper: Record<string, JSX.Element> = {
  key: <Key className="max-h-[17px] h-full max-w-[17px] w-full" />,
  lock: <Lock className="max-h-[17px] h-full max-w-[17px] w-full" />,
  fingerprint: <Fingerprint className="max-h-[17px] h-full max-w-[17px] w-full" />,
  gauge: <Gauge className="max-h-[17px] h-full max-w-[17px] w-full" />,
  "shield-check": <ShieldCheck className="max-h-[17px] h-full max-w-[17px] w-full" />,
  code: <Code className="max-h-[17px] h-full max-w-[17px] w-full" />,
  boxes: <Boxes className="max-h-[17px] h-full max-w-[17px] w-full" />,
  network: <Network className="max-h-[17px] h-full max-w-[17px] w-full" />,
  messagecircle: <MessageCircle className="max-h-[17px] h-full max-w-[17px] w-full" />,
  database: <Database className="max-h-[17px] h-full max-w-[17px] w-full" />,
  "alert-triangle": <AlertTriangle className="max-h-[17px] h-full max-w-[17px] w-full" />,
  layout: <Layout className="max-h-[17px] h-full max-w-[17px] w-full" />,
};

const TechBox = () => {
  const { ref, animation } = useAnimateOnView();
  const { ref: ref2, animation: animation2 } = useAnimateOnView();

  return (
    <div className="flex flex-col gap-y-4">
      <motion.h1
        ref={ref}
        initial="hidden"
        animate={animation}
        className="font-bold text-2xl md:text-3xl text-center"
      >
        Tech Stacks
      </motion.h1>

      <motion.div ref={ref2} initial="hidden" animate={animation2}>
        <Card>
          <CardContent className="pt-5">
            <div className="flex flex-col gap-y-7">
              {stacks.map((stack, index) => (
                <div key={index}>
                  <div className="flex flex-col w-full gap-3">
                    <div className="flex gap-3 items-center w-full">
                      <h3 className="font-semibold">{stack.skill}</h3>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                      {stack.tools.map((tool, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="h-7 gap-x-1.5 text-sm flex items-center"
                        >
                          <div>{tool.name}</div>
                          {tool.icon &&
                            (IconMapper[tool.icon] ? (
                              IconMapper[tool.icon]
                            ) : (
                              <StackIcon
                                name={tool.icon}
                                className="max-h-[17px] h-full max-w-[17px] w-full"
                              />
                            ))}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default TechBox;
