import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  useIonRouter,
} from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import background from '../images/violet.jpg';
import VoiceService from '../services/VoiceService';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [show2FA, setShow2FA] = useState(false);
  const [expectedCodeWord, setExpectedCodeWord] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    return () => {
      VoiceService.stop();
    };
  }, []);

  const doLogin = async () => {
    const { data: { user }, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error || !user) {
      setAlertMessage(error?.message || "Login error.");
      setShowAlert(true);
      return;
    }

    const { data, error: faError } = await supabase
      .from('two_fa_settings')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (faError || !data || data.auth_status === false) {
      setToastMessage("Login successful!");
      setShowToast(true);
      setTimeout(() => {
        navigation.push('/it35-lab/app', 'forward', 'replace');
      }, 1000);
    } else {
      setExpectedCodeWord(data.code_word);
      setShow2FA(true);
      await VoiceService.speak("Please speak your code word to continue.");
    }
  };

  const verifyCodeWord = async () => {
    try {
      setIsListening(true);
      const spoken = await VoiceService.listen();
      
      if (spoken.toLowerCase().trim() === expectedCodeWord.toLowerCase().trim()) {
        setToastMessage("Voice match success!");
        setShowToast(true);
        setTimeout(() => {
          navigation.push('/it35-lab/app', 'forward', 'replace');
        }, 1000);
      } else {
        setAlertMessage("Code word does not match. Try again.");
        setShowAlert(true);
      }
    } catch (error) {
      setAlertMessage(`Error: ${error instanceof Error ? error.message : 'Voice recognition failed'}`);
      setShowAlert(true);
    } finally {
      setIsListening(false);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <img
          src={background}
          alt="background"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '25%',
        }}>
          <IonAvatar style={{ width: '150px', height: '150px' }}>
            <IonIcon icon={logoIonic} style={{ fontSize: '120px', color: '#6c757d' }} />
          </IonAvatar>
          <h1 style={{ color: 'violet' }}>LOGIN!</h1>
          <IonInput
            label="Email"
            labelPlacement="floating"
            fill="outline"
            type="email"
            placeholder="Enter Email"
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
            style={{ color: 'white' }}
          />
          <IonInput
            style={{ marginTop: '10px' }}
            fill="outline"
            type="password"
            placeholder="Password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>
          <IonButton onClick={doLogin} expand="full" shape="round" color="tertiary" style={{ marginTop: 16 }}>
            Login
          </IonButton>
          <IonButton routerLink="/register" expand="full" fill="clear" shape="round" color="tertiary">
            Don't have an account? Register here
          </IonButton>
        </div>

        {show2FA && (
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <h3 style={{ color: 'white' }}>Voice 2FA Verification</h3>
            <IonButton 
              color="tertiary" 
              onClick={verifyCodeWord}
              disabled={isListening}
            >
              {isListening ? 'Listening...' : 'Speak Code Word'}
            </IonButton>
          </div>
        )}

        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={1500}
          position="top"
          color="primary"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;