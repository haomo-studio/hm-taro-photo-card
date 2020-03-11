import Taro from '@tarojs/taro';
export default {
  hmPhotoCard: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: Taro.pxTransform(750),
    height: Taro.pxTransform(731)
  },
  box: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: Taro.pxTransform(39),
    boxShadow: '0px 10px 30px rgba(209, 213, 223, 0.50)',
    backgroundColor: '#ffffff',
    width: Taro.pxTransform(721),
    height: Taro.pxTransform(653)
  },
  titleClass: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: Taro.pxTransform(62),
    paddingLeft: Taro.pxTransform(58),
    width: Taro.pxTransform(721)
  },
  title: {
    opacity: 1,
    width: Taro.pxTransform(136),
    height: Taro.pxTransform(47),
    lineHeight: Taro.pxTransform(47),
    whiteSpace: 'pre',
    color: '#858997',
    fontSize: Taro.pxTransform(31),
    fontWeight: 400
  },
  titleImg: { marginTop: Taro.pxTransform(19), width: Taro.pxTransform(35), height: Taro.pxTransform(8) },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Taro.pxTransform(58),
    width: Taro.pxTransform(719)
  },
  img: {
    borderRadius: Taro.pxTransform(29),
    width: Taro.pxTransform(201),
    height: Taro.pxTransform(201),
    overflow: 'hidden'
  },
  img1: {
    marginLeft: Taro.pxTransform(31),
    borderRadius: Taro.pxTransform(29),
    width: Taro.pxTransform(201),
    height: Taro.pxTransform(201),
    overflow: 'hidden'
  },
  img2: {
    marginLeft: Taro.pxTransform(29),
    borderRadius: Taro.pxTransform(29),
    width: Taro.pxTransform(201),
    height: Taro.pxTransform(201),
    overflow: 'hidden'
  },
  second: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Taro.pxTransform(29),
    width: Taro.pxTransform(719)
  },
  img3: {
    borderRadius: Taro.pxTransform(29),
    width: Taro.pxTransform(201),
    height: Taro.pxTransform(201),
    overflow: 'hidden'
  },
  img4: {
    marginLeft: Taro.pxTransform(31),
    borderRadius: Taro.pxTransform(29),
    width: Taro.pxTransform(201),
    height: Taro.pxTransform(201),
    overflow: 'hidden'
  },
  img5: {
    marginLeft: Taro.pxTransform(29),
    borderRadius: Taro.pxTransform(29),
    width: Taro.pxTransform(201),
    height: Taro.pxTransform(201),
    overflow: 'hidden'
  }
};
