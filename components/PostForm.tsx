import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

type PostFormProps = {
  handleForm: () => void;
};

const PostForm = ({ handleForm }: PostFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hashtags, setHashtags] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>new post</Text>

      <View>
        {/* title */}
        <View style={styles.inputContainer}>
          <Text style={styles.text}>title</Text>
          <TextInput
            placeholder="title"
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
        </View>
        {/* description */}
        <View style={styles.inputContainer}>
          <Text style={styles.text}>description</Text>
          <TextInput
            placeholder="description"
            style={styles.input}
            value={description}
            onChangeText={setDescription}
          />
        </View>
        {/* hashtags */}
        <View style={styles.inputContainer}>
          <Text style={styles.text}>hashtags</Text>
          <TextInput
            placeholder="hashtags"
            style={styles.input}
            value={hashtags}
            onChangeText={setHashtags}
          />
        </View>
      </View>

      {/* TODO handlepress */}
      <Button title="add post" onPress={() => handleForm} />
    </View>
  );
};

export default PostForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 20,
    textTransform: 'capitalize',
    marginLeft: 12,
  },
});
