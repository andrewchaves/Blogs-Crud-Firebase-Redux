import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import _ from 'lodash'

import {getBlogs, deleteBlogs} from '../../actions'
import {connect} from 'react-redux'

class Blogs extends Component {

  componentDidMount(){
    this.props.getBlogs()
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.props.loadingReducer ? <Text>Loading...</Text> :
          <FlatList style={{width: '100%'}}
                 data={this.props.listOfBlogs}
                 keyExtractor={(item) => item.key}
                 showsVerticalScrollIndicator={false}
                 renderItem={({item}) => {
                   return (
                     <View style={styles.renderItem}>
                         <Text style={styles.title}>{item.title}</Text>
                         <Text style={styles.content}>{item.content}</Text>
                         <View style={styles.actionButtonsContainer}>
                           <TouchableHighlight onPress={() => this.props.navigation.navigate('Edit',{...item})}>
                              <View style={{marginRight: 15}}>
                                  <Icon size={30} color="white" name="edit"/>
                              </View>
                           </TouchableHighlight> 
                           <TouchableHighlight onPress={() => this.props.deleteBlogs(item.key)}>
                              <View>
                                  <Icon size={30} color="white" name="close"/>
                              </View>
                           </TouchableHighlight> 
                         </View>
                     </View>
                   )
                 }} />
        }
       
      </View>
    );
  }
}

function mapStateToProps(state) {
  const listOfBlogs = _.map(state.blogsList.blogsList,(val, key) => {
    return {
      ...val,
      key:key
    }
  })
  return {
    listOfBlogs,
    loadingReducer: state.loadingReducer.loadingReducer
  }
}


export default connect(mapStateToProps,{getBlogs, deleteBlogs})(Blogs)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    renderItem:{
      elevation: 8,
      borderRadius: 15,
      backgroundColor: '#575FCF',
      padding: 20,
      marginBottom: 15,
      margin:10
    },
    title: {
      fontSize: 25,
      marginBottom: 10,
      lineHeight: 30,
      fontWeight: 'bold',
      color: '#fff'
    },
    content: {
      fontSize: 15,
      lineHeight: 20,
      color: '#fff'
    },
    actionButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 25
    }
})