import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@/components/ui/Button/Button';
import { typography } from '@/theme/tokens';

export default function Index() {
  return (
    <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
      <Button
        title="Botão de teste"
        width={200}
        height={50}
        backgroundColor={typography.color.backgroundPrimary}
        textColor={typography.color.secondary}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
});