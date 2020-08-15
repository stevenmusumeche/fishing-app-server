import {
  SunDetailFieldsFragment,
  SolunarDetailFieldsFragment,
  SolunarPeriodFieldsFragment,
} from "@stevenmusumeche/salty-solutions-shared/dist/graphql";
import { format, startOfDay } from "date-fns";
import React, { FC, useMemo } from "react";

interface Props {
  sunData: SunDetailFieldsFragment[];
  solunarData: SolunarDetailFieldsFragment[];
  date: Date;
}

const ForecastSun: FC<Props> = ({ sunData, solunarData, date }) => {
  const curDaySunData: SunDetailFieldsFragment = useMemo(
    () =>
      sunData.filter(
        (x) =>
          startOfDay(new Date(x.sunrise)).toISOString() ===
          startOfDay(date).toISOString()
      )[0] || {},
    [sunData, date]
  );

  const curDaySolunarData: SolunarDetailFieldsFragment = useMemo(
    () =>
      solunarData.filter(
        (x) =>
          startOfDay(new Date(x.date)).toISOString() ===
          startOfDay(date).toISOString()
      )[0] || {},
    [solunarData, date]
  );

  return (
    <div className="p-4 mt-4 bg-gray-100 border-gray-200 border border-l-0 border-r-0">
      <div className="grid grid-cols-4">
        <SunDay
          name="nautical dawn"
          value={new Date(curDaySunData.nauticalDawn)}
        />
        <SunDay name="sunrise" value={new Date(curDaySunData.sunrise)} />
        <SunDay name="sunset" value={new Date(curDaySunData.sunset)} />
        <SunDay
          name="nautical dusk"
          value={new Date(curDaySunData.nauticalDusk)}
        />
      </div>

      <div className="grid grid-cols-2 mt-4" style={{ fontSize: ".60rem" }}>
        <SolunarPeriod type="Major" periods={curDaySolunarData.majorPeriods} />
        <SolunarPeriod type="Minor" periods={curDaySolunarData.minorPeriods} />
      </div>
      <div className="mt-4">
        <Stars score={curDaySolunarData.score} />
      </div>
    </div>
  );
};

export default ForecastSun;

const SunDay: FC<{ name: string; value: Date }> = ({ name, value }) => (
  <div className="mr-0 last:mr-0 text-center" style={{ fontSize: ".60rem" }}>
    <div className="text-xl leading-tight">{format(value, "h:mm")}</div>
    <div className="uppercase text-gray-600 tracking-tighter">{name}</div>
  </div>
);

const SolunarPeriod: FC<{
  type: "Major" | "Minor";
  periods: SolunarPeriodFieldsFragment[];
}> = ({ type, periods }) => (
  <div className="flex flex-col items-center justify-end">
    {periods.map((period) => (
      <div key={period.start} className="text-base leading-tight lowercase">
        {format(new Date(period.start), "h:mmaaaaa")} -{" "}
        {format(new Date(period.end), "h:mmaaaaa")}
      </div>
    ))}
    <div className="uppercase text-gray-600 tracking-wider">
      {type} Feeding Periods
    </div>
  </div>
);

const Stars: FC<{ score: number }> = ({ score }) => (
  <div className="mt-4">
    <div className="mx-auto grid grid-cols-5 w-1/3">
      {[...new Array(5)].map((e, i) => (
        <StarIcon key={i} color={score > i ? "#ECC94B" : "#cbd5e0"} />
      ))}
    </div>
    <div className="uppercase text-gray-600 tracking-wider text-center text-xs">
      Salty Score
    </div>
  </div>
);

const StarIcon: FC<{ color: string }> = ({ color }) => (
  <svg
    viewBox="0 0 100 100"
    version="1.1"
    x="0px"
    y="0px"
    fill-rule="evenodd"
    clip-rule="evenodd"
    stroke-linejoin="round"
    stroke-miterlimit="1.41421"
  >
    <path
      d="M50,13.82l8.318,23.813c0.328,0.939 0.936,1.756 1.741,2.342c0.805,0.585 1.77,0.91 2.765,0.932l25.218,0.552l-20.077,15.27c-0.792,0.602 -1.382,1.432 -1.689,2.379c-0.308,0.947 -0.319,1.965 -0.032,2.918l7.267,24.154l-20.726,-14.376c-0.818,-0.567 -1.79,-0.871 -2.785,-0.871c-0.995,0 -1.967,0.304 -2.785,0.871l-20.726,14.376l7.267,-24.154c0.287,-0.953 0.276,-1.971 -0.032,-2.918c-0.307,-0.947 -0.897,-1.777 -1.689,-2.379l-20.077,-15.27l25.218,-0.552c0.995,-0.022 1.96,-0.347 2.765,-0.932c0.805,-0.586 1.413,-1.403 1.741,-2.342l8.318,-23.813Z"
      fill="none"
    />
    <clipPath id="a">
      <path d="M50,13.82l8.318,23.813c0.328,0.939 0.936,1.756 1.741,2.342c0.805,0.585 1.77,0.91 2.765,0.932l25.218,0.552l-20.077,15.27c-0.792,0.602 -1.382,1.432 -1.689,2.379c-0.308,0.947 -0.319,1.965 -0.032,2.918l7.267,24.154l-20.726,-14.376c-0.818,-0.567 -1.79,-0.871 -2.785,-0.871c-0.995,0 -1.967,0.304 -2.785,0.871l-20.726,14.376l7.267,-24.154c0.287,-0.953 0.276,-1.971 -0.032,-2.918c-0.307,-0.947 -0.897,-1.777 -1.689,-2.379l-20.077,-15.27l25.218,-0.552c0.995,-0.022 1.96,-0.347 2.765,-0.932c0.805,-0.586 1.413,-1.403 1.741,-2.342l8.318,-23.813Z" />
    </clipPath>
    <g clip-path="url(#a)">
      <rect fill={color} x="-3.206" y="5.556" width="99.306" height="88.333" />
    </g>
    <path
      fill={color}
      d="M50.401,11.352c1.321,0.288 1.47,0.453 1.959,1.643c2.783,7.967 5.341,16.015 8.35,23.899c0.353,0.873 1.226,1.483 2.181,1.514l25.206,0.552c2.135,0.161 3.163,3.042 1.459,4.489c-6.717,5.108 -13.581,10.028 -20.149,15.326c-0.722,0.605 -1.032,1.625 -0.766,2.542l7.264,24.143c0.501,2.06 -1.867,3.978 -3.818,2.775c-6.934,-4.81 -13.734,-9.818 -20.803,-14.427c-0.798,-0.499 -1.864,-0.479 -2.654,0.057l-20.717,14.37c-1.822,1.124 -4.347,-0.603 -3.818,-2.775c2.431,-8.08 5.092,-16.095 7.292,-24.242c0.228,-0.914 -0.12,-1.921 -0.875,-2.507l-20.068,-15.262c-1.596,-1.356 -0.888,-4.312 1.459,-4.489c8.436,-0.185 16.881,-0.131 25.309,-0.557c0.94,-0.065 1.79,-0.707 2.114,-1.606l8.314,-23.802c0.442,-1.076 1.083,-1.824 2.761,-1.643Zm-6.363,27.116c-1.015,2.82 -3.789,4.843 -6.796,4.938l-18.074,0.396l14.39,10.944c0.486,0.377 0.518,0.426 0.731,0.638c1.883,1.875 2.614,4.771 1.864,7.351l-5.208,17.312l14.855,-10.304c0.509,-0.345 0.566,-0.361 0.833,-0.498c2.365,-1.211 5.345,-1.012 7.567,0.498l14.855,10.304l-5.209,-17.312c-0.171,-0.591 -0.168,-0.65 -0.216,-0.946c-0.421,-2.624 0.689,-5.396 2.812,-7.043l14.39,-10.944l-18.074,-0.396c-0.615,-0.02 -0.67,-0.04 -0.967,-0.087c-2.629,-0.41 -4.921,-2.329 -5.829,-4.851l-5.962,-17.067c-1.987,5.689 -3.975,11.378 -5.962,17.067Z"
      fill-rule="nonzero"
    />
  </svg>
);
