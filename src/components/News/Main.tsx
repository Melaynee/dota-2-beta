import BlogCard from "../Home/News/BlogCard";

const data = [
  {
    title: "The Frostivus 2023 Update is Here!",
    date: "15 dec 2023",
    description:
      "Another Frostivus is upon us, and that means King Kringle has awakened from his hibernation under the wine-dark Blood Seas surrounding Frostivus Castle; sent his legions of abducted goblin-child toy miners to dig in his toy mines; hooked up his twin glowing red-eyed direwolves Lumpo and Rupertus to his bone sleigh; and is likely either on top of your house or inside of it right now.",
    img: "https://clan.cloudflare.steamstatic.com/images/3703047/22be4ece0013e6a79ccc4e4203a2f5f643378010.png",
    id: "Frostivus",
    link: "https://store.steampowered.com/app/570940/Dota_2/",
  },
  {
    title: "The Dark Night Before Frostivus!",
    date: "14 dec 2023",
    description: `Twas Frostivus Eve, and all 'cross the map,
        The neutrals were quiet, their camps left unstacked.
        We'd gorged on a feast of bluehorn and spiced creep,
        And had just settled in for a peaceful night's sleep.`,
    img: "https://clan.cloudflare.steamstatic.com/images/3703047/3de4244cdbd1c7dfed426be198ee088b15ff5550.png",
    id: "The Dark Night",
    link: "https://store.steampowered.com/app/570940/Dota_2/",
  },
  {
    title: "Gameplay Update 7.34e and What's Up Next",
    date: "21 nov 2023",
    description:
      "After nearly a year of coordination and production, the multi-week, arena-sized monster that is The International 2023 has come to an exciting close. We've locked up Climate Pledge Arena, we've all seen enough of Spirit Breaker, and we've just shipped Gameplay Update 7.34e. Time for the Dota team to settle down for a long winter's nap, and...",
    img: "https://clan.cloudflare.steamstatic.com/images//3703047/899e8493d00724b9b3b22ba2a5588fe1ed7ee03d.png",
    id: "7.34e",
    link: "https://store.steampowered.com/app/570940/Dota_2/",
  },
];

const Main = () => {
  return (
    <div className="bg-patchesPage min-h-[100vh] text-white ">
      <div className="mx-auto max-w-[800px] flex flex-col sm:grid grid-cols-2 gap-10 pt-10">
        {data.map((data) => (
          <BlogCard
            key={data.id}
            {...data}
            className="w-full md:w-[300px]  mx-auto group"
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
