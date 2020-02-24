import { startOfDay } from "date-fns";
import React, { useState } from "react";
import "./App.css";
import CombinedForecast from "./components/CombinedForecast";
import AirTempCard from "./components/AirTempCard";
import SalinityCard from "./components/SalinityCard";
import WaterTempCard from "./components/WaterTempCard";
import WindCard from "./components/WindCard";
import AppHeader from "./components/AppHeader";
import HourlyForecast from "./components/HourlyForecast";
import SunAndMoon from "./components/SunAndMoon";
import Tides from "./components/Tides";
import { useLocationsQuery, UsgsParam } from "./generated/graphql";
import Shell from "./components/Shell";
import NotFound from "./components/NotFound";
import { RouteComponentProps, navigate } from "@reach/router";
import Maps from "./components/Maps";

const App: React.FC<RouteComponentProps<{ locationSlug: string }>> = ({
  locationSlug
}) => {
  const [locations] = useLocationsQuery();
  const [locationId, setLocationId] = useState(locationSlug!);

  const selectedLocation = locations.data
    ? locations.data.locations.find(location => location.id === locationId)
    : null;

  const [date, setDate] = useState(() => startOfDay(new Date()));

  const handleDateChange = (date: Date | Date[]) => {
    if (Array.isArray(date)) return;
    setDate(date);
  };

  if (locations.fetching) {
    return null;
  }

  if (!selectedLocation) {
    return <NotFound locationSlug={locationSlug!} />;
  }

  return (
    <Shell
      header={
        <AppHeader
          setLocationId={id => {
            setLocationId(id);
            window.scrollTo({ top: 0 });
            navigate(`/${id}`);
          }}
          activeLocationId={locationId}
          setActiveDate={handleDateChange}
          activeDate={date}
        />
      }
    >
      <div className="container p-4 md:p-0 md:mx-auto md:my-0">
        {/* <div className="current-conditions-grid">
          <WindCard locationId={locationId} date={date} />
          <AirTempCard locationId={locationId} date={date} />
          <WaterTempCard
            locationId={locationId}
            usgsSites={selectedLocation.usgsSites.filter(site =>
              site.availableParams.includes(UsgsParam.WaterTemp)
            )}
            date={date}
          />
          <SalinityCard
            locationId={locationId}
            usgsSites={selectedLocation.usgsSites.filter(site =>
              site.availableParams.includes(UsgsParam.Salinity)
            )}
            date={date}
          />
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 md:mb-8">
          <Tides
            locationId={locationId}
            tideStations={selectedLocation.tidePreditionStations}
            usgsSites={selectedLocation.usgsSites.filter(site =>
              site.availableParams.includes(UsgsParam.GuageHeight)
            )}
            date={date}
          />
        </div>

        <SectionTitle text="Forecast" />
        <CombinedForecast locationId={locationId} />

        <SectionTitle text="Solunar Data" />
        <SunAndMoon locationId={locationId} date={date} /> */}
        <SectionTitle text="Maps" />
        <Maps locationId={locationId} />

        <SectionTitle text="Hourly Forecast" />
        <HourlyForecast locationId={locationId} />
      </div>
    </Shell>
  );
};

export default App;

const SectionTitle: React.FC<{ text: string }> = ({ text }) => (
  <h2 className="text-2xl md:text-4xl mb-4 md:mb-8 text-center md:text-left">
    {text}
  </h2>
);
