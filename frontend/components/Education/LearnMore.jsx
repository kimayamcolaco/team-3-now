import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import {  Card } from 'react-native-paper';

// Scroll view not working? 

export default class LearnMore extends React.Component {
    render () {
        return (

            <View style={styles.container}>
                 <ScrollView style={styles.scrollView}>
            
                    <View style={styles.cards}>
                    <TouchableOpacity>
                        <Card style={styles.cardsGreen}>
                            <Card.Cover source={{ uri: 'https://www.gannett-cdn.com/presto/2020/06/16/USAT/3d6bdf71-183f-48c6-bb2d-5b72d579d333-hiero.floyd.1.jpg?width=660&height=495&fit=crop&format=pjpg&auto=webp'}} />
                            <Card.Content style={styles.cardInfo}>
                                <Text style={styles.cardText}>Activists See Progress After George Floyd's Death But Say ore Must Be Done. Source: USA Today</Text>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.cards}>
                    <TouchableOpacity
                        onPress={()=> null}>
                        <Card style={styles.cardsGreen}>
                        <Card.Cover source={{ uri:'https://cdn.cnn.com/cnnnext/dam/assets/200611132359-la-black-lives-matter-protest-medium-plus-169.jpg '}} />
                        <Card.Content style={styles.cardInfo}>
                        <Text style={styles.cardText}>How Black Lives Matter Went From a Hashtag To a Global Rallying Cry. Source: CNN</Text>
                        </Card.Content>
                        </Card>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.cards}>
                    <TouchableOpacity
                        onPress={()=> null}>
                        <Card style={styles.cardsGreen}>
                        <Card.Cover source={{ uri: 'https://cdn.cnn.com/cnnnext/dam/assets/200607170022-01-lapd-protesters-george-floyd-super-169.jpg' }} />
                        <Card.Content style={styles.cardInfo}>
                            <Text style={styles.cardText}>Following Backlash, LA Officials Say They Won't Criminally Charge Or Fine Peaceful Protesters. Source: CNN</Text>
                        </Card.Content>
                        </Card>
                    </TouchableOpacity>
                    </View>
                    

                    <View style={styles.cards}>
                    <TouchableOpacity
                        onPress={()=> null}>
                        <Card style={styles.cardsGreen}>
                        <Card.Cover source={{ uri: 'https://i.guim.co.uk/img/media/9497ebaa49fac486d6879926ab1e9d471c2f3b5f/0_172_5176_3107/master/5176.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=6b9acca7e5c0c4039752e22f27c5276b' }} />
                        <Card.Content style={styles.cardInfo}>
                            <Text style={styles.cardText}>Cummings Recruit Sacked After Suggesting Police Use 'Live Rounds' On BLM Protesters. Source: The Guardian</Text>
                        </Card.Content>
                        </Card>
                    </TouchableOpacity>
                    </View>

                </ScrollView>


            </View>
           
       

        );
    
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 420,
        alignItems: 'center'


    },
    header: {
      fontWeight: 'bold',
      fontSize: 20,
      paddingTop: '0%',
    },
    cardsGreen: {
      width: 400, 
      borderColor: "black",
      height: 240
    },
    cards: {
      width: 400, 
      paddingTop: '2%',
      borderColor: "black"
    },
    cardInfo: {
      alignItems: 'center',  
    },
    scrollView: {
      width: 400, 
      flex: 1

    },
    cardText: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    cardText: {
        fontWeight: 'bold',
        fontSize: 14,
      },
  });

