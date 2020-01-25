import React from "react";
import { View, Platform } from "react-native";
import { GiftedChat } from "react-native-gifted-chat"; 
import KeyboardSpacer from "react-native-keyboard-spacer";

import Firebase from "../Firebase";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    console.ignoredYellowBox = ['Setting a timer'];
  }
  static navigationOptions = ({ navigation }) => ({
    title: "Chat!",
  });

  state = {
    messages: [],
  };

  get user() {
    return {
      name: this.props.navigation.state.params.name,
      email: this.props.navigation.state.params.email,
      id: Firebase.uid,
      _id: Firebase.uid, // need for gifted-chat
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <GiftedChat
          messages={this.state.messages}
          onSend={Firebase.send}
          user={this.user}
        />
        {Platform.OS === "android" ? <KeyboardSpacer /> : null}
      </View>
    );
  }

  componentDidMount() {
    Firebase.refOn(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Firebase.refOff();
  }
}

export default Chat;