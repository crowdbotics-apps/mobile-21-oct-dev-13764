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

  state = { TextInput_2: "", CheckBox_3: true, Switch_4: true }

  render = () => (
    <View>
      <TextInput
        placeholder="Number Input Placeholder"
        value={this.state.TextInput_2}
        onChangeText={nextValue => this.setState({ TextInput_2: nextValue })}
      />
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen112906")}
      >
        <CheckBox
          title="Checkbox"
          checked={this.state.CheckBox_3}
          onPress={nextChecked => this.setState({ CheckBox_3: nextChecked })}
        />
      </TouchableOpacity>
      <Switch
        value={this.state.Switch_4}
        onValueChange={nextChecked => this.setState({ Switch_4: nextChecked })}
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
  TextInput_2: {},
  View_1: {},
  TextInput_2: {},
  View_1: {},
  TextInput_2: {},
  CheckBox_3: {},
  View_1: {},
  TextInput_2: {},
  CheckBox_3: {},
  Switch_4: {},
  View_1: {},
  TextInput_2: {},
  CheckBox_3: {},
  Switch_4: {}
})
