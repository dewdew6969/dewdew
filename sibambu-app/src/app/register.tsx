import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen() {
  const [fullName, setFullName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [selectedTps, setSelectedTps] = useState('Krajan'); // 'Krajan' or 'Sukamaju'

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
        {/* Header Background */}
        <View style={styles.headerBackground}>
          <Text style={styles.headerTitle}>Daftar</Text>
          <Text style={styles.headerSubtitle}>untuk memperoleh akun!</Text>
        </View>

        {/* Register Card */}
        <View style={styles.card}>
          
          {/* Nama Lengkap */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nama Lengkap</Text>
            <TextInput
              style={styles.input}
              placeholder="Sesuai KTP"
              placeholderTextColor="#9e9e9e"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          {/* Nomor WhatsApp Asli */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nomor WhatsApp Asli</Text>
            <TextInput
              style={styles.input}
              placeholder="08XX-XXXX-XXXX"
              placeholderTextColor="#9e9e9e"
              value={whatsapp}
              onChangeText={setWhatsapp}
              keyboardType="phone-pad"
            />
          </View>

          {/* Email Aktif */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email Aktif</Text>
            <TextInput
              style={styles.input}
              placeholder="xxxxx@gmail.com"
              placeholderTextColor="#9e9e9e"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Kata Sandi */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Kata Sandi</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.inputPassword}
                placeholder="Minimal 6 karakter"
                placeholderTextColor="#9e9e9e"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons 
                  name={showPassword ? "eye-off-outline" : "eye-outline"} 
                  size={20} 
                  color="#9e9e9e" 
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Konfirmasi Kata Sandi */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Konfirmasi Kata Sandi</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.inputPassword}
                placeholder="Ketik ulang sandi"
                placeholderTextColor="#9e9e9e"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                <Ionicons 
                  name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} 
                  size={20} 
                  color="#9e9e9e" 
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Pilih TPS Terdekat */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Pilih TPS Terdekat</Text>
            <View style={styles.tpsContainer}>
              <TouchableOpacity 
                style={[styles.tpsButton, selectedTps === 'Krajan' && styles.tpsButtonActive]}
                onPress={() => setSelectedTps('Krajan')}
              >
                <Text style={[styles.tpsButtonText, selectedTps === 'Krajan' && styles.tpsButtonTextActive]}>
                  TPS DUSUN KRAJAN
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.tpsButton, selectedTps === 'Sukamaju' && styles.tpsButtonActive]}
                onPress={() => setSelectedTps('Sukamaju')}
              >
                <Text style={[styles.tpsButtonText, selectedTps === 'Sukamaju' && styles.tpsButtonTextActive]}>
                  TPS DUSUN SUKAMAJU
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Kirim Kode OTP ke Email</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>ATAU</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Google Button */}
          <TouchableOpacity style={styles.googleButton}>
            <Ionicons name="logo-google" size={20} color="#DB4437" style={styles.googleIcon} />
            <Text style={styles.googleButtonText}>Masuk dengan Google</Text>
          </TouchableOpacity>

          {/* Login Link */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Sudah memiliki akun? </Text>
            <TouchableOpacity onPress={() => router.replace('/login')}>
              <Text style={styles.loginLink}>Masuk</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e9',
  },
  scrollContent: {
    flexGrow: 1,
  },
  headerBackground: {
    backgroundColor: '#388e3c',
    paddingTop: 80,
    paddingBottom: 60,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#e8f5e9',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#ffffff',
    marginHorizontal: 24,
    marginTop: -40,
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 40,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#424242',
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingVertical: 8,
    fontSize: 14,
    color: '#212121',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  inputPassword: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 14,
    color: '#212121',
  },
  tpsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  tpsButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tpsButtonActive: {
    backgroundColor: '#2e7d32',
    borderColor: '#2e7d32',
  },
  tpsButtonText: {
    fontSize: 12,
    color: '#757575',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tpsButtonTextActive: {
    color: '#ffffff',
  },
  primaryButton: {
    backgroundColor: '#2e7d32',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 10,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  dividerText: {
    marginHorizontal: 16,
    color: '#9e9e9e',
    fontSize: 12,
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 24,
    paddingVertical: 14,
    marginBottom: 32,
  },
  googleIcon: {
    marginRight: 12,
  },
  googleButtonText: {
    color: '#424242',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#757575',
    fontSize: 14,
  },
  loginLink: {
    color: '#0288d1',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
