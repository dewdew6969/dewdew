import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SplashScreen() {
  useEffect(() => {
    // Navigate to login after 2.5 seconds
    const timer = setTimeout(() => {
      router.replace('/login');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Placeholder for the Logo */}
        <Ionicons name="leaf" size={100} color="#2e7d32" style={styles.logoIcon} />
        <Text style={styles.title}>
          <Text style={styles.titleLight}>Si'</Text>
          <Text style={styles.titleBold}>Bambu</Text>
        </Text>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.developedBy}>Developed by FICT X FHS HorizonU</Text>
        <Text style={styles.version}>Versi 1.0.0 (Android)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoIcon: {
    marginBottom: 10,
  },
  title: {
    fontSize: 42,
    flexDirection: 'row',
  },
  titleLight: {
    color: '#8bc34a',
    fontWeight: '600',
  },
  titleBold: {
    color: '#1b5e20',
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
  },
  developedBy: {
    color: '#9e9e9e',
    fontSize: 14,
    fontWeight: 'bold',
  },
  version: {
    color: '#bdbdbd',
    fontSize: 12,
    marginTop: 4,
  },
});
