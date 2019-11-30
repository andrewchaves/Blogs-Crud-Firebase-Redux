import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import {editBlogs} from '../../actions'
import {connect} from 'react-redux'

class Edit extends Component {
 
  state = {
        title: this.props.navigation.state.params.title,
        content: this.props.navigation.state.params.content,
        key: this.props.navigation.state.params.key
  }

  submit = () => {
    this.props.editBlogs(this.state.title, this.state.content, this.state.key)
    this.setState({
      title:"",
      content:"",
      key: ""
    })
    this.props.navigation.navigate('Blogs')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Edit </Text>
        <TextInput style={styles.texInput}
                   placeholder="title" 
                   onChangeText={title => this.setState({title})}
                   value={this.state.title}/>
                   
        <TextInput style={styles.texInput}
                   placeholder="content" 
                   onChangeText={content => this.setState({content})} 
                   value={this.state.content}/>
        <Button title="Submit" onPress={this.submit}/>
      </View>
    );
  }
}

export default connect(null, {editBlogs})(Edit)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        backgroundColor: '#fff'
    },
    texInput: {
      marginBottom: 20,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1
    }
})