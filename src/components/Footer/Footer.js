import React from 'react';
import { Footer, FooterTab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const FooterApp = () => (
    <Footer>
        <FooterTab>
        <Button>
            <Icon 
            style = {{color: 'white'}}
            size={Icon.size || 25}
            active name="user-o" 
            />
        </Button>
        <Button>
            <Icon 
            style = {{color: 'white'}}
            size={Icon.size || 25}
            active name="bell-o" />
        </Button>
        </FooterTab>
    </Footer>
)

export default FooterApp;