import { Text, View, Image, StyleSheet } from "react-native";

export default function PostCard({ post, index }) {
    return (
        <View style={styles.cardContainer} key={post._id}>
            <View style={styles.posterInfo}>
                <Image source={{ uri: `https://randomuser.me/api/portraits/women/${index}.jpg` }} style={styles.avatar} />
                <View>
                    <Text style={styles.userName}>
                        UserName
                    </Text>
                    <Text style={styles.displayName}>
                        Display Name
                    </Text>
                </View>

            </View >
            <View style={styles.postContainer}>
                <Text style={styles.postTitle}>{post.title}</Text>
                <Image source={{ uri: `https://source.unsplash.com/random/${index}` }} style={styles.image} />
                <Text style={styles.postContent}>{post.content}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: '80%',
        aspectRatio: 1,
      },
    cardContainer: {
        marginVertical: 10,
    
      },
      posterInfo: {
        flexDirection: 'row',
        backgroundColor: '#0021f3'
      },
      avatar: {
        flex: 1,
        width: 50,
        height: 50,
        borderRadius: '50%',
        maxWidth: 50,
        margin: 20,
      },
      userName: {
        fontWeight: '600',
        fontSize: 15,
        color: '#FAF9F6',
      },
      displayName: {
        fontSize: 10,
        color: '#d3d3d3',
      },
      postContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 3,
      },
      postTitle: {
        backgroundColor: '#f4fffe',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 30,
      },
      postContent: {
        textAlign: 'center',
      }
})