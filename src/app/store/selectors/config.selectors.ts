import { createSelector } from '@ngrx/store';

import { IAppState }      from '../state/app.state';
import { IConfigState }   from '../state/config.state';

const selectConfig = (state: IAppState) => state.config;

export const selectConfigObject = createSelector(
  selectConfig,
  (state: IConfigState) => state.config
);
