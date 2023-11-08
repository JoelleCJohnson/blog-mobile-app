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
        borderWidth: 2,
        borderColor: '#877BAE',
        borderRadius: '5%',
      },
    cardContainer: {
        backgroundColor: '#B59DFA',
        borderWidth: 1,
        borderColor: '#877BAE',
        
      },
      posterInfo: {
        flexDirection: 'row',
        backgroundColor: '#B59DFA',
        alignItems: 'stretch'
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
        padding: 5,
        alignItems: 'flex-start'
      },
      displayName: {
        fontSize: 10,
        color: '#d3d3d3',
        padding: 5,
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
        backgroundColor: '#DBBFDB'
      },
      postContent: {
        backgroundColor: '#DBBFDB',
        padding: 20,
        alignItems: 'center',
      }
})