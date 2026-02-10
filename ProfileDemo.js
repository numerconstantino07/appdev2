import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';

const ProfileDemo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Telegram Style Blue Header */}
        <View style={styles.headerBackground}>
          <View style={styles.profileHeader}>
            <Image 
              source={require('./assets/ProfileImage.jpg')} 
              style={styles.profileImage} 
            />
            <View style={styles.nameContainer}>
              <Text style={styles.userName}>Numeriano L. Constantino Jr</Text>
              <Text style={styles.userStatus}>online</Text>
            </View>
          </View>
        </View>

        {/* Account Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Account</Text>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Username</Text>
            <Text style={styles.infoValue}>@numerconstantino07</Text>
          </View>
          
          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Bio</Text>
            <Text style={styles.infoValue}>
              Aspiring Project Manager & Business Analyst.
            </Text>
          </View>
        </View>

        {/* Professional & Academic Info */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Education & Details</Text>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Course</Text>
            <Text style={styles.infoValue}>3rd Year BSIS Student</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Age</Text>
            <Text style={styles.infoValue}>25 years old</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Hobbies</Text>
            <Text style={styles.infoValue}>Reading & Cooking</Text>
          </View>
        </View>

        {/* Pet Peeves Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Classroom Pet Peeves</Text>
        </View>
        
        <View style={styles.infoCard}>
          <Text style={styles.peeveText}>• Late group submissions.</Text>
          <Text style={styles.peeveText}>• Noisy environments during exams.</Text>
          <Text style={styles.peeveText}>• People reading over my shoulder.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  headerBackground: {
    backgroundColor: '#248bcf',
    paddingBottom: 20,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
  },
  nameContainer: {
    marginLeft: 20,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  userStatus: {
    fontSize: 14,
    color: '#b2e1ff',
  },
  sectionHeader: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  sectionHeaderText: {
    color: '#248bcf',
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  infoCard: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  infoRow: {
    paddingVertical: 8,
  },
  infoLabel: {
    fontSize: 12,
    color: '#888',
  },
  infoValue: {
    fontSize: 16,
    color: '#000',
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 4,
  },
  peeveText: {
    fontSize: 15,
    color: '#444',
    paddingVertical: 4,
  }
});

export default ProfileDemo;