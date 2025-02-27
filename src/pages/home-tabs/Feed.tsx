import { 
  IonAlert,
  IonButton,
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToast, 
  IonToolbar 
} from '@ionic/react';
import { globe } from 'ionicons/icons';

const Feed: React.FC = () => {
  function presentToast(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Your Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen style={{ backgroundColor: '#72A0C1' }}>

      <>
      <IonButton id="open-toast">Open Toast</IonButton>
      <IonToast trigger="open-toast" message="Hi Langga I love you" duration={3000} icon={globe}></IonToast>
    </>
      
    
        <div
          
        >         
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
