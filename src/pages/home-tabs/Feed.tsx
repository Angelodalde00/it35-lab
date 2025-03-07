import React, { useState, useEffect } from 'react';
import { 
  IonAlert,
  IonButton,
  IonButtons, 
  IonContent, 
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonHeader, 
  IonIcon, 
  IonItem, 
  
  IonLabel, 
  IonMenuButton, 
  IonNote, 
  IonPage, 
  IonTitle, 
  IonToast, 
  IonToolbar, 
  IonActionSheet


  
} from '@ionic/react';
import { globe, listCircle } from 'ionicons/icons';

const Feed: React.FC = () => {
  function presentToast(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  function setShowActionSheet(arg0: boolean): void {
    throw new Error('Function not implemented.');
  }

  function handleAction(arg0: string): boolean | void | Promise<boolean | void> {
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
      
      
      <IonItem button id="open-action-sheet">
  <IonIcon color="tertiary" slot="start" icon={listCircle} size="large" />
  <IonLabel>Shopping</IonLabel>
  <IonNote slot="end">143</IonNote>
</IonItem>

<IonActionSheet
  trigger="open-action-sheet"
  header="Actions"
  buttons={[
    {
      text: 'Yes',
      role: 'destructive',
      handler: () => handleAction('delete'),
    },
    {
      text: 'Maybe Later',
      role: 'cancel',
    },
  ]}
/>
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
