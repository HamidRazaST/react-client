import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PUBLIC_IMAGE_FOLDER, DEFAULT_BANNER_IMAGE } from '../../configs';
import { getRandomNumber, getNextRoundRobin } from '../../lib';
import { baseStyle, sliderStyle } from './style';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 1,
    };
  }

  componentDidMount() {
    const { banners, duration, random } = this.props;

    if (banners) {
      this.interval = setInterval(() => {
        const { index } = this.state;
        if (random) {
          this.setState({
            index: getRandomNumber(6),
          });
        }

        this.setState({
          index: getNextRoundRobin(6, index),
        });
      }, duration);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      altText,
      banners,
      defaultBanner,
      height,
    } = this.props;

    const { index } = this.state;

    return (
      <div style={{ ...baseStyle }}>
        <img
          alt={altText}
          src={
            banners
              ? PUBLIC_IMAGE_FOLDER + banners[index]
              : PUBLIC_IMAGE_FOLDER + defaultBanner}
          height={height}
          style={{ ...sliderStyle }}
        />
      </div>
    );
  }
}

Slider.defaultProps = {
  altText: 'Default Banner',
  defaultBanner: DEFAULT_BANNER_IMAGE,
  duration: 2000,
  height: 200,
  random: false,
};

Slider.propTypes = {
  altText: PropTypes.string,
  banners: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultBanner: PropTypes.string,
  duration: PropTypes.number,
  height: PropTypes.number,
  random: PropTypes.bool,
};

export default Slider;
