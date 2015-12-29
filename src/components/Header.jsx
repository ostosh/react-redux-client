import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Navigation from './Navigation';


export default React.createClass({
	mixins: [PureRenderMixin],
	render: function(){
		return <header className="header">
      <Navigation />
		</header>
    ;
	}
});