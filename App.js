import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
    const [ todos, setTodos ] = useState([
        { text: 'buy coffee', key: '1' },
        { text: 'clean the house', key: '2' },
        { text: 'do laundry', key: '3' }
    ])

    return (
        <View style={styles.container}>
            {/* header */}
            <View style={styles.content}>
                {/* todo form */}
                <View style={styles.list}>
                    <FlatList
                        data={ todos }
                        renderItem={ ({item}) => (
                            <Text>{ item.text }</Text>
                        ) }
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 40
    },
    list: {
        marginTop: 20
    }
});
