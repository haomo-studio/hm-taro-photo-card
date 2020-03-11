'use strict';

import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';

import styles from './style.js';

import titleImg from './images/img_24027_0_0.png';
import img from './images/img_24027_0_3.png';
import img1 from './images/img_24027_0_2.png';
import img2 from './images/img_24027_0_4.png';
import img3 from './images/img_24027_0_1.png';
import img4 from './images/img_24027_0_5.png';
import img5 from './images/img_24027_0_6.png';

class HmPhotoCard extends Component {
  constructor(props) {
    super(props);
    let defaultState = {
      title: '我的 图片',
      titleImg: titleImg,
      img: img,
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
      img5: img5
    };
    this.state = Object.assign(defaultState, JSON.parse(JSON.stringify(props)));
  }

  render() {
    return (
      <View style={styles.hmPhotoCard}>
        <View style={styles.box}>
          <View style={styles.titleClass}>
            <Text style={styles.title}>{this.state.title}</Text>
            <Image style={styles.titleImg} src={this.state.titleImg} />
          </View>
          <View style={styles.row}>
            <Image style={styles.img} src={this.state.img} />
            <Image style={styles.img1} src={this.state.img1} />
            <Image style={styles.img2} src={this.state.img2} />
          </View>
          <View style={styles.second}>
            <Image style={styles.img3} src={this.state.img3} />
            <Image style={styles.img4} src={this.state.img4} />
            <Image style={styles.img5} src={this.state.img5} />
          </View>
        </View>
      </View>
    );
  }
}
export default HmPhotoCard;
