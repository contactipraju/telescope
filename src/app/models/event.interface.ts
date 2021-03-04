import { IImage } from './misc.interface';

export interface IEvent {
  id?: number;
  name: string;
  description?: string;
  speakers?: string[];

  type?: string;
  color?: string;
  comments?: string;

  rj?: number;
  participants?: number[];
  flyer?: string;
  images?: IImage[];
  seriesId?: number; // TODO: Cleanup later
  youtubeKey?: string;

  startDate?: Date;
  endDate?: Date;

  // For displaying in Events Table
  startDateFormatted?: string;
  endDateFormatted?: string;

  // For the calendar inputs in edit-calendar
  startDateInputFormat?: string;
  endDateInputFormat?: string;
}
