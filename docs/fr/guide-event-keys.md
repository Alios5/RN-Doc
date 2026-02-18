# Guide : Note

Apprenez à manipuler les notes, l'élément central de votre rythme.

## Manipulation des Notes

Pour créer et éditer des notes, utilisez les outils dans la barre supérieure des pistes.

### Mode Édition (Crayon)

Activez l'outil **Édition** pour placer des notes manuellement.

-   **Créer une note** : Faites un **clic gauche** sur une piste à l'endroit désiré.
-   **Note longue (Sustain)** : Faites un **clic gauche maintenu + glisser** pour étendre la durée de la note.
-   **Supprimer** : Faites un **clic droit** sur une note pour l’effacer.
-   **Suppression multiple** : Faites un **clic droit maintenu + glisser** pour effacer plusieurs notes à la suite ("gomme").

### Enregistrement Live

Vous pouvez créer des notes en temps réel pendant l'écoute :

1.  Lancez la **lecture** de la musique.
2.  Appuyez sur la **touche assignée** à la piste correspondante au bon moment.
3.  Les notes apparaitront automatiquement synchronisées avec votre frappe.

### Mode Sélection (Curseur)

Activez l'outil **Sélection** pour manipuler des groupes de notes.

-   **Sélection multiple** : Tracez un cadre (asso) autour des notes que vous souhaitez sélectionner.
-   **Déplacer** : Cliquez et glissez la sélection pour la changer de temps ou de piste.
-   **Copier / Coller / Dupliquer** : Utilisez les raccourcis habituels ou le menu contextuel sur la sélection.
-   **Fusionner** : Sélectionnez plusieurs notes sur une même piste et choisissez **Fusionner** pour les combiner en une seule note longue continue.

<video src="/videos/creation-note.mp4" controls="controls" muted="muted" style="max-height:640px; min-height: 200px"></video>

## Événements (Keys)

Les événements de note sont la logique derrière votre jeu de rythme.

### Que sont les touches d'événement ?
Chaque note peut avoir une "touche" (Key) associée. Ces touches sont exportées dans le JSON afin que votre moteur de jeu sache quoi faire lorsqu'une note est frappée.

### Touches courantes
- **note_high** : Joue un son aigu.
- **note_low** : Joue un son grave.
- **fx_visual** : Déclenche un tremblement de caméra ou un flash.

### Personnalisation
Vous pouvez définir n'importe quelle chaîne de caractères comme touche. Cela rend RhythmNator Editor compatible avec n'importe quel moteur de jeu.
