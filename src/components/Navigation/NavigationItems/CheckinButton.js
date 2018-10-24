import React from 'react';

const CheckinButton = () => (
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

export default CheckinButton;