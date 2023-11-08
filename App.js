import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView } from 'react-native';
import PostCard from './components/PostCard';

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
      <View>
        <ScrollView>
          {blogPosts.map((post, index) => {
            return (
              <PostCard post={post} key={post._id} index={index}/>
            )
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100vh',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20%vw',
    backgroundColor: '#B59DFA',
  },
  header: {
    margin: 10,
    marginTop: 60,
    fontSize: 45,
    fontWeight: '500',
    
  },
});
