import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  const [blogPosts, setBlogPosts] = useState([]) //data comes in as an array of objects

useEffect(() => {
  fetch('http://192.168.10.165:8080/home')
      .then(res => res.json())
      .then(data => setBlogPosts(data))
      .catch(err => console.error(err))
}, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Jo's Gram</Text>
      <StatusBar style="auto" />
      <ScrollView>
      {blogPosts.map((post, index) => {
        return (
          <View key={post._id}>
            <Image source={{ uri: `https://source.unsplash.com/random/${index}`}} width={200} height={100}/>
            <Text>{post.title}</Text>
            {/* <Text>{post.content}</Text> */}
          </View>
        )
      })}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20%vw',
  },
  header:{
    fontSize: 50,
  }
});
