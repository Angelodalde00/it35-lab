import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';

const Feed: React.FC = () => {
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

      <IonContent fullscreen style={{ backgroundColor: '#f4f4f4' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: '20px',
            color: '#333', // Ensuring the text is readable
            fontFamily: 'Arial, sans-serif', // Font for readability
          }}
        >
          <h2>Welcome i love you and i miss you huhu Feed</h2>
          <p style={{ textAlign: 'center', fontSize: '18px' }}>
            Here you can view your personalized content and notifications.
          </p>
          
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
