import { Identifiers } from '@angular/compiler';

export interface IImage {
  path?: string;
  description?: string;
  thumbnail?: boolean;
  show?: boolean;
}

export interface IEvent {
  id: number;
  startDate: Date;
  endDate: Date;

  // For displaying in Events Table
  startDateFormatted?: string;
  endDateFormatted?: string;

  // For the calendar inputs in edit-calendar
  startDateInputFormat?: string;
  endDateInputFormat?: string;

  type: string;
  color: string;
  comments?: string;

  rj?: number;
  speaker?: number;
  participants?: number[];
  images?: IImage[];
}

export interface ISeries extends IEvent {
  episodes?: IEpisode[];
}

export interface IEpisode extends IEvent {
  seriesId: number;
}
