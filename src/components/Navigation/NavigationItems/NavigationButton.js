import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, CardItem, Body, Button} from 'native-base';

const navigationButton = (props) => (
    <Card style={styles.DisplayFlex}>
        <CardItem>
            <Body>
            <Button style={styles.DisplayFlexButton}>
                <Text>Click</Text>
            </Button>
            </Body>
        </CardItem>
    </Card>
);

const styles = StyleSheet.create({
    DisplayFlex : {
        display: 'flex',
        width: 100,
        alignItems: 'center',
    },
    
    DisplayFlexButton: {
        borderRadius: 50,
    }
    
});
export default navigationButton;