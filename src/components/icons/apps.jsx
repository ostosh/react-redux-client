
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SvgIcon from 'material-ui/lib/svg-icon';

const Apps = React.createClass({

  mixins: [PureRenderMixin],

  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M4 8h4v-4h-4v4zm6 12h4v-4h-4v4zm-6 0h4v-4h-4v4zm0-6h4v-4h-4v4zm6 0h4v-4h-4v4zm6-10v4h4v-4h-4zm-6 4h4v-4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
      </SvgIcon>
    );
  }

});

export default Apps;
