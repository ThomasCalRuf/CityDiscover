import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CheckBox from './Checkbox';

const FormScreen = () => {
  const [isSelected, setSelection] = React.useState(false);

  return (
    <ScrollView style={[styles.container, {marginTop: 20 }]}>
      <Text style={styles.question}>Quels sorties tu veux faire ?</Text>
      <View style={styles.formItem}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          tintColors={{ true: '#fff', false: '#fff' }} // pour changer la couleur du checkbox
        />
        <Text style={styles.label}>Restaurant</Text>
      </View>
      <View style={styles.formItem}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          tintColors={{ true: '#fff', false: '#fff' }}
        />
        <Text style={styles.label}>Bar</Text>
      </View>
      <View style={styles.formItem}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          tintColors={{ true: '#fff', false: '#fff' }}
        />
        <Text style={styles.label}>Musée</Text>
      </View>
      <View style={styles.formItem}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          tintColors={{ true: '#fff', false: '#fff' }}
        />
        <Text style={styles.label}>Ballade</Text>
      </View>
      <View style={styles.formItem}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          tintColors={{ true: '#fff', false: '#fff' }}
        />
        <Text style={styles.label}>Cinema</Text>
      </View>
      <View style={styles.formItem}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          tintColors={{ true: '#fff', false: '#fff' }}
        />
        <Text style={styles.label}>Concert</Text>
      </View>
      <View style={styles.formItem}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          tintColors={{ true: '#fff', false: '#fff' }}
        />
        <Text style={styles.label}>Soirée</Text>
      </View>
      <View style={styles.formItem}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          tintColors={{ true: '#fff', false: '#fff' }}
        />
        <Text style={styles.label}>Expositions</Text>
      </View>
      <View style={styles.formItem}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          tintColors={{ true: '#fff', false: '#fff' }}
        />
        <Text style={styles.label}>Activité</Text>
      </View>
      <View style={styles.formItem}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          tintColors={{ true: '#fff', false: '#fff' }}
        />
        <Text style={styles.label}>Match de sport</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  question: {
    backgroundColor: 'orange',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    borderRadius:20
  },
  formItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    color: '#000',
  },
});

export default FormScreen;
