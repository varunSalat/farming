import {
  ArrowUpRight,
  ShieldCheckIcon,
  ShoppingBasketIcon,
  TractorIcon,
  WheatIcon,
} from "lucide-react";

const HeroWwoSection = () => {
  const wwoList = [
    {
      icon: <TractorIcon size={36} strokeWidth={1} />,
      name: "Professional Farmers",
      dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas necessitatibus laboriosam laborum quibusdam non cum magni est quos",
    },
    {
      icon: <ShoppingBasketIcon size={36} strokeWidth={1} />,
      name: "Fresh Vegetables",
      dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas necessitatibus laboriosam laborum quibusdam non cum magni est quos",
    },
    {
      icon: <WheatIcon size={36} strokeWidth={1} />,
      name: "Agriculture Products",
      dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas necessitatibus laboriosam laborum quibusdam non cum magni est quos",
    },
    {
      icon: <ShieldCheckIcon size={36} strokeWidth={1} />,
      name: "100% Guaranteed",
      dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas necessitatibus laboriosam laborum quibusdam non cum magni est quos",
    },
  ];
  return (
    <section className="flex gap-4 p-6">
      {wwoList.map((wwo, i) => (
        <div
          key={i}
          className="curv group relative w-[min(460px,100%)] cursor-pointer justify-between rounded-xl p-6 px-8 transition-three-all before:shadow-sm hover:-translate-y-3"
        >
          <div className="flex items-center gap-4 border-b border-black-5 pb-4">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-primary text-black">
              {wwo.icon}
            </div>
            <h2 className="text-2xl font-medium">{wwo.name}</h2>
          </div>
          <p className="mt-4 max-w-[360px] text-black-3">{wwo.dis}</p>
          <div className="absolute -bottom-2 right-2 grid h-12 w-12 place-items-center rounded-full bg-white text-black-3 transition-three-all group-hover:bg-secondary group-hover:text-white">
            <ArrowUpRight />
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroWwoSection;
