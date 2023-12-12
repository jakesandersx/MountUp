import { View, Text, TouchableOpacity, Modal, TextInput, Button, StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
//import { useUser } from "../context/UserContext";
import HelpAndSupport from "../components/HelpAndSupport";
import TermsAndConditions from "../components/TermsConditions";
import { updatePassword, logoutUser } from "../api/authService";


export default function Settings({navigation}){
    //const { updateUser, updatePasswordContext, userInfo } = useUser();
    const [isTermsVisible, setIsTermsVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('english');
    const [isContactVisible, setIsContactVisible] = useState(false);

    const changeLanguage = () => {
        // Toggle between English and Spanish
        const newLanguage = selectedLanguage === 'english' ? 'spanish' : 'english';
        console.log(newLanguage)
        setSelectedLanguage(newLanguage);
        //If I have more time I could maybe compile a list of words and their correct translations to switch to onPress
    };

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const toggleTerms = () => {
        setIsTermsVisible(!isTermsVisible);
    };
    
    async function handleChangePassword(){
        const userId = userInfo.id
        
        try {
          console.log(await updatePassword(userId, newPassword)); 
          setNewPassword(newPassword);
          toggleModal();
          //updatePasswordContext(newPassword);
        } catch (error) {
          console.error('Error updating password:', error);
          // Handle password update error if needed
        }
    };


    async function handleLogout() {
        try {
          console.log(await logoutUser()); // Call the logout API function
          
        } catch (error) {
          console.error('Error logging out:', error);
        }
      };

    const openContact = () => {
        setIsContactVisible(true);
    };
    
    const closeContact = () => {
        setIsContactVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.yellow_spacers}></View>
            <View>
                <TouchableOpacity onPress={handleLogout}>
                    <Text style={styles.logoutButton}>Logout</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.yellow_spacers}></View>
            <View style={styles.container}>
                <TouchableOpacity onPress={openContact}>
                    <Text style={styles.logoutButton}>Help/Support</Text>
                </TouchableOpacity>

                <Modal visible={isContactVisible} animationType="slide" onRequestClose={closeContact}>
                    <HelpAndSupport />
                    <TouchableOpacity onPress={closeContact}>
                    <Text style={styles.closeButton}>Close</Text>
                    </TouchableOpacity>
                </Modal>
            </View>
            <View style={styles.yellow_spacers}></View>
            <Text style={styles.logoutButton}>Language</Text>
            <TouchableOpacity onPress={changeLanguage}/>
            <View style={styles.yellow_spacers}></View>
            <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.logoutButton}>Change Password</Text>
            </TouchableOpacity>
            <Modal visible={isModalVisible} animationType="slide">
                <View style={styles.modalContent}>
                    <Text style={styles.logoutButton}>Change Password</Text>
                    <TextInput
                        placeholder="Enter new password"
                        onChangeText={(text) => setNewPassword(text)}
                        value={newPassword}
                        secureTextEntry
                    />
                    <Button title="Change Password" onPress={handleChangePassword} />
                    <Button title="Cancel" onPress={toggleModal} />
                </View>
            </Modal>
            <View style={styles.yellow_spacers}></View>
            <TouchableOpacity onPress={toggleTerms}>
                <Text style={styles.logoutButton}>Terms and Conditions</Text>
            </TouchableOpacity>
            <TermsAndConditions isTermsVisible={isTermsVisible} toggleTerms={toggleTerms}/>
            <View style={styles.yellow_spacers}></View>
        </View>
    )
}    
const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        flex: 1,
        color: '#FFF000',
        backgroundColor: '#003366',
        alignItems: 'center',
        justifyContent: 'center',
    },
    yellow_spacers: {
        color: '#FFF000',
        backgroundColor: '#FFCC00',
        flex: 1,
        
    },
    modalContent: {
        flex: 1,
        color: '#FFF000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoutButton: {
        color: '#FFCC00', 
        fontSize: 20
    },
    closeButton: {
        color: '#FFCC00', 
        fontSize: 20
    },
});
