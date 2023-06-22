import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import TileComponent from '../Map/TileComponent';

const PDetailScreen = ({ route }) => {
  const { image, title, description } = route.params;

  const cleanDescription = description.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: image }} 
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{cleanDescription}</Text> 
      {title==="100% Culture" &&
      <View>
      <Text style>10h00 - 14h00</Text>
      <TileComponent 
      image="https://cdn.sortiraparis.com/images/80/66131/350528-le-musee-du-louvre-coeur-artistique-et-touristique-de-la-capitale.jpg"
      title="Musée du Louvre"
      description="Le plus grand musée d'art du monde a été inauguré en 1793. Il propose à ses visiteurs une collection de près de 460000 toiles et sculptures sur une surface de plus de 7000 m2. Situé au plus cœur de la capitale, il est fréquenté chaque année par plus de 7 000 000 de touristes."
      /> 
      <Text>15h00 - 17h00</Text>
      <TileComponent 
      image="https://www.transilien.com/sites/transilien/files/styles/manual_crop/public/2021-12/Mus%C3%A9e%20d%27Orsay.jpg?h=f87dcf60&itok=38D2pZhA"
      title="Musée d'Orsay"
      description="Le musée d'Orsay est un haut lieu de collection d'objets d'art occidental dans toute sa diversité. Il possède une compilation impressionnante de peintures, sculptures, photographies, architecture et arts décoratifs datant du milieu du 19ème siècle jusqu'au début du 20ème."
      />
      </View>
      }
      
      {title==="Promenades à Paris" &&
      <View>
        <Text>14h00 - 15h00</Text>
        <TileComponent 
        image="https://monparisjoli.com/wp-content/uploads/2016/06/cropped-Passerelle-tolbiac-ouverture-pano.jpg"
        title="Passerelle Simone de Beauvoir"
        description="Ouverte uniquement aux modes de circulation douce, la passerelle présente un design moderne en structure lenticulaire. Ses cinq travées franchissent le fleuve sans appui dans l'eau et rejoignent le XIIIe arrondissement directement sur le parvis de la bibliothèque."
        />
        <Text>15h00 - 16h00</Text>
        <TileComponent 
          image="https://www.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_77884/node_77889/pont-royal-%7C-630x405-%7C-%C2%A9-otcp-david-lefranc/10653655-2-fre-FR/Pont-Royal-%7C-630x405-%7C-%C2%A9-OTCP-David-Lefranc.jpg"
          title="Pont Royal"
          description="Dès le début du XVIIe siècle, plusieurs tentatives ont lieu pour établir par un pont à péage, une communication entre le Louvre et le boulevard Saint-Germain au droit de la rue du Bac, afin de remplacer le bac payant que rappelle la dénomination de cette voie. Après plusieurs tentatives de constructions de ponts finalement détruits par les crues de la Seine, la construction d'un nouveau pont est ordonnée par Louis XIV. Jules Hardouin est alors chargé de la construction d'un pont en pierre. Celui-ci, constitué de cinq arches en plein cintre, est construit de 1685 à 1689 avec des matériaux d'élite et surtout des pierres d'une extrême grandeur. Depuis sa construction, il n'a été que légèrement modifié. Il est classé monument historique."
          />
      </View>
      }  
      
        
      

      {title==="Spécial Monuments" &&
        <TileComponent 
        image="https://a.cdn-hotels.com/gdcs/production38/d1419/a60c7ed4-cc5d-478e-98fa-0c4210ed2908.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
        title="Arc de Triomphe"
        description="L’Arc de Triomphe est sans aucun doute l’un des monuments les plus emblématiques de Paris. Inaugurée en 1836, cette imposante structure a été construite à l’origine pour commémorer la victoire de Napoléon à Austerlitz en 1805. Elle est aujourd’hui un hommage aux soldats français qui ont perdu la vie lors de la Première Guerre mondiale, des guerres napoléoniennes et de la Révolution française."
        />
      }  
      {title==="Spécial Monuments" &&
        <TileComponent 
          image="https://a.cdn-hotels.com/gdcs/production93/d1119/948ecba9-2af5-4b9c-876f-9c51bb46043b.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
          title="La basilique du Sacré-Coeur"
          description="La basilique du Sacré-Cœur, également connue sous le nom de basilique du Sacré-Cœur de Montmartre, est l’un des monuments les plus impressionnants de Paris. Élément prépondérant du paysage urbain, cette spectaculaire église est perchée au-dessus des charmantes rues pavées de Montmartre, au point le plus élevé de Paris. Le bâtiment a été consacré en 1919, et ses caractéristiques d’inspiration byzantine et sa façade blanchie lui permettent de se démarquer majestueusement des autres monuments de la ville."
        />
      }
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
  },
  image: {
    width: '100%',
    height: 280,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
});

export default PDetailScreen;
