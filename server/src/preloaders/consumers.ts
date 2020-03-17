import { SQSHandler } from "aws-lambda";
import { getForecast as getMarineForecast } from "../services/marine";
import { getForecast } from "../services/weather";
import { getById } from "../services/location";

export const forecast: SQSHandler = async (event, ctx, cb) => {
  event.Records.forEach(async record => {
    const payload = JSON.parse(record.body);
    const location = getById(payload.locationId);
    if (!location) throw new Error(`Unknown location ${payload.locationId}`);
    await Promise.all([getMarineForecast(location), getForecast(location)]);
  });
};
