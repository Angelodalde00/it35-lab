import { IonPage, IonContent, IonInput, IonButton, IonToast } from "@ionic/react";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

const TwoFASetup: React.FC = () => {
  const [codeWord, setCodeWord] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleEnable2FA = async () => {
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      setToastMessage("Unable to get user.");
      setShowToast(true);
      return;
    }

    const { error } = await supabase.from('two_fa_settings').insert([
      {
        user_id: user.id,
        code_word: codeWord,
        auth_status: true
      }
    ]);

    if (error) {
      setToastMessage("Error saving 2FA: " + error.message);
    } else {
      setToastMessage("2FA has been enabled successfully!");
      setCodeWord('');
    }

    setShowToast(true);
  };

  return (
      <IonContent className="ion-padding">
        <h2>Enable 2FA</h2>
        <IonInput
          label="Code Word"
          labelPlacement="floating"
          placeholder="Enter a secret word like 'Apple'"
          value={codeWord}
          onIonChange={(e) => setCodeWord(e.detail.value!)}
          fill="outline"
        />
        <IonButton onClick={handleEnable2FA} expand="full" style={{ marginTop: '1rem' }}>
          Enable 2FA
        </IonButton>
        <IonToast
          isOpen={showToast}
          message={toastMessage}
          duration={2000}
          position="top"
          color="primary"
          onDidDismiss={() => setShowToast(false)}
        />
      </IonContent>
  );
};

export default TwoFASetup;
