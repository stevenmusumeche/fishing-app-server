import React, { ChangeEventHandler } from "react";
import DatePicker from "react-date-picker";
import { UseQueryState } from "urql";
import { LocationsQuery, useLocationsQuery } from "../generated/graphql";

interface Props {
  setLocationId: (id: string) => void;
  activeLocationId: string;
  setActiveDate: (date: Date | Date[]) => void;
  activeDate: Date;
}

const AppHeader: React.FC<Props> = ({
  setLocationId,
  activeLocationId,
  activeDate,
  setActiveDate
}) => {
  const [locations] = useLocationsQuery();

  return (
    <div className="md:flex ml-2 md:ml-0">
      <LocationSelect
        locations={locations}
        onChange={e => setLocationId(e.target.value)}
        value={activeLocationId}
      />
      <DatePicker
        aria-label="select date"
        onChange={setActiveDate}
        value={activeDate}
        clearIcon={null}
      />
    </div>
  );
};

export default AppHeader;

interface LocationSelectProps {
  locations: UseQueryState<LocationsQuery>;
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

const LocationSelect: React.FC<LocationSelectProps> = ({
  locations,
  value,
  onChange
}) => (
  <div className="md:mr-6 mb-2 md:mb-0">
    <select
      aria-label="select location"
      onChange={onChange}
      className="select-css h-8 md:h-12 md:text-3xl rounded shadow-md pr-16 pl-3 bg-white"
      value={value}
    >
      {locations.data &&
        locations.data.locations
          .sort((a, b) => ("" + a.name).localeCompare(b.name))
          .map(location => {
            return (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            );
          })}
    </select>
  </div>
);