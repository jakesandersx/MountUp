import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';

function HelpAndSupport() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);

    const people = [
        {
            name: 'Oliver Oniate',
            title: 'Full-Stack Develoment',
            email: 'mailto:oliver.oniate@msj.edu',
        },
        {
            name: 'Jake Sanders',
            title: 'Front End Development',
            email: 'mailto:jake.sanders@msj.edu',
        },
        {
            name: 'Evan Webb',
            title: 'Back End Development',
            email: 'mailto:evan.webb@msj.edu',
        },
        {
            name: 'Hunter Frank',
            title: 'Web Design',
            email: 'mailto:hunter.frank@msj.edu',
        },
        {
            name: 'Alex Willett',
            title: 'Web Design',
            email: 'mailto:hunter.frank@msj.edu',
        },
        {
            name: 'Mason Jewell',
            title: 'Database Management',
            email: 'mailto:mason.jewell@msj.edu',
        },
        {
            name: 'Gabe Smorey',
            title: `Minesweeper Engineer`,
            email: 'mailto:gabriel.smorey@msj.edu',
        },
    ];

    const handleEmail = (email) => {
        Linking.openURL(email);
    };

    const openModal = (person) => {
        setSelectedPerson(person);
        setModalVisible(true);
    };
        
    const closeModal = () => {
        setModalVisible(false);
    };
        
    return (
        <View style={styles.container}>
        <Text style={styles.header}>Contact Page</Text>
        <View style={styles.list}>
            {people.map((person, index) => (
            <TouchableOpacity key={index} onPress={() => openModal(person)}>
                <View style={styles.person}>
                <Text style={styles.personName}>{person.name}</Text>
                <Text style={styles.personTitle}>{person.title}</Text>
                </View>
            </TouchableOpacity>
            ))}
        </View>
        {selectedPerson && (
            <Modal visible={modalVisible} animationType="slide" onRequestClose={closeModal}>
            <View style={styles.modalContainer}>
                <Text style={styles.modalHeader}>{selectedPerson.name}</Text>
                <Text style={styles.modalText}>{selectedPerson.title}</Text>
                <TouchableOpacity onPress={() => handleEmail(selectedPerson.email)}>
                <Text style={styles.modalLink}>Contact via Email</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={closeModal}>
                <Text style={styles.closeButton}>Close</Text>
                </TouchableOpacity>
            </View>
            </Modal>
        )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    list: {
        width: '80%',
    },
    person: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
    },
    personName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    personTitle: {
        fontSize: 16,
        color: 'gray',
    },
});

export default HelpAndSupport;
