import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Navigation from './Navigation';
import Navigation2 from './NavigationMenu2';
import Navigation3 from './NavigationMenu3';

export default React.createClass({
	mixins: [PureRenderMixin],
	render: function(){
		return <header className="header">
      <div>Feed</div>
      <Navigation2 />
    </header>
    ;
	}
});