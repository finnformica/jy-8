import AnimatedText from "@/components/animated-text";
import Dither from "@/components/dither";
import NavButton from "@/components/nav-button";

export default function Home() {
  return (
    <>
      <div
        className="relative h-screen w-screen overflow-hidden"
        style={{ backgroundColor: "#000000" }}
      >
        {/* Dithered background */}
        <div className="absolute inset-0 z-0">
          <Dither
            waveSpeed={0.02}
            waveFrequency={15}
            waveAmplitude={0.26}
            waveColor={[0.6, 0.4, 0.4]}
            colorNum={4}
            pixelSize={2}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.1}
          />
        </div>

        {/* Content overlay */}
        <div className="relative z-10">
          {/* Contact button */}
          <div className="absolute top-8 right-8 z-20">
            <NavButton href="/contact">contact</NavButton>
          </div>

          {/* Fixed background shadow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
                filter: "blur(40px)",
              }}
            />
          </div>

          {/* Main JY-8 text */}
          <div className="flex items-center justify-center h-screen">
            <h1 className="relative font-bold select-none transition-opacity duration-100 text-[20vw] sm:text-[18vw] md:text-[12vw] lg:text-[10vw] xl:text-[8vw] z-10">
              <AnimatedText
                style={{ color: "#ffffff" }}
                onHover={true}
                autoStart={true}
                cooldownMs={200}
              >
                JY-8
              </AnimatedText>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
