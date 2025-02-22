import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { CheckBox_4: true }

  render = () => (
    <View style={styles.View_1}>
      <Text>Sample text content</Text>
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_4}
        onPress={nextChecked => this.setState({ CheckBox_4: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_3: {},
  View_1: { borderColor: "#5fdd96", borderWidth: 4 },
  Text_3: {},
  View_1: {
    width: "100%",
    height: "100%",
    borderColor: "#5fdd96",
    borderWidth: 4
  },

  Text_3: {},
  View_1: {
    width: "100%",
    height: "100%",
    borderColor: "#5fdd96",
    borderWidth: 4
  },

  Text_3: {},
  TextInput_4: {},
  View_1: { borderColor: "#5fdd96", borderWidth: 4 },
  Text_3: {},
  TextInput_4: {},
  View_1: { borderColor: "#5fdd96", borderWidth: 4 },
  Text_3: {},
  CheckBox_4: {}
})
