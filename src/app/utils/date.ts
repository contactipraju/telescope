import * as moment from 'moment';

export class DateFormats {
  static formattedDate(date): string {
    return moment(date).format("D MMM YYYY");
  }
}
