import React from "react";
import {IonAvatar, IonItem, IonLabel, IonSkeletonText} from "@ionic/react";

const SkeletonItem: React.FC= () => {
    return (
        <IonItem>
            <IonAvatar slot="start">
                <IonSkeletonText animated/>
            </IonAvatar>
            <IonLabel>
                <h2>
                    <IonSkeletonText animated style={{width: '50%'}}/>
                </h2>
                <p>
                    <IonSkeletonText animated style={{width: '80%'}}/>
                </p>
            </IonLabel>
        </IonItem>
    )
}
export default SkeletonItem;