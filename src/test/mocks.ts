import { Event } from "../types";

export const getTestEvent = (
  {
    // default values for props
    id = 0,
    name = '',
    startDate = '',
    endDate = '',
    location = '',
    url = ''
  }
    // make this object optional as well
    = {}
) => (
  {
    id,
    name,
    startDate,
    endDate,
    location,
    url
  } as Event);
