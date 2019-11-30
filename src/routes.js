import Blogs from './components/blogs'
import Post from './components/post'
import Edit from './components/edit'

import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

const NavStack = createStackNavigator({
    Blogs: {
        screen: Blogs,
        navigationOptions:() =>({
            headerTitle:'Blogs'
        })
    },
    Edit: {
        screen: Edit,
        navigationOptions:() =>({
            headerTitle:'Edit'
        })
    },
},{
    headerLayoutPreset: 'center'
})

const BottomTab = createBottomTabNavigator({
    NavStack: {
        screen: NavStack
    },
    Post:{
        screen: Post
    }
})

export default Routes = createAppContainer(BottomTab)