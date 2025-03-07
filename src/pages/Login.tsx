import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
  IonLabel,
  IonItem,
  IonLoading,
  IonToast,
} from '@ionic/react';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const doLogin = () => {
    if (!username || !password) {
      setShowErrorToast(true);
      return;
    }

    setShowLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setShowLoading(false);
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 2000); // Simulating a delay of 2 seconds for the login action
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Username</IonLabel>
          <IonInput
            value={username}
            onIonInput={(e) => setUsername(e.detail.value!)}
            placeholder="Enter your username"
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput
            type="password"
            value={password}
            onIonInput={(e) => setPassword(e.detail.value!)}
            placeholder="Enter your password"
          />
        </IonItem>

        <IonButton onClick={doLogin} expand="full">
          Login
        </IonButton>

        <IonLoading isOpen={showLoading} message="Logging in..." />
        <IonToast
          isOpen={showErrorToast}
          message="Please enter both username and password"
          duration={2000}
          onDidDismiss={() => setShowErrorToast(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
