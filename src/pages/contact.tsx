import { audiowide } from "@/components/animated-text";
import NavButton from "@/components/nav-button";

export default function Contact() {
  return (
    <>
      <div
        className="relative h-screen w-screen overflow-hidden"
        style={{ backgroundColor: "#000000" }}
      >
        {/* Back button - positioned in top right */}
        <div className="absolute top-8 right-8 z-10">
          <NavButton href="/">← back</NavButton>
        </div>

        {/* Contact content */}
        <div className="flex items-center justify-center h-full">
          <div className="text-center space-y-8">
            <h1
              className={`${audiowide.className} font-bold text-6xl md:text-7xl lg:text-8xl mb-12`}
              style={{ color: "#ffffff" }}
            >
              contact
            </h1>

            <div className="space-y-6 text-lg md:text-xl">
              <div className="hover:text-red-500 transition-colors duration-200">
                <a href="mailto:hello@jy-8.com" className="font-bold">
                  hello@jy-8.com
                </a>
              </div>

              <div className="mt-8 text-muted-foreground">
                <p className="font-bold font-mono">JY-8 Design Agency</p>
                <p>Creating exceptional design experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
