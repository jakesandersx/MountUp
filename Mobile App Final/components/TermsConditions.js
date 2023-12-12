import React, {useState} from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';

const TermsAndConditions = ({navigation, isTermsVisible, toggleTerms}) => {
  
  return (
    <View>
    {isTermsVisible ? <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Terms and Conditions</Text>
    <Text style={styles.title}>
      Privacy Policy:
      </Text>
      <Text style={styles.content}>
      1. Information Collection: 
      </Text>
      <Text style={styles.content}>
      We collect personal information, such as names, email addresses, and device information, to provide and improve our services.
      </Text>
      <Text style={styles.content}>
      2. Use of Information: 
      </Text>
      <Text style={styles.content}>
      The collected information is used for account creation, app functionality, and service improvement.
      </Text>
      <Text style={styles.content}>
      3. Data Sharing: 
      </Text>
      <Text style={styles.content}>
      We may share personal information with third-party service providers for analytics, advertising, or other business purposes.
      </Text>
      <Text style={styles.content}>
      4. Security Measures:
      </Text>
      <Text style={styles.content}>
      We implement reasonable security measures to protect against unauthorized access or alteration of personal information.
      </Text>
      <Text style={styles.content}>
      5. User Rights:
      </Text>
      <Text style={styles.content}>
      Users have the right to access, correct, or delete their personal information.
      </Text>
      <Text style={styles.content}>
      6. Policy Changes:
      </Text>
      <Text style={styles.content}>
      We may update our Privacy Policy, and users will be notified of any changes.
      </Text>
      <Text style={styles.title}>
      Terms of Service:
      </Text>
      <Text style={styles.content}>
      1. User Responsibilities:
      </Text>
      <Text style={styles.content}>
      Users are responsible for their use of the app and must comply with our community guidelines.
      </Text>
      <Text style={styles.content}>
      2. Intellectual Property Rights:
      </Text>
      <Text style={styles.content}>
      We retain ownership of the app and its content. Users are granted a limited license to use the app.
      </Text>
      <Text style={styles.content}>
      3. Limitation of Liability:
      </Text>
      <Text style={styles.content}>
      We are not liable for any damages resulting from the use or inability to use our service.
      </Text>
      <Text style={styles.content}>
      4. Dispute Resolution:
      </Text>
      <Text style={styles.content}>
      Any disputes will be resolved through arbitration in a specific jurisdiction.
      </Text>
      <Text style={styles.content}>
      5. Termination Policy:
      </Text>
      <Text style={styles.content}>
      We reserve the right to terminate a user's access to the app for violation of our terms.
      </Text>
      <Text style={styles.content}>
      6. Changes to Terms: 
      </Text>
      <Text style={styles.content}>
      We may update our Terms of Service, and users will be notified of any changes.
    </Text>
    <Button title="Close" onPress={toggleTerms} />
  </ScrollView>
: null}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFF000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    color: '#FFF000',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default TermsAndConditions;
