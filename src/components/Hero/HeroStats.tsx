import Image from "next/image";
import React from "react";
import agi from "/public/images/icons/agi.png";
import str from "/public/images/icons/str.png";
import int from "/public/images/icons/int.png";

const heroAttack = (hero: any) => {
  if (hero.primary_attribute === "str") {
    return (
      hero.base_str +
      hero.base_attack_min +
      "-" +
      (hero.base_str + hero.base_attack_max)
    );
  }
  if (hero.primary_attribute === "agi") {
    return (
      hero.base_agi +
      hero.base_attack_min +
      "-" +
      (hero.base_agi + hero.base_attack_max)
    );
  }
  if (hero.primary_attribute === "int") {
    return (
      hero.base_int +
      hero.base_attack_min +
      "-" +
      (hero.base_int + hero.base_attack_max)
    );
  }
  return (
    (
      hero.base_attack_min +
      (hero.base_str + hero.base_agi + hero.base_int) * 0.7
    ).toFixed(0) +
    "-" +
    (
      hero.base_attack_max +
      (hero.base_str + hero.base_agi + hero.base_int) * 0.7
    ).toFixed(0)
  );
};

const HeroStats = ({ heroData }: { heroData: any }) => {
  return (
    <div className="h-[200px] bg-[#171A1B] flex justify-around py-5 border-t-2 border-b-2 border-[#2C2E2E] shadow-[0_0_30px_#000]">
      {heroData.map((hero: any) => (
        <div key={hero.id} className="flex justify-around items-end">
          <div>
            <div className="flex justify-around w-[427px]">
              <div className="flex flex-col">
                <Image
                  src={`https://cdn.cloudflare.steamstatic.com${hero.img}`}
                  alt={hero.localized_name}
                  width={150}
                  height={84}
                />
                <div className="w-[150px] h-[20px] bg-gradient-to-r from-[#286323] to-[#7AF03C] flex items-center justify-end gap-8 pr-1">
                  <p className="text-white font-semibold text-center text-shadow">
                    {hero.base_health + hero.base_str * 22}
                  </p>
                  <p className="font-light text-xs text-shadow">
                    +{(hero.base_str * 0.1 + hero.base_health_regen).toFixed(1)}
                  </p>
                </div>
                <div className="w-[150px] h-[20px] bg-gradient-to-r from-[#1056DB] to-[#73F5FE] flex items-center justify-end gap-8 pr-1">
                  <p className="text-white font-semibold text-center text-shadow">
                    {hero.base_mana + hero.base_int * 12}
                  </p>
                  <p className="font-light text-xs text-shadow">
                    +{(hero.base_int * 0.05 + hero.base_mana_regen).toFixed(1)}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-around">
                <div className="flex gap-5 items-center">
                  <Image src={str} alt="strength" width={32} height={32} />
                  <div className="flex items-center gap-2">
                    <p className="text-white font-semibold text-2xl text-shadow">
                      {hero.base_str}
                    </p>
                    <p className="font-light text-sm text-shadow text-white/60">
                      +{hero.str_gain}
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <Image src={agi} alt="agility" width={32} height={32} />
                  <div className="flex items-center gap-2">
                    <p className="text-white font-semibold text-2xl text-shadow">
                      {hero.base_agi}
                    </p>
                    <p className="font-light text-sm text-shadow text-white/60">
                      +{hero.agi_gain}
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <Image src={int} alt="intelligence" width={32} height={32} />
                  <div className="flex items-center gap-2">
                    <p className="text-white font-semibold text-2xl text-shadow">
                      {hero.base_int}
                    </p>
                    <p className="font-light text-sm text-shadow text-white/60">
                      +{hero.int_gain}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="mt-3 text-center text-xl text-shadow text-white/60 font-light uppercase tracking-widest">
              Attributes
            </h3>
          </div>
          <div className="flex flex-col justify-between h-full  border-l-[1px] border-r-[1px] border-white/40">
            <div className="flex justify-around w-[427px]">
              <div className="grid grid-cols-3 gap-5 place-items-center">
                {hero.roles.map((role: any) => (
                  <p
                    key={role}
                    className="text-white font-semibold text-2xl text-shadow"
                  >
                    {role}
                  </p>
                ))}
              </div>
            </div>
            <h3 className="mt-3 text-center text-xl text-shadow text-white/60 font-light uppercase tracking-widest">
              Roles
            </h3>
          </div>
          <div>
            <div className="flex justify-around w-[427px] h-full pt-2">
              <div className="flex flex-col justify-around w-[80px]">
                <h4 className="uppercase tracking-wider text-white/60 text-base text-center mb-1">
                  ATTACK
                </h4>
                <p className="text-sm text-white text-shadow flex gap-2 mb-1">
                  <Image
                    src={
                      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png"
                    }
                    alt="damage"
                    width={24}
                    height={24}
                  />
                  {heroAttack(hero)}
                </p>
                <p className="text-sm text-white text-shadow flex gap-2 mb-1">
                  <Image
                    src={
                      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png"
                    }
                    alt="attack_time"
                    width={24}
                    height={24}
                  />
                  {hero.attack_rate}
                </p>
                <p className="text-sm text-white text-shadow flex gap-2 mb-1">
                  <Image
                    src={
                      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png"
                    }
                    alt="attack_range"
                    width={24}
                    height={24}
                  />
                  {hero.attack_range}
                </p>

                <p className="text-sm text-white text-shadow flex gap-2 mb-1">
                  <Image
                    src={
                      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_projectile_speed.png"
                    }
                    alt="projectile_speed"
                    width={24}
                    height={24}
                  />
                  {hero.projectile_speed}
                </p>
              </div>
              <div className="flex flex-col w-[80px]">
                <h4 className="uppercase tracking-wider text-white/60 text-base text-center mb-1">
                  DEFENSE
                </h4>
                <p className="text-sm text-white text-shadow flex gap-2 mb-1">
                  <Image
                    src={
                      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png"
                    }
                    alt="armor"
                    width={24}
                    height={24}
                  />
                  {(hero.base_armor + hero.base_agi / 6).toFixed(1)}
                </p>
                <p className="text-sm text-white text-shadow flex gap-2 mb-1">
                  <Image
                    src={
                      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_magic_resist.png"
                    }
                    alt="magic_resist"
                    width={24}
                    height={24}
                  />
                  {hero.base_mr}
                </p>
              </div>
              <div className="flex flex-col w-[80px]">
                <h4 className="uppercase tracking-wider text-white/60 text-base text-center mb-1">
                  Mobility
                </h4>
                <p className="text-sm text-white text-shadow flex gap-2 mb-1">
                  <Image
                    src={
                      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png"
                    }
                    alt="movement_speed"
                    width={24}
                    height={24}
                  />
                  {hero.move_speed}
                </p>
                <p className="text-sm text-white text-shadow flex gap-2 mb-1">
                  <Image
                    src={
                      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_turn_rate.png"
                    }
                    alt="turn_rate"
                    width={24}
                    height={24}
                  />
                  {hero.turn_rate ?? 0.6}
                </p>
                <p className="text-sm text-white text-shadow flex gap-2 mb-1">
                  <Image
                    src={
                      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png"
                    }
                    alt="icon_vision"
                    width={24}
                    height={24}
                  />
                  {hero.day_vision + "/" + hero.night_vision}
                </p>
              </div>
            </div>
            <h3 className="text-center text-xl text-shadow text-white/60 font-light uppercase tracking-widest">
              Stats
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
