import { Badge } from "@cloudscape-design/components";
import { OptionDefinition } from "@cloudscape-design/components/internal/components/option/interfaces";
import { Event } from "../../types";
import { Link } from "../_navigation";

export const ANY = 'ANY';
export const GOING = 'GOING';
export const CONSIDERING = 'CONSIDERING';

export const isAny = (status: OptionDefinition) => status.value === ANY;
export const isGoing = (status: OptionDefinition) => status.value === GOING;
export const isConsidering = (status: OptionDefinition) => status.value === CONSIDERING;

export const matchesText = (x: Event, text: string) => {
  const regex = new RegExp(text, 'i'); // i stands for case-insensitive
  return regex.test(x.name) || regex.test(x.location);
};

export const getMatchesStatus = (goingEventIds: number[], consideringEventIds: number[]) => (x: Event, status: OptionDefinition) => isAny(status) || isGoing(status) && goingEventIds.includes(x.id) || isConsidering(status) && consideringEventIds.includes(x.id);

export const dateCellFormatter = (x: Event) => x.startDate === x.endDate ? new Date(x.startDate).toLocaleDateString() : `${new Date(x.startDate).toLocaleDateString()} - ${new Date(x.endDate).toLocaleDateString()}`;
export const nameCellFormatter = (x: Event) => <Link fontSize="body-m" href={"/events/" + x.id}><b>{x.name}</b></Link>;
export const locationCellFormatter = (x: Event) => x.location;
export const getStatusCellFormatter = (goingEventIds: number[], consideringEventIds: number[]) => (x: Event) => <>{goingEventIds.includes(x.id) && <Badge color="green">Going</Badge>}{' '}{consideringEventIds.includes(x.id) && <Badge color="grey">Considering</Badge>}</>;
export const urlCellFormatter = (x: Event) => <Link external href={x.url}>Website</Link>;

export const dateSortingComparator = (x: Event, y: Event) => new Date(x.startDate).getTime() - new Date(y.startDate).getTime();
export const nameSortingComparator = (x: Event, y: Event) => x.name.localeCompare(y.name);
