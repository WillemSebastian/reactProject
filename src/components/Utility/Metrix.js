import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const Metrix = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width
}

export default Metrix