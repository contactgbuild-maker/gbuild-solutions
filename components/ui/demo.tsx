'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineSceneBasic() {
  return (
    <Card className="relative h-[540px] w-full overflow-hidden border-white/10 bg-black/[0.96]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex h-full flex-col md:flex-row">
        <div className="relative z-10 flex flex-1 flex-col justify-center p-8 md:p-10">
          <p className="text-[0.74rem] uppercase tracking-[0.22em] text-teal">
            3D Interaction Layer
          </p>
          <h2 className="mt-4 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-[clamp(2.5rem,5vw,4.4rem)] font-bold leading-[0.95] tracking-[-0.05em] text-transparent">
            Interactive 3D
          </h2>
          <p className="mt-5 max-w-lg text-[1rem] leading-8 text-neutral-300">
            Bring your UI to life with beautiful 3D scenes. Create immersive
            experiences that capture attention and reinforce the engineering depth
            behind the platform.
          </p>
        </div>

        <div className="relative flex-1">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </div>
      </div>
    </Card>
  );
}
