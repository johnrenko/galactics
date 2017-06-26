import * as React from 'react';
import * as styles from './button.css';
import classnames from 'classnames';



class Button extends React.Component {
  render() {
    const className = classnames({
      button: true,
      primary: this.props.primary,
      destructive: this.props.destructive,
    }
    )
    return (
      <button className={className}>Hello</button>
    );
  }
};

export default Button;