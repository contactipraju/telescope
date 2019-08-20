import { IEvent } from './event.interface';

export interface IEpisode extends IEvent {
  seriesId?: number;
}
