import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import NavigationMenu from './NavigationMenu';

var NavigationButton = (props) => 
  <li className={props.className}>
    {props.src && <img src={props.src} />}
    <a href={props.href}>{props.label}</a>
  </li>;

export default React.createClass({
	mixins: [PureRenderMixin],
	render: function(){
    return <nav className="navigation">
      <ul>
        <NavigationMenu className="navigation-menu" href="javascript:;" label="MyKin" />
        <NavigationMenu className="navigation-menu" href="javascript:;" label="Kinnect" />
        <NavigationMenu className="navigation-menu" href="javascript:;" label="Content" />
        <NavigationButton className="search" src="https://mediadistribution.espn.com/wp-content/themes/mediadistribution/assets/img/icon-search.svg"/>
        {/*Feed*/
        /*Globe*/
        /*Play*/
        /*Share*/
        /*Leaderboards*/
        /*Topics*/
        /*Groups*/
        /*Discovery*/
        /*Viral*/}

        
      </ul>

    </nav>    
    ;
	}
});