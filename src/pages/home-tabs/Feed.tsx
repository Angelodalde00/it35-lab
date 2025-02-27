import { 
  IonAlert,
  IonButton,
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonItem, 
  IonLabel, 
  IonMenuButton, 
  IonNote, 
  IonPage, 
  IonTitle, 
  IonToast, 
  IonToolbar 
} from '@ionic/react';
import { globe, listCircle } from 'ionicons/icons';

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

      <IonIcon color="danger" slot="start" icon={listCircle} size="large"></IonIcon>
      
      
          <IonItem button={true}>
            <IonIcon color="tertiary" slot="start" icon={listCircle} size="large"></IonIcon>
            <IonLabel>Shopping</IonLabel>
            <IonNote slot="end">15</IonNote>
          </IonItem>
          <IonItem button={true}>
            <IonIcon color="warning" slot="start" icon={listCircle} size="large"></IonIcon>
            <IonLabel>Reminders</IonLabel>
            <IonNote slot="end">8</IonNote>
          </IonItem>
          <IonItem button={true}>
            <IonIcon color="success" slot="start" icon={listCircle} size="large"></IonIcon>
            <IonLabel>Cleaning</IonLabel>
            <IonNote slot="end">3</IonNote>
          </IonItem>
          

        <div
          
        >         
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
