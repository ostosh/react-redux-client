



import React from 'react';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import NavigationExpandMoreIcon from 'material-ui/lib/svg-icons/navigation/expand-more';

import MenuItem from 'material-ui/lib/menus/menu-item';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';

import AppsIcon from './icons/apps';

import MyRawTheme from '../styles/colors.js';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';



import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
const ToolbarsExamplesSimple = () => (
  <Toolbar>
    <ToolbarGroup float="right">
      <FontIcon className="muidocs-icon-custom-sort" />
      <IconMenu anchorOrigin={{horizontal:'left', vertical:'bottom'}} iconButtonElement={
        <IconButton style={{height:"100%"}} touch={true}>
          <AppsIcon />
        </IconButton>
      }>
        <MenuItem primaryText="Download" />
        <MenuItem primaryText="More Info" />
      </IconMenu>
      <ToolbarSeparator />
      <RaisedButton label="Broadcast" secondary={true} />
    </ToolbarGroup>
  </Toolbar>
);

export default ToolbarsExamplesSimple;