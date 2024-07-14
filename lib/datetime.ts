import { format } from "date-fns";

export function generateDateRange({
  start,
  end,
}: {
  start: Date;
  end: Date;
}): Date[] {
  const dates = [];
  const currentDate = start;
  while (currentDate <= end) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
}

export function generateWeekRange(date: Date): { start: Date; end: Date } {
  const start = new Date(date);
  start.setDate(start.getDate() - start.getDay());
  const end = new Date(date);
  end.setDate(end.getDate() - end.getDay() + 6);
  return { start, end };
}

export function convertMinutesToHourMinutes(
  minutes: number,
  time12 = false
): string {
  //with 12 hour time and AM/PM and 00:00 format
  if (time12) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const ampm = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12;
    return `${hours12 === 0 ? 12 : hours12}:${
      mins < 10 ? "0" + mins : mins
    } ${ampm}`;
  }
  //with 24 hour time and 00:00 format
  else {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours < 10 ? "0" + hours : hours}:${
      mins < 10 ? "0" + mins : mins
    }`;
  }
}

export function getShortDate(date: Date) {
  return format(date, "dd/MM/yyyy");
}
