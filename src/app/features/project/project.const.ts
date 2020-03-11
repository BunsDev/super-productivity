import {Project, ProjectThemeCfg} from './project.model';
import {DEFAULT_ISSUE_PROVIDER_CFGS} from '../issue/issue.const';
import {getYesterdaysDate} from '../../util/get-yesterdays-date';
import {getWorklogStr} from '../../util/get-work-log-str';
import {WorklogExportSettings, WorklogGrouping} from '../worklog/worklog.model';
import {WORK_CONTEXT_DEFAULT_COMMON} from '../work-context/work-context.const';



export const DEFAULT_PROJECT_THEME: ProjectThemeCfg = {
  isAutoContrast: true,
  isDisableBackgroundGradient: false,
  primary: '#0b77d2',
  huePrimary: '500',
  accent: '#ff4081',
  hueAccent: '500',
  warn: '#e11826',
  hueWarn: '500',
};

export const DEFAULT_PROJECT: Project = {
  id: null,
  title: '',
  themeColor: '',
  isArchived: false,
  // TODO move to global cfg
  timeWorkedWithoutBreak: null,
  theme: DEFAULT_PROJECT_THEME,
  issueIntegrationCfgs: DEFAULT_ISSUE_PROVIDER_CFGS,
  todaysTaskIds: [],
  backlogTaskIds: [],
  ...WORK_CONTEXT_DEFAULT_COMMON
};


export const DEFAULT_PROJECT_ID = 'DEFAULT';

export const FIRST_PROJECT: Project = {
  ...DEFAULT_PROJECT,
  id: DEFAULT_PROJECT_ID,
  title: 'Super Productivity',
  workStart: {},
  workEnd: {},
  theme: DEFAULT_PROJECT_THEME
};
