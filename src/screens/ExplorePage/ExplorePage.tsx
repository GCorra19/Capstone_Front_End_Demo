import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { ScrollArea } from "../../components/ui/scroll-area";

const sidebarPages = [
  { label: "Overview", icon: "/vector.svg", active: false },
  { label: "Explore", icon: "/vector-1.svg", active: true },
  {
    label: "My Progress",
    icon: "/streamline-plump-business-progress-bar-2-remix.svg",
    active: false,
  },
];

const additionalResources = [
  { label: "About Spotter", icon: "/info.svg" },
  { label: "Reviews", icon: "/mingcute-comment-fill.svg" },
  { label: "Feature Requests", icon: "/bell.svg" },
  { label: "Report an Issue", icon: "/flowbite-exclamation-circle-solid.svg" },
  { label: "FAQS", icon: "/question.svg" },
];

const userCommitments = [
  { label: "Accessibility\nStatement" },
  { label: "Data & Privacy\nPolicy" },
  { label: "Disclaimers &\nLiability Policy" },
  { label: "AI Ethics\nStatement" },
  { label: "Safety Guidelines" },
];

const lowerBodyCategories = [
  {
    title: "Quads",
    exercises: [
      "Squat",
      "Leg Extension",
      "Split Squat",
      "Goblet Squat",
      "Hack Squat",
    ],
  },
  {
    title: "Hamstrings",
    exercises: ["Romanian\nDead Lift", "Leg Curls", "---", "---"],
  },
  {
    title: "Calves",
    exercises: ["Seated Calf\nRaises", "Standing\nCalf\nRaises"],
  },
];

const upperBodyCategories = [
  {
    title: "Chest",
    exercises: ["Bench Press", "Pec Deck Fly", "----", " ---"],
  },
  {
    title: "Back",
    exercises: ["Lat Pull-Down", "Cable Row", "---", "---"],
  },
  {
    title: "Arms",
    exercises: ["Bicep Curls", "Lateral Raises"],
  },
];

const fullBodyCategories = [
  {
    title: "High-Intensity",
    exercises: ["Hang Clean", "Deadlift"],
  },
  {
    title: "Low-Intensity",
    exercises: ["Overhead Press", "Assisted\nPull-Ups", "---"],
  },
  {
    title: "HIIT",
    exercises: ["Dips", "Farmer Walk"],
  },
];

export const ExplorePage = (): JSX.Element => {
  return (
    <div className="bg-foundation-bluedark-active w-full min-h-screen flex">
      <aside className="w-[212px] flex flex-col gap-2 p-4 border-r border-[#ffffff26]">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-6 bg-foundationbluenormal rounded-full overflow-hidden">
            <div className="h-full bg-[linear-gradient(180deg,rgba(74,151,239,1)_0%,rgba(199,223,250,1)_100%)]" />
          </div>
          <span className="font-14-regular text-white">Spotter</span>
        </div>

        <div className="relative w-44 h-[108px] rounded-[20px] mb-4 bg-[url(/card.png)] bg-cover bg-center">
          <img
            className="absolute top-[17px] left-2 w-[45px] h-[45px]"
            alt="Add video"
            src="/add-video.svg"
          />
          <div className="absolute bottom-3 left-3 right-3">
            <div className="font-semibold text-foundation-bluelight text-[15px] leading-8">
              Upload New Video
            </div>
          </div>
        </div>

        <nav className="flex flex-col gap-1">
          <div className="px-3 py-1">
            <span className="font-14-regular text-[#ffffff66]">Pages</span>
          </div>

          {sidebarPages.map((page, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`w-full justify-start gap-2 h-auto p-2 rounded-xl ${
                page.active ? "bg-foundationbluenormal" : ""
              }`}
            >
              {page.icon && (
                <img className="w-4 h-4" alt={page.label} src={page.icon} />
              )}
              <span className="font-14-regular text-white">{page.label}</span>
            </Button>
          ))}
        </nav>

        <nav className="flex flex-col gap-1 mt-4">
          <div className="px-3 py-1">
            <span className="font-14-regular text-[#ffffff66]">
              Additional Resources
            </span>
          </div>

          {additionalResources.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start gap-2 h-auto p-2 rounded-xl"
            >
              {item.icon && (
                <img className="w-4 h-4" alt={item.label} src={item.icon} />
              )}
              <span className="font-14-regular text-white">{item.label}</span>
            </Button>
          ))}
        </nav>

        <nav className="flex flex-col gap-1 mt-4">
          <div className="px-3 py-1">
            <span className="font-14-regular text-[#ffffff66]">
              User Commitments
            </span>
          </div>

          {userCommitments.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start h-auto p-2 rounded-xl"
            >
              <span className="font-14-regular text-white whitespace-pre-line text-left">
                {item.label}
              </span>
            </Button>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-20 flex items-center px-7 border-b border-[#ffffff26]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="font-14-regular text-[#ffffff66]">
                  Pages
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-[#ffffff26]">
                /
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink className="font-14-regular text-white">
                  Explore
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center gap-5 ml-auto">
            <div className="flex items-center gap-2 px-2 py-1 bg-[#ffffff1a] rounded-2xl w-40">
              <img className="w-4 h-4" alt="Search" src="/search.svg" />
              <Input
                placeholder="Search"
                className="border-0 bg-transparent font-14-regular text-[#ffffff33] p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 p-1 rounded-2xl"
              >
                <img className="w-4 h-4" alt="Sun" src="/sun.svg" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 p-1 rounded-2xl relative"
              >
                <img
                  className="absolute top-2 left-2.5 w-2.5 h-[11px]"
                  alt="Notification"
                  src="/group.png"
                />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src="/frame.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="font-14-regular text-white">John Doe</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold bg-[linear-gradient(90deg,rgba(74,151,239,1)_0%,rgba(233,235,248,1)_100%)] bg-clip-text text-transparent">
              Explore
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <section className="flex flex-col gap-6">
              <div className="relative w-full h-[163px] rounded-[22.72px] overflow-hidden shadow-[0px_4px_4px_#00000040]">
                <img
                  className="w-full h-full object-cover"
                  alt="Lower Body Lifts"
                  src="/pexels-photo-by-andrea-piacquadio-1.png"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="font-semibold text-white text-xl">
                    Lower Body Lifts
                  </h2>
                </div>
              </div>

              {lowerBodyCategories.map((category, catIndex) => (
                <div key={catIndex} className="flex flex-col gap-4">
                  <h3 className="font-semibold text-white text-xl">
                    {category.title}
                  </h3>
                  <div className="bg-[#131517] rounded-[10px] p-1">
                    <ScrollArea className="w-full">
                      <div className="flex gap-[31px] p-1">
                        {category.exercises.map((exercise, exIndex) => (
                          <Button
                            key={exIndex}
                            className="min-w-[162px] h-[63px] rounded-[9px] shadow-[0px_4px_4px_#00000040] bg-[linear-gradient(180deg,rgba(74,151,239,1)_0%,rgba(148,160,237,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(74,151,239,0.9)_0%,rgba(148,160,237,0.9)_100%)] font-normal text-white text-[17px] whitespace-pre-line"
                          >
                            {exercise}
                          </Button>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              ))}
            </section>

            <section className="flex flex-col gap-6">
              <div className="relative w-full h-[163px] rounded-[22.72px] overflow-hidden shadow-[0px_4px_4px_#00000040]">
                <img
                  className="w-full h-full object-cover"
                  alt="Upper Body Lifts"
                  src="/pexels-photo-by-andrea-piacquadio.png"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="font-semibold text-white text-xl">
                    Upper Body Lifts
                  </h2>
                </div>
              </div>

              {upperBodyCategories.map((category, catIndex) => (
                <div key={catIndex} className="flex flex-col gap-4">
                  <h3 className="font-semibold text-white text-xl">
                    {category.title}
                  </h3>
                  <div className="bg-[#131517] rounded-[10px] p-1">
                    <ScrollArea className="w-full">
                      <div className="flex gap-[31px] p-1">
                        {category.exercises.map((exercise, exIndex) => (
                          <Button
                            key={exIndex}
                            className="min-w-[162px] h-[63px] rounded-[9px] shadow-[0px_4px_4px_#00000040] bg-[linear-gradient(180deg,rgba(74,151,239,1)_0%,rgba(148,160,237,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(74,151,239,0.9)_0%,rgba(148,160,237,0.9)_100%)] font-normal text-white text-[17px] whitespace-pre-line"
                          >
                            {exercise}
                          </Button>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              ))}
            </section>

            <section className="flex flex-col gap-6">
              <div className="relative w-full h-[163px] rounded-[22.72px] overflow-hidden shadow-[0px_4px_4px_#00000040]">
                <img
                  className="w-full h-full object-cover"
                  alt="Full-Body Lifts"
                  src="/pexels-photo-by-binyamin-mellish.png"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="font-semibold text-white text-xl">
                    Full-Body Lifts
                  </h2>
                </div>
              </div>

              {fullBodyCategories.map((category, catIndex) => (
                <div key={catIndex} className="flex flex-col gap-4">
                  <h3 className="font-semibold text-white text-xl">
                    {category.title}
                  </h3>
                  <div className="bg-[#131517] rounded-[10px] p-1">
                    <ScrollArea className="w-full">
                      <div className="flex gap-[31px] p-1">
                        {category.exercises.map((exercise, exIndex) => (
                          <Button
                            key={exIndex}
                            className="min-w-[162px] h-[63px] rounded-[9px] shadow-[0px_4px_4px_#00000040] bg-[linear-gradient(180deg,rgba(74,151,239,1)_0%,rgba(148,160,237,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(74,151,239,0.9)_0%,rgba(148,160,237,0.9)_100%)] font-normal text-white text-[17px] whitespace-pre-line"
                          >
                            {exercise}
                          </Button>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};
