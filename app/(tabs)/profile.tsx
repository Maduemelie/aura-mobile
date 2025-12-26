import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.avatar}>
          <MaterialIcons name="person" size={48} color="#8b5cf6" />
        </View>
        <Text style={styles.profileName}>User Name</Text>
        <Text style={styles.profileEmail}>user@example.com</Text>
      </View>

      <View style={styles.settingsSection}>
        <Text style={styles.sectionTitle}>Settings</Text>

        <Pressable style={styles.settingItem}>
          <MaterialIcons name="notifications" size={20} color="#8b5cf6" />
          <Text style={styles.settingText}>Notifications</Text>
          <MaterialIcons name="chevron-right" size={20} color="#d1d5db" />
        </Pressable>

        <Pressable style={styles.settingItem}>
          <MaterialIcons name="security" size={20} color="#8b5cf6" />
          <Text style={styles.settingText}>Security</Text>
          <MaterialIcons name="chevron-right" size={20} color="#d1d5db" />
        </Pressable>

        <Pressable style={styles.settingItem}>
          <MaterialIcons name="help" size={20} color="#8b5cf6" />
          <Text style={styles.settingText}>Help & Support</Text>
          <MaterialIcons name="chevron-right" size={20} color="#d1d5db" />
        </Pressable>

        <Pressable style={styles.settingItem}>
          <MaterialIcons name="info" size={20} color="#8b5cf6" />
          <Text style={styles.settingText}>About</Text>
          <MaterialIcons name="chevron-right" size={20} color="#d1d5db" />
        </Pressable>
      </View>

      <Pressable style={styles.logoutButton}>
        <MaterialIcons name="logout" size={20} color="#ffffff" />
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomColor: '#e5e7eb',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: '#ffffff',
    marginBottom: 8,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f3e8ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  profileEmail: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  settingsSection: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    marginBottom: 12,
    marginTop: 8,
    textTransform: 'uppercase',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    marginBottom: 8,
    borderRadius: 8,
  },
  settingText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    color: '#1f2937',
    fontWeight: '500',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: 24,
    paddingVertical: 12,
    backgroundColor: '#ef4444',
    borderRadius: 8,
  },
  logoutText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
});
