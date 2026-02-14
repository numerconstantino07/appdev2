import { registerRootComponent } from 'expo';
import HelloWorldDemo from './HelloWorldDemo';
import ProfileDemo from './ProfileDemo';

// Currently registering ProfileDemo as the main screen. 
// To show HelloWorldDemo instead, comment the line below and uncomment the next one.
registerRootComponent(ProfileDemo);

// registerRootComponent(HelloWorldDemo);