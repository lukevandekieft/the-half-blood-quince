// NOTE: dead component? Don't see this used anywhere.

import React from 'react';
import PropTypes from 'prop-types';

class AccordionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accordionOpen: false,
    }
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  toggleAccordion() {
    this.setState(({ accordionOpen }) => ({ accordionOpen: !accordionOpen }));
  }

  componentDidUpdate (prevProps) {
    if (prevProps !== this.props) {
      if (!this.props.modalShowing && this.state.accordionOpen) {
        this.toggleAccordion();
      }
    }
  }

  render() {
    console.log("menu?")
    return (
      <div className={this.state.accordionOpen ? 'accordion-item accordion-open' : 'accordion-item'}>
        <a className ='accordion-label' onClick={this.toggleAccordion}>
          <h3>{this.props.name}</h3>
          <i className={this.state.accordionOpen ? 'material-icons menu-arrow view-icon' : 'material-icons menu-arrow'}>arrow_drop_down_circle</i>
        </a>
        <div className='accordion-submenus'>
          {this.props.submenus.map(index => {
            return (
              <a key={index}>{index}</a>
            )
          })}
        </div>
      </div>
    )
  }

  static propTypes = {
    name: PropTypes.string,
  }
}

export default AccordionItem;
