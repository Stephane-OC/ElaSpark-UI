# EasyElaModals

EasyElaModals est une bibliothèque React légère et personnalisable pour créer des modales responsives et animées facilement. 
Parfait pour ajouter une touche d'élégance et d'interactivité à vos projets web.

## Fonctionnalités

- **Responsive** : S'adapte parfaitement à toutes les tailles d'écran.
- **Personnalisable** : Large choix de styles et d'animations.
- **Facile à utiliser** : Interface simple pour une intégration rapide.
- **Légère** : Optimisée pour ne pas alourdir votre projet.
- **Boutons Flexibles** : Ajoutez des boutons personnalisables avec des fonctions variées.

## Installation

Vous pouvez installer EasyElaModals via npm :

```bash
npm install EasyElaModals
```

## Utilisation

Pour utiliser EasyElaModals dans votre projet React, suivez ces étapes simples :

1. Importez EasyElaModals :

```jsx
import { Modal } from 'EasyElaModals';
```

2. Utilisez le composant Modal dans votre composant React :

```jsx
function App() {
  return (
    <div>
      <Modal>
        {/* Your content here */}
      </Modal>
    </div>
  );
}
```

## Personnalisation

Vous pouvez personnaliser votre modal en passant différentes props :

```jsx
<Modal animation="slideIn" background="dark" size="large">
  {/* Your content here */}
</Modal>
```

## Boutons Intégrés

Les modales EasyElaModals peuvent inclure des boutons personnalisables pour diverses actions. 
Vous pouvez les nommer librement (par exemple, "Accepter", "Annuler", "Refuser") et leur attribuer des fonctions spécifiques, 
comme envoyer une requête API ou enregistrer des données dans le local storage.


```jsx
<Modal>
  {/* Content */}
  <button
    onClick={() => {
      /* Your code for making an API request or storing in local storage */
    }}
  >
    Accepter
  </button>
  <button
    onClick={() => {
      /* Code to cancel or close the modal */
    }}
  >
    Annuler
  </button>
</Modal>;
```

## Styles et Animations de Boutons

EasyElaModals offre également une variété de styles et d'animations pour les boutons, vous permettant de les adapter au look and feel de votre application.

### Exemple avec Animation :

```jsx
<Modal>
  {/* Contenu */}
  <Button
    onClick={() => {
      /* Your code for making an API request or storing in local storage */
    }}
    animation="bounce" // Use the 'animation' prop to apply an animation
  >
    Accepter
  </Button>
  <Button
    onClick={() => {
      /* Code to cancel or close the modal */
    }}
    styleType="outline" // Prop for the button style, for example 'outline'
  >
    Annuler
  </Button>
</Modal>;

```

Créé avec ❤️ par Stephane-OC


Ce modèle de `README.md` ne reflète pas le travail final, qui sera en cours de construction et qui sera amené à évoluer le temps du développement de mon projet

## Licence

EasyElaModals est distribué sous la licence MIT. Cette licence autorise l'utilisation, la modification et la distribution libre, à condition que le texte de la licence MIT soit inclus avec toute distribution substantielle du logiciel. Pour plus d'informations, consultez le fichier `LICENSE` inclus avec cette distribution ou visitez [MIT License](https://opensource.org/licenses/MIT).