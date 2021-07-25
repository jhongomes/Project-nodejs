import dayjs from "dayjs";
import { IDateProvider } from "../IDateProvider";



class DayjsDateProvider implements IDateProvider{
  
    
    dateNow(): Date {
       return dayjs().toDate();
    }

    addDays(days: number): Date {
       return dayjs().add(days, "days").toDate();
    }

    addHours(hours: number): Date {
      return dayjs().add(hours, "hour").toDate();
   }

    
}

export { DayjsDateProvider}