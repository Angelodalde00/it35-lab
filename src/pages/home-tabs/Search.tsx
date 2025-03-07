import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonSearchbar, 
  IonTitle, 
  IonToolbar, 
  IonList, 
  IonItem, 
  IonLabel 
} from '@ionic/react';
import { useState } from 'react';
import { trash } from 'ionicons/icons';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState<string[]>([]);

  const items = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango', 'Grapes', 'Strawberry']; // Example data
  
  const handleSearch = (e: any) => {
    const query = e.detail.value!;
    setSearchQuery(query);
    if (query.trim() !== '') {
      const filtered = items.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
  };

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
        {/* Searchbars */}
        <IonSearchbar 
          value={searchQuery}
          onIonInput={handleSearch}
          showCancelButton="focus"
          placeholder="Search items"
        />
        <IonSearchbar 
          value={searchQuery}
          onIonInput={handleSearch}
          showCancelButton="always"
          placeholder="Always Show"
        />
        <IonSearchbar 
          value={searchQuery}
          onIonInput={handleSearch}
          showCancelButton="never"
          placeholder="Never Show"
        />
        <IonSearchbar
          value={searchQuery}
          onIonInput={handleSearch}
          showCancelButton="always"
          cancelButtonText="Custom Cancel"
          cancelButtonIcon={trash}
          placeholder="Custom Cancel Button"
        />

        {/* Results */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <IonList>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <IonItem key={index}>
                  <IonLabel>{item}</IonLabel>
                </IonItem>
              ))
            ) : (
              <IonItem>
                <IonLabel>No results found</IonLabel>
              </IonItem>
            )}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
