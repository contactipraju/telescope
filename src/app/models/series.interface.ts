import { IEvent }   from './event.interface';
import { IEpisode } from './episode.interface';

export interface ISeries extends IEvent {
  episodes?: IEpisode[];
  category?: string;
  subcategory?: string;
  program?: string;
}
