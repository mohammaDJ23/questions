import moment from 'moment';

export class Moment {
  static format(date: string | Date, format: string) {
    return moment(date).format(format);
  }
}
