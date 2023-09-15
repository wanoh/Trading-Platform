// ** Navigation imports
import apps from './apps'
import pages from './pages'
import forms from './forms'
import tables from './tables'
import others from './others'
import charts from './charts'
import dashboards from './dashboards'
import uiElements from './ui-elements'
import reviveApps from './custom'
import dashboard from './dashboard'

// ** Merge & Export
export default [
  ...dashboard,
  ...reviveApps,
  ...dashboards,
  ...apps,
  ...pages,
  ...uiElements,
  ...forms,
  ...tables,
  ...charts,
  ...others,
]
