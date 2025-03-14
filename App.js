import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import img1 from './assets/celticsxgolden.png';
import img2 from './assets/chelseaxarsenal.png';
import img3 from './assets/flamengoxvasco.png';
import img4 from './assets/liverpoolxcity.png';
import img5 from './assets/realxbarca.png';

const Card = ({ title, description, image, style }) => {
  return (
    <View style={[styles.imageCard, style]}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

class App extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerText}>Dicas de Apostas</Text>

        <Card 
          title="Celtics x Warriors" 
          description="Vitória Celtics." 
          image={img1}
          style={{ backgroundColor: "#333" }} 
        />
        <Card 
          title="Arsenal x Chelsea" 
          description="Ambos Marcam." 
          image={img2}
          style={{ backgroundColor: "#333" }} 
        />
        <Card 
          title="Flamengo x Vasco" 
          description="Vitória Flamengo." 
          image={img3}
          style={{ backgroundColor: "#333" }} 
        />
        <Card 
          title="Liverpool x City" 
          description="Over 10 Escanteios." 
          image={img4}
          style={{ backgroundColor: "#333" }} 
        />
        <Card 
          title="Real x Barcelona" 
          description="Ambos Marcam." 
          image={img5}
          style={{ backgroundColor: "#333" }} 
        />
      </ScrollView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#121212',
    paddingTop: 50,
    paddingBottom: 20 // Garantir que a parte de baixo também tenha um espaço adequado
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center'
  },
  imageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    width: 360, 
    height: 150, 
  },
  textContainer: {
    marginLeft: 20
  },
  image: {
    width: 180,
    height: 100,
    borderRadius: 10
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
    color: 'white'
  },
  description: {
    fontSize: 12,
    color: 'white'
  }
});
