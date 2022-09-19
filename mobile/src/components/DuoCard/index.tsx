import { View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export function DuoCard() {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value="Rafael Bortolozo"/>
      <DuoInfo label="Nome" value="Rafael Bortolozo"/>
      <DuoInfo label="Nome" value="Rafael Bortolozo"/>
      <DuoInfo label="Nome" value="Rafael Bortolozo" colorValue="#3B8A21"/>
    </View>
  );
}