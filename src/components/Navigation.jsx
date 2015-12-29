import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

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
        <NavigationButton href="https://mediadistribution.espn.com/" label="MyKin" />
        <NavigationButton href="https://mediadistribution.espn.com/" label="Kinnect" />
        <NavigationButton href="https://mediadistribution.espn.com/" label="Content" />
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