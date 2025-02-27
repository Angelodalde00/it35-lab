import { 
    IonButtons,
      IonContent, 
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonSearchbar, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
import { trash } from 'ionicons/icons';
  const Search: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            
            <IonTitle>Search</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <IonSearchbar showCancelButton="focus" placeholder="Show on Focus"></IonSearchbar>
      <IonSearchbar showCancelButton="always" placeholder="Always Show"></IonSearchbar>
      <IonSearchbar showCancelButton="never" placeholder="Never Show"></IonSearchbar>
      <IonSearchbar
        showCancelButton="always"
        cancelButtonText="Custom Cancel"
        cancelButtonIcon={trash}
        placeholder="Custom Cancel Button"
      ></IonSearchbar>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          Search
        </div>
        </IonContent>
        
      </IonPage>
    );
  };
  export default Search;