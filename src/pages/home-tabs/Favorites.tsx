import { 
    IonButtons,
      IonContent, 
      IonHeader, 
      IonItem, 
      IonLabel, 
      IonList, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
  const Favorites: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Favorites</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <IonContent color="light">
      <IonList inset={true}>
        <IonItem>
          <IonLabel>MaisConYelo</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Drive Max</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Mobile Legend</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Lola Remedios</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Frisbeeeeee</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          Favorites
        </div>
        </IonContent>
      </IonPage>
    );
  };
  export default Favorites;