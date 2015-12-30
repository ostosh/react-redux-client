import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
	mixins: [PureRenderMixin],
	render: function(){
    return <nav className="tools">
      <span className="search"><a><img src="https://mediadistribution.espn.com/wp-content/themes/mediadistribution/assets/img/icon-search.svg" alt="search"/></a></span>
    </nav>
    ;
	}
});